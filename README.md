# hacker-news

This project is build using [vue cli 3](https://cli.vuejs.org).

This app display the most popular stories from [Hacker News API](https://github.com/HackerNews/API)

## How to run this project?

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy to gh-pages
```
npm run deploy
```

## Project structure and methodology

This project is structured using [atomic design](http://bradfrost.com/blog/post/atomic-web-design/). Atomic design is a methodology for helping to design and develop a pattern system.

Example:

![Atomic design illustration](https://camo.githubusercontent.com/96da9cea0dc11a2457a74e6ba8a26c5d835feb37/687474703a2f2f61746f6d696364657369676e2e6272616466726f73742e636f6d2f696d616765732f636f6e74656e742f696e7374616772616d2d61746f6d69632e706e67)


> `Atoms` are UI elements that can’t be broken down any further and serve as the elemental building blocks of an interface.

> `Molecules` are collections of atoms that form relatively simple UI components.

> `Organisms` are relatively complex components that form discrete sections of an interface.

> `Templates` place components within a layout and demonstrate the design’s underlying content structure.

> `Pages` apply real content to templates and articulate variations to demonstrate the final UI and test the resilience of the design system.

### SCSS

I used SCSS in this project. We have to main files:

#### `_global-style-resources.scss`

This file group all the mixins, functions and variables. These files do not output any CSS when compiled. This file allows us to use all our scss variables, function etc. into our vue components and `global.scss` file.

#### `global.scss`

This file output mostly our atoms, global styling and utilities.

#### SCSS Variables in this project

Most variables files follow this structure:

```scss
// ------------------------------
// Sass Variables
// ------------------------------

// CSS variables prefix
$variable-prefix: --variable-;

// Map declaration
$variables: (
  var1: value1,
  var2: value2,
  var3: value3
);

// ------------------------------
// Set function
// ------------------------------

// We link the map and prefix to a function

@function functionToCallVariables($variable, $true-val: false) {
  @if $use-css-var == true {
    @if $true-val == true {
      @return map-get($variables, $variable); // True Val
    } @else {
      @return var(#{$variable-prefix}#{$variable}); // CSS Var
    }
  } @else {
    @return map-get($variables, $variable); // Disabled CSS Var
  }
}

// We call our map in the project using this function
//
// Example:
// functionToCallVariables(var1) => -var(-variable-var1)
// functionToCallVariables(var1, true) => value1
// functionToCallVariables(var1) and $use-css-var: false => value1
```

The above structure allows for maintaining a pattern system.

We are using CSS custom properties as well (the SCSS var functions output CSS custom properties)

### Vue

Components are organized following the atomic design methodology we can find molecules and organisms.
