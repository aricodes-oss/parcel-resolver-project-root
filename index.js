const { Resolver } = require('@parcel/plugin');
const path = require('path');
const fs = require('fs');

module.exports = new Resolver({
  async resolve({ specifier, options: { projectRoot } }) {
    const options = [
      path.join(projectRoot, 'src', `${path.parse(specifier).name}.js`),
      path.join(projectRoot, 'src', path.parse(specifier).name, 'index.js'),
      path.join(projectRoot, 'src', path.parse(specifier).name),
    ];

    for (const filePath of options) {
      if (fs.existsSync(filePath)) {
        return { filePath };
      }
    }

    return null;
  },
});
