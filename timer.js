const fs = require("fs");
const languages = require("./config.json");
const transpile = require("./transpile");
const compile = require("./compile");
const run = require("./run");

languages.forEach(({ run, dir, main }) => {
    if (run === undefined || dir === undefined || main === undefined) {
        throw new Error();
    }
});

const iters = process.argv[2] || 50000;

const config = languages.map(userConfig => {
    return {
        iters,
        name: userConfig.dir + "-time",
        ...userConfig
    };
});

(async () => {
    console.log("Generating files...");
    await transpile(config);

    console.log("Compiling...");
    await compile(config);

    console.log("Run");
    let times = await run(config);
    times = Object.entries(times);
    times.sort((x, y) => (x[1] == y[1] ? 0 : x[1] > y[1] ? 1 : -1));
    times = Object.fromEntries(times);

    fs.writeFileSync("results.json", JSON.stringify(times, null, 2));
})();
