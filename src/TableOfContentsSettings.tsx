import * as React from 'react';
import { TOCSettings } from './types';

type TableOfContentsSettingsProps = {
  isDarkMode: boolean,
  tocSettings: TOCSettings,
  onToggleSettingsCheckbox:(event: React.ChangeEvent<HTMLInputElement>, setting: keyof TOCSettings) => void,
}

export const TableOfContentsSettings: React.FC<TableOfContentsSettingsProps> = (props) => {
  const {
    isDarkMode,
    tocSettings,
    onToggleSettingsCheckbox,
  } = props;
  
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
              onChange={(e) => onToggleSettingsCheckbox(e, 'addDeeplinks')}
            />
            <span>Add deeplinks</span>
          </label>
        </div>
        {/* Subpage settings */}
        <div className={`settingsItem ${tocSettings.showSubpages ? 'hasSubItems' : ''} ${isDarkMode ? 'dark' : ''}`}>
          <label>
            <input
              name="showSubpages"
              type="checkbox"
              checked={tocSettings.showSubpages}
              onChange={(e) => onToggleSettingsCheckbox(e, 'showSubpages')}
            />
            <span>Show subpages</span>
          </label>

          { 
            tocSettings.showSubpages &&
            <div className="settingsSubItem">
              <label>
                <input
                  name="showOnlyStyledSubpages"
                  type="checkbox"
                  checked={tocSettings.showOnlyStyledSubpages}
                  onChange={(e) => onToggleSettingsCheckbox(e, 'showOnlyStyledSubpages')}
                />
                <span>Only styled subpages</span>
              </label>
          </div>
          }
        </div>

        {/* Styling settings */}
        <div className="settingsItem">
          <label>
            <input
              name="includeSubtitle"
              type="checkbox"
              checked={tocSettings.includeSubtitles}
              onChange={(e) => onToggleSettingsCheckbox(e, 'includeSubtitles')}
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
              onChange={(e) => onToggleSettingsCheckbox(e, 'includeHeadings')}
            />
            <span>Include headings</span>
          </label>
        </div>
      </div>
    </div>
  )
}