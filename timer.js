const languages = require('./config.json');
const transpile = require('./transpile');
const compile = require('./compile');

languages.forEach(({ run, dir, main }) => {
  if(run === undefined || dir === undefined || main === undefined) {
    throw new Error;
  }
});

const config = languages.map(userConfig => {
  return {
    iters: '20000',
    name: userConfig.dir + '-time',
    ...userConfig
  }
});

transpile(config).then(() => {
  // compile(config);
});

// exec(`${config.run} > ../${config.name}`, {
//   cwd: config.dir
// });