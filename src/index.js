import { Resolver } from '@parcel/plugin';
import path from 'path';
import fs from 'fs';

export default new Resolver({
  async resolve({ specifier, options: { projectRoot } }) {
    const options = [
      path.join(projectRoot, 'src', `${path.parse(specifier).name}.js`),
      path.join(projectRoot, 'src', path.parse(specifier).name, 'index.js'),
    ];

    for (const filePath of options) {
      if (fs.existsSync(filePath)) {
        return { filePath };
      }
    }

    return null;
  },
});
