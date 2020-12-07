# Simple Zendesk Garden React App

## Global Setup

Install the following if you haven't already.

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Parcel](https://parceljs.org/getting_started.html)
- [Zendesk CLI](https://github.com/zendesk/zcli)

## Package Setup

```shell script
$ git clone git@github.com:jamesratcliffe/simple-zendesk-garden-react-app.git
$ cd simple-zendesk-garden-react-app

# Install dependencies
$ yarn
```

## Running the App Locally

To test your app locally, run `yarn watch` and `yarn serve` at the same time in two different terminals.
You can set up some IDEs and editors to do this for you with one click. 

## Scripts

You can use these scripts defined in `package.json`.

These scripts build the app in the `dist/assets` directory. If you want to run `zcli` or `zat` manually,
run them from the `dist` directory.

### Build for Development

Parcel will re-build if you update a source file.

```shell script
$ yarn watch
```

### Serve App Locally for Zendesk

This serves the app from the `dist` directory using zcli. Add `?zcli_apps=true` to the end of your
Zendesk URL to see the app in Zendesk.

```shell script
$ yarn serve
```

### Build for Production

Output files are minified.

```shell script
$ yarn build
```

### Bump the App Version

1. Bumps the app version (major, minor or patch) in `dist/manifest.json`.
2. Sets the npm version in `package.json` to match.
3. Creates a version commit and tag with those two files.

```shell script
$ yarn bump
```

#### Options

| Short | Long    | Description                                     |
|-------|---------|-------------------------------------------------|
| -M    | --major | Bump to next major version (e.g 1.2.3 to 2.0.0) |
| -m    | --minor | Bump to next minor version (e.g 1.2.3 to 1.3.0) |
| -p    | --patch | Bump to next patch version (e.g 1.2.3 to 1.2.4) |

### Package App for Zendesk

Builds the app for production, then packages it for Zendesk. The app package is saved to `dist/tmp`.

```shell script
$ yarn package
```

### Create App in Zendesk

Builds the app for production, then uploads it to your Zendesk instance as a new app.

```shell
$ yarn create
```

### Update App in Zendesk

You first have to upload the app once with `yarn create` or `zcli app:create`.

Builds the app for production, then updates it in your Zendesk instance.

```shell
$ yarn update
```

