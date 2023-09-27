import packageJson from './package.json';

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: 'src/pages/options/index.html',
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module'
  },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-34.png'
  },
  icons: {
    '128': 'icon-128.png'
  },
  content_scripts: [
    {
      matches: ['https://www.youtube.com/*', 'https://music.youtube.com/*'],
      all_frames: true,
      run_at: 'document_end',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      world: 'MAIN',
      js: ['src/pages/content/index.js'],
      // KEY for cache invalidation
      css: ['assets/css/contentStyle<KEY>.chunk.css']
    }
  ],
  devtools_page: 'src/pages/devtools/index.html',
  permissions: ['tabs', 'storage', 'scripting'],
  host_permissions: ['https://www.youtube.com/*'],
  web_accessible_resources: [
    {
      matches: ['<all_urls>'],
      resources: ['src/pages/content/index.js']
    },
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'icon-128.png', 'icon-34.png'],
      matches: ['*://*/*']
    }
  ]
};

export default manifest;
