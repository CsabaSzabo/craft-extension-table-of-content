import { CraftBlock, CraftTextBlock, CraftTextBlockStyle } from "@craftdocs/craft-extension-api";
import { blockWithSomeSubblockLevels } from "./mock/blocks";
import { TOCSettings } from "./types"

export async function getAllTextTitleBlocks(tocSettings: TOCSettings, isDevMode: boolean): Promise<CraftTextBlock> {
  const currentDocument = await getCurrentPage(isDevMode);
  const filteredCurrentDocument = filterTextBlockForTableOfContent(currentDocument, tocSettings, 0);
  return filteredCurrentDocument;
}

function filterTextBlockForTableOfContent(block: CraftTextBlock, tocSettings: TOCSettings, indent: number): CraftTextBlock {
  // deep copy block
  let filteredTextBlock = JSON.parse(JSON.stringify(block));
  filteredTextBlock.subblocks = [];

  const textSubBlocks = block.subblocks.filter(isTextBlock);
  textSubBlocks.forEach(textSubBlock => {

    if (tocSettings.showSubpages && textSubBlock.subblocks.length > 0) {
      // Add textBlock with subblocks (which are filtered)
      filteredTextBlock.subblocks.push(filterTextBlockForTableOfContent(textSubBlock, tocSettings, indent + 1));
    } else if (isTitleTextBlock(textSubBlock, tocSettings)) {
      const filteredTextSublockWithoutSubsubblocks = JSON.parse(JSON.stringify(textSubBlock));
      filteredTextSublockWithoutSubsubblocks.subblocks = [];
      filteredTextBlock.subblocks.push(filteredTextSublockWithoutSubsubblocks);
    }
  })

  return filteredTextBlock;
}

function isTextBlock(block: CraftBlock): block is CraftTextBlock {
  return block.type === "textBlock";
}

function isTitleTextBlock(block: CraftTextBlock, tocSettings: TOCSettings): boolean {
  let requiredFields = ["title"];
  if (tocSettings.includeSubtitles) {
    requiredFields.push("subtitle");
  }
  if (tocSettings.includeHeadings) {
    requiredFields.push("heading");
  }
  return requiredFields.includes(block.style.textStyle);
}

async function getCurrentPage(isDevMode: boolean): Promise<CraftTextBlock> {
  if (isDevMode) {
    // DEV mode
    let mockCurrentDocument = blockWithSomeSubblockLevels;
    return mockCurrentDocument;
  } else {
    // PROD mode
    let result = await craft.dataApi.getCurrentPage();
    if (result.status !== "success") {
      throw new Error(result.error);
    }
    return result.data;
  }
}