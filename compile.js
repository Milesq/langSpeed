const { promisify } = require('util');
let { exec } = require('child_process');
exec = promisify(exec);

module.exports = async config => {
    const result = config.map(async ({ dir, name, compile }) => {
        if(compile === undefined) return;

        try {
            console.log('Compiling ' + name);
            await exec(compile, {
                cwd: `.tmp/${dir}/`
            });
            console.log('Compilation end');
            console.log('');
        } catch(err) {
            console.log(err);
        }
    });

    await Promise.all(result);
};
