import * as React from "react";
import { CraftTextBlock } from '@craftdocs/craft-extension-api';

type TableOfContentsPreviewProps = {
  isDarkMode: boolean;
  tableOfContents: CraftTextBlock[];
  indent: number;
};

// Components
export const TableOfContentsPreview: React.FC<TableOfContentsPreviewProps> = (props) => {
  
  const { isDarkMode, tableOfContents, indent } = props;

  const tocPreview: JSX.Element[] = [];

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
      }
      tocPreview.push(<div className={divClass} key={item.id}>{item.content.map(textRun => textRun.text).join("") }</div>);

      if (hasSubs) {
        const subToc = <TableOfContentsPreview
          key={`${item.id}-toc-preview`}
          tableOfContents={item.subblocks as CraftTextBlock[]}
          indent={indent + 1}
          isDarkMode={isDarkMode}
        />;
        tocPreview.push(subToc);
      }
    });
  }

  return <div className="toc-preview">
    <>
      { indent === 0 && <p className={`title ${isDarkMode ? 'dark' : 'light'}`}>Preview</p> }
      { 
        <div
          className={`toc-container toc-container-indent-${indent} ${isDarkMode ? 'toc-container-dark' : 'toc-container-light'}`}
        >
          { tocPreview }
        </div>
      }
    </>
  </div>
}