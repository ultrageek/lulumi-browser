import path from 'path';

let lulumiAppPath = process.env.NODE_ENV === 'development'
  ? `${__dirname}/../../../../`
  : `${__dirname}/../`;
lulumiAppPath = path.resolve(lulumiAppPath);

const searchEngine = [
  {
    name: 'Google',
    search: 'https://www.google.com/search?q=',
  },
  {
    name: 'Bing',
    search: 'https://www.bing.com/search?q=',
  },
];

const homepage = 'https://github.com/qazbnm456/lulumi-browser';

const tabConfig = {
  defaultUrl: 'https://github.com/qazbnm456/lulumi-browser',
  defaultFavicon: 'https://github.com/favicon.ico',
};

export default {
  lulumiPagesCustomProtocol: 'lulumi://',
  tabConfig,
  aboutPages: {
    about: 'List of about pages',
  },
  searchEngine,
  currentSearchEngine: searchEngine[0],
  homepage,
  lulumiPagesPath: `${lulumiAppPath}/pages/`,
  lulumiPDFJSPath: `${lulumiAppPath}/pdfjs/`,
  lulumiAppPath,
  lulumiRev: 'c26dcb6617a3f7cab3c04ec330a477c579b45205',
};