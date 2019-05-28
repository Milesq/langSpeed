const { promisify } = require('util');
let { exec } = require('child_process');
exec = promisify(exec);
const fs = require('fs');

module.exports = config => {
    config.forEach(async ({ name, run, dir }) => {
        // const result = await exec(run, {
        //     cwd: `.tmp/${dir}`
        // });
        console.log(fs.existsSync('.tmp/c/a.exe'));
    });
};
