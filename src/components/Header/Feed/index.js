import React from 'react';

import './feed.scss';

const Feed = () => {
  return (
    <div id="feed">
      <div className="feed m-8 p-6 flex items-center justify-center">
        <div className="feed-publication flex">
          <div className="publication p-4 bg-white rounded-sm">

            <div className="publication-author mb-3 flex justify-between">
              <div>
                <div className="flex">
                  <div className="publication-author-avatar">
                    <img className="h-12 w-12 mr-2 object-cover rounded-full" alt="" src="/public/assets/img/publi-avatar/Bill_Gates.png" />
                  </div>
                  <div className="publication-author-infos flex flex-col">
                    <div className="flex">
                      <div className="publication-author-name mr-1">
                        Bill Gates
                      </div>
                      <div className="publication-author-level-connection text-gray-600">
                        • 1er
                      </div>
                    </div>
                    <div className="publication-author-company text-gray-600">
                      Microsoft
                    </div>
                    <div className="publication-author-publish-date flex text-gray-600">
                      1 j •
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 1.84a5.16 5.16 0 011 .1v1.65l-1.71 1.7-.29.3v1L4.09 4.67A5.13 5.13 0 018 2.84zm1 10.22v-1.68l-.55-.28L7 10.38V9h3.09l.71.72L9.32 13zM2.84 8a5.1 5.1 0 01.67-2.49L6 8v2.38a1 1 0 00.55.89L8 12v1.16A5.17 5.17 0 012.84 8zm7.85 4.39L11.78 10a.75.75 0 00-.15-.84l-.84-.84a1 1 0 00-.7-.32H8V7l1.71-1.71a1 1 0 00.29-.7V3.24a5.14 5.14 0 01.69 9.15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="publications-options">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M2 10h4v4H2v-4zm8 4h4v-4h-4v4zm8-4v4h4v-4h-4z"></path>
              </svg>
              </div>
            </div>

            <div className="publication-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="publication-stats"></div>
            <div className="publication-actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
