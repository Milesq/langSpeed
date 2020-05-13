# language benchmark

## description

Optimal algorithm for testing N prime numbers, written in different languages

The Timer.js file gets the configuration from the config.json file and tests the performance of the languages. Then it saves it in json format

## Usage

```sh
node timer.js 100 # 100 is count of iterations
# or
npm run start 100
yarn start 100
```

After execute, program will create result.json file

## langs

-   C
-   C++
-   Java
-   Js
-   PHP 7
-   Python 3
-   Kotlin
-   Rust
-   Julia
-   Go

### Example new language - JavaScript

#### Add code

Step one: Add isFirst algorithm

```js
function isFirst(number) {
    for (let i = 2; i <= number / 2; ++i) {
        if (number % i == 0) return false;
    }

    return true;
}
```

Step two: Add loop with variable number of iterations

```js
for (let i = 100; i > 1; --i) {
    isFirst(i);
}
```

Step three: Change iterations count to \_\_ITERS\_\_

```js
for (let i = __ITERS__; i > 1; --i) {
    isFirst(i);
}
```

Last step: add configuration

#### Add configuration

Open config.json and add new json object in array.

Possibility configuration:

-   dir - required string, directory with your code

-   run - required string, command that runs your code

-   main - required string, your main file (there is \_\_ITERS\_\_)

-   compile - string, if your code must be compiled this commands should do that
