const { promisify } = require('util');
let { exec } = require('child_process');
// exec = promisify(exec);

module.exports = config => {
    config.forEach(async ({ dir, name, compile }) => {
        if(compile === undefined) return;
        exec('gcc main.c isFirst.h', {
            cwd: '.tmp/c'
        });

        try {
            console.log('Compiling ' + name);
            await exec(compile, {
                cwd: `./tmp/${dir}/`
            });
            console.log('Compilation end');
        } catch(err) {
            console.log(err);
        }
    });
};
