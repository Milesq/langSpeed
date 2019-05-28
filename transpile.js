const fs = require('fs');
const util = require('util');
let { ncp } = require('ncp');
ncp = util.promisify(ncp);

module.exports = async config => {

    await require('del')('.tmp');
    fs.mkdirSync('.tmp');

    const copyPromises = config.map(({ dir }) => ncp(dir, `.tmp/${dir}`, () => {}));
    await Promise.all(copyPromises);

    config.forEach(({ dir, main, iters }) => {
        let fileContent = fs.readFileSync(`${dir}/${main}`, 'utf-8');
        while(/[^\\]__ITERS__/.test(fileContent)) {
            fileContent = fileContent.replace(/([^\\])__ITERS__/, '$1' + iters);
        }

        while(/\\__ITERS__/.test(fileContent)) {
            fileContent = fileContent.replace(/\\__ITERS__/, '__ITERS__');
        }

        fs.writeFileSync(`.tmp/${dir}/${main}`, fileContent);
    });
};
