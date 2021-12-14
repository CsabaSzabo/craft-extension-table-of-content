import * as React from "react"
import * as ReactDOM from 'react-dom'
import {
  CraftTextRun,
  CraftTextBlock,
  CraftTextBlockInsert,
  TextStyle,
  ListStyle,
} from '@craftdocs/craft-extension-api';
import { getAllTextTitleBlocks } from "./craftdata";
import { init, track, trackPages, parameters } from "insights-js";

// Constants
declare const INSIGHTS_PROJECT_KEY: string | null; // from webpack
declare const IS_DEV_MODE: boolean; // from webpack

// Types
import { TOCSettings } from "./types"

// Components
import { TableOfContentsSettings } from "./TableOfContentsSettings";
import { TableOfContentsPreview } from "./TableOfContentsPreview";

const App: React.FC<{}> = () => {
  const isDarkMode = useCraftDarkMode();
  
  // TOC loading and error states
  const [loading, setLoading] = React.useState(true);
  const [documentError, setDocumentError] = React.useState<Error | null>(null);

  // TOC content
  const [tocSettings, setTocSettings] = React.useState<TOCSettings>({
    showSubpages: true,
    showOnlyStyledSubpages: false,
    addDeeplinks: true,
    includeSubtitles: true,
    includeHeadings: true,
  });
  const [tableOfContentsItems, setTableOfContentsItems] = React.useState<CraftTextBlock[]>([]);
  const [currentPageId, setCurrentPageId] = React.useState<string | null>(null);

  function onToggleSettingsCheckbox(event: React.ChangeEvent<HTMLInputElement>, setting: keyof TOCSettings) {
    const newSettings = {
      ...tocSettings,
      [setting]: event.target.checked,
    };
    setTocSettings(newSettings);
  }

  function reloadTOC() {
    setLoading(true);
    loadDocumentItems(tocSettings)
      .then(tableOfContentsRootBlock => {
        const textSubBlocks = tableOfContentsRootBlock.subblocks as CraftTextBlock[];
        setTableOfContentsItems(textSubBlocks);
        setCurrentPageId(tableOfContentsRootBlock.id);
      })
      .catch(err => {
        setDocumentError(err);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  React.useEffect(() => {
    reloadTOC();
  }, [tocSettings]);

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const tocEmpty = (<p className="toc-empty">This document doesn't contain any title, subtitle or heading, so Table of Contents could not be generated.</p>)

  function insertTableOfContents() {

    const content: CraftTextRun[] = [
      { text: "Table of Contents" }
    ];
  
    const tocHeader = craft.blockFactory.textBlock({
      content,
      style: {
        textStyle: "subtitle"
      },
      hasBlockDecoration: true,
      color: "grey2",
    })

    const tocContent = getInsertedTOCTextBlocks(tableOfContentsItems, 0);
  
    // Insert
    const blocksToInsert = [tocHeader, ...tocContent];
    if (currentPageId) {
      const topLocation = craft.location.indexLocation(currentPageId, 0);
      craft.dataApi.addBlocks(blocksToInsert, topLocation);
    } else {
      craft.dataApi.addBlocks(blocksToInsert);
    }

    if (!IS_DEV_MODE) {
      track({
        id: "toc-inserted",
        parameters: {
          rootTocItemCount: tableOfContentsItems.length.toString(),
          tocItemCount: getTOCItemCount(tableOfContentsItems).toString(),
          tocDeepness: getTOCDeepness(tableOfContentsItems).toString(),
          settingsShowSubpages: tocSettings.showSubpages.toString(),
          settingsShowOnlyStyledSubpages: tocSettings.showOnlyStyledSubpages.toString(),
          settingsAddDeeplinks: tocSettings.addDeeplinks.toString(),
          settingsIncludeSubtitles: tocSettings.includeSubtitles.toString(),
          settingsIncludeHeadings: tocSettings.includeHeadings.toString(),
        }
      })
    }
  }

  function getInsertedTOCTextBlocks(tocItems: CraftTextBlock[], indent: number): CraftTextBlockInsert[] {

    const insertedTextBlocks: CraftTextBlockInsert[] = [];

    tocItems.forEach(tocItem => {
      let contentText = tocItem.content.map(contentItem => contentItem.text).join(" ");
      let content: CraftTextRun[] | string;
      
      if (!tocSettings.addDeeplinks || tocItem.spaceId == null) {
        content = contentText
      } else {
        content = [{
          text: contentText,
          link: {
            type: "blockLink",
            spaceId: tocItem.spaceId || "",
            blockId: tocItem.id,
          }
        }]
      }

      let textStyle: TextStyle = tocItem.style.textStyle === 'title' ? 'heading' : tocItem.style.textStyle === 'subtitle' ? 'strong' : tocItem.style.textStyle === 'heading' ? 'body' : 'caption';
      
      let listStyle: ListStyle = {
        type: "none"
      };
      if (tocItem.subblocks.length > 0) {
        listStyle = {
          type: "toggle"
        };
      }
      
      let textBlock = craft.blockFactory.textBlock({
        content,
        style: {
          textStyle: textStyle
        },
        listStyle,
        indentationLevel: indent,
        hasBlockDecoration: true,
        color: "grey2",
      })
      insertedTextBlocks.push(textBlock);
      insertedTextBlocks.push(...getInsertedTOCTextBlocks(tocItem.subblocks as CraftTextBlock[], indent + 1));
    });

    return insertedTextBlocks;
  }

  return (
    <div id="app">
      <header className={isDarkMode ? 'header-dark' : 'header-light'}>
        <div></div>
        <div className="title">Table of Contents</div>
        <div></div>
      </header>
      <main>
        { loading ? (
          <div className="loading-container">
            <div className={`loading-spinner ${isDarkMode ? 'dark' : 'light'}`} />
            <label>Loading...</label>
          </div>
        ) : documentError ?
          (<p className={`error-message ${isDarkMode ? 'dark' : 'light'}`}>Error happened in document download. Please try again</p>) :
          (
            <>
              <TableOfContentsSettings
                isDarkMode={isDarkMode}
                tocSettings={tocSettings}
                onToggleSettingsCheckbox={onToggleSettingsCheckbox}
              />

              {
                tableOfContentsItems.length === 0 ?
                  tocEmpty :
                  <TableOfContentsPreview
                    isDarkMode={isDarkMode}
                    tableOfContents={tableOfContentsItems}
                    indent={0}
                    refreshTableOfContents={reloadTOC}
                  />
              }

              { tableOfContentsItems.length > 0 &&
                <button className={`btn toc-btn ${isDarkMode ? "dark" : ""}`} onClick={insertTableOfContents}>
                  Add Table of Contents
                </button>
              }
            </>
          )
        }
      </main>
      <footer className={isDarkMode ? 'footer-dark' : 'footer-light'}>
        <span>Created by <a className={isDarkMode ? 'authorlink-dark' : 'authorlink-light'} href="https://csabaszabo.dev/" target="_blank">csabaszabo</a></span>
      </footer>
    </div>
  )

  
}

function useCraftDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    craft.env.setListener(env => setIsDarkMode(env.colorScheme === "dark"));
  }, []);

  return isDarkMode;
}

function getTOCItemCount(items: CraftTextBlock[]): number {
  let count = 0;
  items.forEach(item => {
    count++;
    if (item.subblocks.length > 0) {
      count += getTOCItemCount(item.subblocks as CraftTextBlock[]);
    }
  });
  return count;
}

function getTOCDeepness(items: CraftTextBlock[]): number {
  let maxDeepness = 0;
  items.forEach(item => {
    if (item.subblocks.length > 0) {
      const deepness = getTOCDeepness(item.subblocks as CraftTextBlock[]);
      if (deepness > maxDeepness) {
        maxDeepness = deepness;
      }
    }
  });
  return maxDeepness + 1;
}

async function loadDocumentItems(tocSettings: TOCSettings) {
  return await getAllTextTitleBlocks(tocSettings, IS_DEV_MODE);
}

export function initApp() {
  if (!IS_DEV_MODE && INSIGHTS_PROJECT_KEY) {
    init(INSIGHTS_PROJECT_KEY);
    trackPages();
  }
  ReactDOM.render(<App />, document.getElementById('react-root'))
}
