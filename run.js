const { promisify } = require('util');
let { exec } = require('child_process');
exec = promisify(exec);
const fs = require('fs');

module.exports = async config => {
    const ret = {};

    for(let { name, run, dir } of config) {
        console.log(`Launch ${name}`);
        let time = new Date().getTime();
        const { stderr } = await exec(run, {
            cwd: `.tmp/${dir}`
        });
        time = new Date().getTime() - time;

        if(stderr !== '') {
            throw 'Unexcepted stderr from program! ' + stderr;
        }

        ret[name] = time;
    }

    return ret;
};
