import * as React from "react"
import * as ReactDOM from 'react-dom'
import {
  CraftTextRun,
  CraftTextBlock,
  CraftTextBlockInsert,
  TextStyle,
  ListStyle,
  NoneListStyle,
  ToggleListStyle,
} from '@craftdocs/craft-extension-api';
import { getAllTextTitleBlocks } from "./craftdata";

// Types
import { TOCSettings } from "./types"

// Components
import { TableOfContentSettings } from "./TableOfContentSettings";
import { TableOfContentPreview } from "./TableOfContentPreview";

const App: React.FC<{}> = () => {
  const isDarkMode = useCraftDarkMode();
  
  // TOC loading and error states
  const [loading, setLoading] = React.useState(true);
  const [documentError, setDocumentError] = React.useState<Error | null>(null);

  // TOC content
  const [tocSettings, setTocSettings] = React.useState<TOCSettings>({
    includeSubblocks: true,
    addDeeplinks: false,
    includeSubtitles: true,
    includeHeadings: true,
  });
  const [tableOfContentItems, setTableOfContentItems] = React.useState<CraftTextBlock[]>([]);

  function onToggleIncludeSubblocks(event: React.ChangeEvent<HTMLInputElement>) {
    setTocSettings({
      ...tocSettings,
      includeSubblocks: event.target.checked
    });
  }

  function onToggleAddDeeplinks(event: React.ChangeEvent<HTMLInputElement>) {
    setTocSettings({
      ...tocSettings,
      addDeeplinks: event.target.checked
    });
  }

  function onToggleIncludeSubtitles(event: React.ChangeEvent<HTMLInputElement>) {
    setTocSettings({
      ...tocSettings,
      includeSubtitles: event.target.checked
    });
  }

  function onToggleIncludeHeadings(event: React.ChangeEvent<HTMLInputElement>) {
    setTocSettings({
      ...tocSettings,
      includeHeadings: event.target.checked
    });
  }

  React.useEffect(() => {
    setLoading(true);
    loadDocumentItems(tocSettings)
      .then(tableOfContentItems => {
        setTableOfContentItems(tableOfContentItems);
      })
      .catch(err => {
        setDocumentError(err);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [tocSettings]);

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const tocEmpty = (<p className="toc-empty">This document doesn't contain any title, subtitle or heading, so table of content could not be generated.</p>)

  function insertTableOfContent() {

    const content: CraftTextRun[] = [
      { text: "Table of Content" }
    ];
  
    const tocHeader = craft.blockFactory.textBlock({
      content,
      style: {
        textStyle: "subtitle"
      },
      hasBlockDecoration: true,
      color: "grey2",
    })

    const tocContent = getInsertedTOCTextBlocks(tableOfContentItems, 0);
  
    // Insert
    craft.dataApi.addBlocks([tocHeader, ...tocContent]);
  }

  function getInsertedTOCTextBlocks(tocItems: CraftTextBlock[], indent: number): CraftTextBlockInsert[] {

    const insertedTextBlocks: CraftTextBlockInsert[] = [];

    tocItems.forEach(tocItem => {
      let content = tocItem.content.map(contentItem => contentItem.text).join(" ");
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
        <div className="title">Table of content</div>
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
              <TableOfContentSettings
                isDarkMode={isDarkMode}
                tocSettings={tocSettings}
                onToggleIncludeSubblocks={onToggleIncludeSubblocks}
                onToggleAddDeeplinks={onToggleAddDeeplinks}
                onToggleIncludeSubtitles={onToggleIncludeSubtitles}
                onToggleIncludeHeadings={onToggleIncludeHeadings}
              />

              {
                tableOfContentItems.length === 0 ?
                  tocEmpty :
                  <TableOfContentPreview
                    isDarkMode={isDarkMode}
                    tableOfContent={tableOfContentItems}
                    indent={0}
                  />
              }

              { tableOfContentItems.length > 0 &&
                <button className={`btn toc-btn ${isDarkMode ? "dark" : ""}`} onClick={insertTableOfContent}>
                  Add Table of Content
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

function insertHelloWorld() {
  const block = craft.blockFactory.textBlock({
    content: "Hello world!"
  });

  craft.dataApi.addBlocks([block]);
}

async function loadDocumentItems(tocSettings: TOCSettings) {
  return await getAllTextTitleBlocks(tocSettings);
}

export function initApp() {
  ReactDOM.render(<App />, document.getElementById('react-root'))
}
