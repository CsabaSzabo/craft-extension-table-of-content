import { CraftBlock, CraftTextBlock, CraftTextBlockStyle } from "@craftdocs/craft-extension-api";
import { blockWithSomeSubblockLevels } from "./mock/blocks";
import { TOCSettings } from "./types"

export async function getAllTextTitleBlocks(tocSettings: TOCSettings): Promise<CraftTextBlock[]> {
  const currentDocument = await getCurrentPage();
  const filteredCurrentDocument = filterTextBlockForTableOfContent(currentDocument, tocSettings)
  return filteredCurrentDocument.subblocks as CraftTextBlock[];
}

function filterTextBlockForTableOfContent(block: CraftTextBlock, tocSettings: TOCSettings): CraftTextBlock {
  // deep copy block
  let filteredTextBlock = JSON.parse(JSON.stringify(block));
  filteredTextBlock.subblocks = [];

  const textSubBlocks = block.subblocks.filter(isTextBlock);
  textSubBlocks.forEach(textSubBlock => {
    if (tocSettings.includeSubblocks && doesTextBlockContainTitleSubblock(textSubBlock, tocSettings)) {
      filteredTextBlock.subblocks.push(filterTextBlockForTableOfContent(textSubBlock, tocSettings));
    } else if (isTitleTextBlock(textSubBlock, tocSettings)) {
      // Othersiwe add only title textblock
      if (tocSettings.includeSubblocks) {
        filteredTextBlock.subblocks.push(textSubBlock);
      } else {
        const filteredTextSublockWithoutSubsubblocks = JSON.parse(JSON.stringify(textSubBlock));
        filteredTextSublockWithoutSubsubblocks.subblocks = [];
        filteredTextBlock.subblocks.push(filteredTextSublockWithoutSubsubblocks);
      }
    }
  })

  return filteredTextBlock;
}

// Returns true if the textblock is a title textblock (title, subtitle, heading) OR if it's subblock (or subblock or sublock recursively) contains a title textblock
function doesTextBlockContainTitleSubblock(block: CraftTextBlock, tocSettings: TOCSettings): boolean {
  return block.subblocks.filter(isTextBlock).some(textSubBlock => {
    return isTitleTextBlock(textSubBlock, tocSettings) || doesTextBlockContainTitleSubblock(textSubBlock, tocSettings);
  });
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

async function getCurrentPage(): Promise<CraftTextBlock> {

  // @ts-ignore
  if (typeof craftDev !== 'undefined') {
    // DEV mode
    console.warn('=== DEV MODE | mock data ===');
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