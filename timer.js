const languages = require('./config.json');
const transpile = require('./transpile');
const compile = require('./compile');
const run = require('./run');

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

(async () => {
  console.log('Generating files...');
  await transpile(config);

  console.log('Compiling...');
  await compile(config);

  console.log('Run');
  await run(config);
})();