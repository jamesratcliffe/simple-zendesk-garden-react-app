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

## Scripts

You can use these scripts defined in `package.json`.

These scripts build the app in the `dist/assets` directory. If you want to run `zcli` or `zat` manually, run them from the `dist` directory.

### Build for Development

Parcel will re-build if you update a source file.

```shell script
$ yarn watch
```

### Serve App Locally for Zendesk

This serves the app from the `dist` directory using zcli. Add `?zcli_apps=true` to the end of your Zendesk URL to see the app in Zendesk.

```shell script
$ yarn serve
```

### Build for Production

Output files are minified.

```shell script
$ yarn build
```

## Running the App Locally

To test your app locally, run `yarn watch` and `yarn serve` at the same time in two different terminals. You can set up some IDEs and editors to do this for you with one click. 
