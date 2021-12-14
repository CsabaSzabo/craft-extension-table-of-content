import * as React from 'react';
import { TOCSettings } from './types';

type TableOfContentsSettingsProps = {
  isDarkMode: boolean,
  tocSettings: TOCSettings,
  onToggleIncludeSubblocks: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onToggleAddDeeplinks: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onToggleIncludeSubtitles: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onToggleIncludeHeadings: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const TableOfContentsSettings: React.FC<TableOfContentsSettingsProps> = (props) => {
  const { isDarkMode, tocSettings, onToggleIncludeSubblocks, onToggleAddDeeplinks, onToggleIncludeSubtitles, onToggleIncludeHeadings } = props;
  
  return (
    <div className={`toc-settings ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="settings">
        <div className="title">Settings</div>
        <div className="settingsItem">
          <label>
            <input
              name="addDeeplinks"
              type="checkbox"
              checked={tocSettings.addDeeplinks}
              onChange={onToggleAddDeeplinks}
            />
            <span>Add deeplinks</span>
          </label>
        </div>
        <div className="settingsItem">
          <label>
            <input
              name="includeSubblocks"
              type="checkbox"
              checked={tocSettings.includeSubblocks}
              onChange={onToggleIncludeSubblocks}
            />
            <span>Include subblocks</span>
          </label>
        </div>
        <div className="settingsItem">
          <label>
            <input
              name="includeSubtitle"
              type="checkbox"
              checked={tocSettings.includeSubtitles}
              onChange={onToggleIncludeSubtitles}
            />
            <span>Include subtitles</span>
          </label>
        </div>
        <div className="settingsItem">
          <label>
            <input
              name="includeHeadings"
              type="checkbox"
              checked={tocSettings.includeHeadings}
              onChange={onToggleIncludeHeadings}
            />
            <span>Include headings</span>
          </label>
        </div>
      </div>
    </div>
  )
}