import { DevicePlatform } from '@craftdocs/craft-extension-api';

export type TOCSettings = {
  // Subpages options
  showSubpages: boolean;
  showOnlyStyledSubpages: boolean;

  // Deeplink options
  addDeeplinks: boolean;

  // Style options
  includeSubtitles: boolean;
  includeHeadings: boolean;
}

export type CraftEnv = {
  isDarkMode: boolean;
  platform: DevicePlatform;
}