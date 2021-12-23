import * as React from "react";
import { CraftTextBlock } from '@craftdocs/craft-extension-api';
import { CraftEnv } from "./types"

type TableOfContentsPreviewProps = {
  craftEnv: CraftEnv;
  tableOfContents: CraftTextBlock[];
  indent: number;
  refreshTableOfContents: () => void;
  tocItemNavigationStarted:() => void;
  tocItemNavigationFailed:() => void;
};

// Components
export const TableOfContentsPreview: React.FC<TableOfContentsPreviewProps> = (props) => {
  
  const { craftEnv, tableOfContents, indent, refreshTableOfContents, tocItemNavigationStarted, tocItemNavigationFailed } = props;
  const tocPreview: JSX.Element[] = [];

  async function handleClick(item: CraftTextBlock) {
    
    // Temporary disable TOC navigation analytics, as the request cannot go out, and InsightsJS API doesn't provide a return value
    // tocItemNavigationStarted();
    const navigationResult = await craft.editorApi.navigateToBlockId(item.id);
    if (navigationResult.status !== "success") {
      console.error(`Failed to navigate to block ${item.id}`);
      // TODO: handle failed navigation
      tocItemNavigationFailed();
    }
  }

  if (tableOfContents.length > 0) {
    tableOfContents.forEach((item, index) => {
      const hasSubs = item.subblocks.length > 0;
      let divClass = 'toc-item';

      if (item.style.textStyle === 'title' && hasSubs) {
        divClass += ' toc-h1 toc-subs';
      } else if (item.style.textStyle === 'title') {
        divClass += ' toc-h1';
      } else if (item.style.textStyle === 'subtitle' && hasSubs) {
        divClass += ' toc-h2 toc-subs';
      } else if (item.style.textStyle === 'subtitle') {
        divClass += ' toc-h2';
      } else if (item.style.textStyle === 'heading' && hasSubs) {
        divClass += ' toc-h3 toc-subs';
      } else if (item.style.textStyle === 'heading') {
        divClass += ' toc-h3';
      } else if (hasSubs) {
        divClass += ' toc-text toc-subs';
      } else {
        divClass += ' toc-text';
      }
      tocPreview.push(
        <div className={divClass} key={item.id} onClick={(e) => handleClick(item)}>
          {item.content.map(textRun => textRun.text).join("") }
        </div>
      );

      if (hasSubs) {
        const subToc = <TableOfContentsPreview
          key={`${item.id}-toc-preview`}
          tableOfContents={item.subblocks as CraftTextBlock[]}
          indent={indent + 1}
          craftEnv={craftEnv}
          refreshTableOfContents={refreshTableOfContents}
          tocItemNavigationStarted={tocItemNavigationStarted}
          tocItemNavigationFailed={tocItemNavigationFailed}
        />;
        tocPreview.push(subToc);
      }
    });
  }

  return <div className="toc-preview">
    <>
      {
        indent === 0 &&
        <div className="toc-preview-header">
          <p className={`title ${craftEnv.isDarkMode ? 'dark' : 'light'}`}>Preview</p>
          <button className={`btn toc-preview-btn ${craftEnv.isDarkMode ? "dark" : ""}`} onClick={refreshTableOfContents}>
            Refresh
          </button>
        </div>
      }
      { 
        <div
          className={`toc-container toc-container-indent-${indent} ${craftEnv.isDarkMode ? 'toc-container-dark' : 'toc-container-light'}`}
        >
          { tocPreview }
        </div>
      }
    </>
  </div>
}