# Credit
All credits are given to Joakim Carlstein [https://www.npmjs.com/package/gulp-install]. `yarn-installs` is modified on top of `gulp-install` to support Yarn.

> Automatically install npm, bower, tsd, and pip packages/dependencies if the relative configurations are found in the gulp file stream respectively

| File Found | Command run|  
| --- | --- |  
|`package.json` | `yarn install`|  
|`bower.json` | `bower install`|  
|`tsd.json` | `tsd install`|  
|`requirements.txt` | `pip install -r requirements.txt`|  

It will run the command in the directory it finds the file, so if you have configs nested in a lower directory than your `slushfile.js`/`gulpfile.js`, this will still work.

## Primary objective

Used as the install step when using [`slush`](https://www.npmjs.org/package/slush) as a Yeoman replacement.

## Installation

### For global use with slush

Install `yarn-install` as a dependency:

```shell
npm install --save yarn-install
```

### For local use with gulp

Install `yarn-install` as a development dependency:

```shell
npm install --save-dev yarn-install
```

## Usage

### In your `slushfile.js`:

```javascript
var install = require("yarn-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install());
```

### In your `gulpfile.js`:

```javascript
var install = require("yarn-install");

gulp.src(['./bower.json', './package.json'])
  .pipe(install());
```

## Options

To not trigger the install use `--skip-install` as CLI parameter when running `slush` or `gulp`.

### options.production

**Type:** `Boolean`

**Default:** `false`


Set to `true` if `npm install` should be appended with the `--production` parameter when stream contains `package.json`.

**Example:**

```javascript
var install = require("yarn-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({production: true}));  
```

### options.ignoreScripts

**Type:** `Boolean`

**Default:** `false`


Set to `true` if `npm install` should be appended with the `--ignore-scripts` parameter when stream contains `package.json`. Useful for skipping `postinstall` scripts with `npm`.

**Example:**

```javascript
var install = require("yarn-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({ignoreScripts: true}));
```

### options.noOptional

**Type:** `Boolean`

**Default:** `false`

Set to `true` if `npm install` should be appended with the `--no-optional` parameter which will prevent optional dependencies from being installed.

**Example:**

```javascript
var install = require("yarn-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({noOptional: true}));
```

### options.allowRoot

**Type:** `Boolean`

**Default:** `false`


Set to `true` if `bower install` should be appended with the `--allow-root` parameter when stream contains `bower.json`.

**Example:**

```javascript
var install = require("yarn-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({allowRoot: true}));  
```

### options.args

**Type:** `Array or String`

**Default:** `undefined`


Specify additional arguments that will be passed to the install command(s).

**Example:**

```javascript
var install = require("yarn-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({
      args: ['dev', '--no-shrinkwrap' ]} // npm install --dev --no-shrinkwrap
    ));  
```
