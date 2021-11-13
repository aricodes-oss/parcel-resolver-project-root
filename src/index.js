import { Resolver } from '@parcel/plugin';
import path from 'path';
import fs from 'fs';

export default new Resolver({
  async resolve({ specifier }) {
    const options = [
      path.join(__dirname, 'src', `${specifier}.js`),
      path.join(__dirname, 'src', specifier, 'index.js'),
    ];

    for (const filePath of options) {
      if (fs.existsSync(filePath)) {
        return { filePath };
      }
    }

    return null;
  },
});
