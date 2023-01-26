import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const urlDirname = (url) => {
  return dirname(fileURLToPath(url));
};

const urlJoin = (url, ...str) => {
  return join(urlDirname(url), ...str);
};

export { urlJoin as join, urlDirname as dirname };
