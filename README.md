<p align="center">
  <a href="#">
    <img alt="SProgress" title="SProgress" src="./assets/sprogress logo.png">
  </a>
</p>

<p align="center">
  <a href="#">
    <img alt="SProgress" title="SProgress" src="https://forthebadge.com/images/badges/built-with-love.svg">
  </a>
  <a href="#">
    <img alt="SProgress" title="SProgress" src="https://forthebadge.com/images/badges/made-with-javascript.svg">
  </a>
  <a href="#">
    <img alt="SProgress" title="SProgress" src="https://forthebadge.com/images/badges/uses-js.svg">
  </a>
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

-   [Introduction](#introduction)
-   [Usage](#usage)
-   [Events](#events)
-   [Options](#options)
-   [Customization](#customization)
-   [Contributions](#contributions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

SProgress is a simple on-scroll progress bar developed for web apps. It aims to give a user feedback as to how far they are in an article.
Inspired by <a href="https://alligator.io">Alligator.io</a>. A brief usage can be seen below 👇🏻
<br />

<p align="center">
  <a href="#">
    <img alt="SProgress Usage" title="SProgress Usage" src="./assets/ezgif-5-96ed7b573113.gif">
  </a>
</p>

## Installation

**Npm or Bower**

To install the package via npm, simply run the command below

```bash
$ npm install sprogress --save
```

```bash
$ yarn add sprogress -S
```

**Via CDN links**

You can also make use of the cdn links if you dont want to install the package. Add the following to your `html` file

```javascript
<script src="https://unpkg.com/sprogress@1.0.2/lib/sprogress.min.js"></script>
```

### Usage

After installing the package, you can simply make use of it by call the `init` function provided.

```javascript
import SProgress from 'sprogress';

SProgress.init({});
```

The `init` function takes in an object which is used to customize the SProgress bar. More on that below

**N.B** - If you are using the CDN, you don't need to call the init method simply add the `script` tag and you all set 😁

### Events

`SProgress` also triggers the `scrollDistanceEvent` event when the specified `scrollDistanceTarget` is reached by the progress bar. This can be useful if you want to display
a feature to the user(maybe a newsletter modal) when they are half way into the page/article.

**`Event`** - `scrollDistanceEvent`

#### Implementation

```javascript
import SProgress from 'sprogress';

SProgress.init({
	scrollDistanceTarget: 60,
});

document.addEventListener('scrollDistanceEvent', displayNewsLetterModal, {
	once: true,
});
```

**N.B** - The `once` object passed to the `addEventListener` in other to invoke the `handler` only once. Highly recommended
if you don't want the handler trigger more than once.

## Options

The following are the options that `SProgress` supports:-

### color

**`String`**

This basically customizes the color of the progress bar.

### height

**`Integer`**

This can be used to manipulates the height of the progress bar.

### scrollDistanceTarget

**`Integer`**

This is used to specify a certain distance for the `scrollDistanceEvent` to fire.

## Customization

With SProgress, the following properties can be customized:-

### Color

**`String`**

```javascript
  import SProgress from 'sprogress';

  SProgress.init({
    color: // Your color here in hex |rgb |rgba format
  });
```

### Height

**`Integer`**

```javascript
import SProgress from 'sprogress';

SProgress.init({
	height: 10,
});
```

### Using Classname

The `default` classname for the progress bar is `scroll-progress` and with that you can create you very own css file and manipulate the class to best suit your needs.

```css
.scroll-progress {
	/* CSS styles here */
}
```

## Contributions

Looking to contribute, then

-   simply clone or fork this repo
-   create a branch for your `bug-fix`, `feature` or `cleanup`
-   raise a pull request
-   if deemed worthy 😁 the branch will be merged ASAP.

## Issues

As they say, `Software is written by humans and therefore has bugs` so if you notice any bug while using the library, do raise an issue

```javascript
/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                                              *
 *                                                                                              *
 *                        ____  ____                                                            *
 *                       / ___||  _ \ _ __ ___   __ _ _ __ ___  ___ ___                         *
 *                       \___ \| |_) | '__/ _ \ / _` | '__/ _ \/ __/ __|                        *
 *                        ___) |  __/| | | (_) | (_| | | |  __/\__ \__ \                        *
 *                       |____/|_|   |_|  \___/ \__, |_|  \___||___/___/                        *
 *                                              |___/                                           *
 *                                                                                              *
 *                                  Copyrights © 2019                                           *
 *                             <Author name="Daniel Eze"                                        *
 *                                url="https://twitter.com/theghostyced" />                     *
 *                                                                                              *
 *                                                                                              *
 *  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
```
