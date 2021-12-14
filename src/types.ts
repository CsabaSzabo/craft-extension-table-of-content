import { DevicePlatform } from '@craftdocs/craft-extension-api';

export type TOCSettings = {
  includeSubblocks: boolean;
  addDeeplinks: boolean;
  includeSubtitles: boolean;
  includeHeadings: boolean;
}

export type CraftEnv = {
  isDarkMode: boolean;
  platform: DevicePlatform;
}