# Simple Zendesk Garden React App

## Global Setup

1. [Install Zendesk App Tools](https://develop.zendesk.com/hc/en-us/articles/360001075048).
1. [Install Node](https://nodejs.org/en/download/).
2. [Install Yarn](https://yarnpkg.com/getting-started/install).
3. Install Parcel:

```shell script
yarn global add parcel-bundler
```

## Package Setup

```shell script
$ git clone git@github.com:jamesratcliffe/simple-zendesk-garden-react-app.git
$ cd simple-zendesk-garden-react-app

# Install dependencies
$ yarn
```

## Building and Serving

You can use these scripts defined in `package.json`.

These scripts build the app in the `dist/assets` directory. If you want to run `zcli` or `zat` manually, run them from the `dist` directory.

### Build for Development

Faster. Compiled files are (relatively) readable.

```shell script
$ yarn build
```

### Build and Watch for Changes

Same as above, but parcel will re-build if you update a source file.

```shell script
$ yarn watch
```

### Serve App for Zendesk

```shell script
$ yarn serve
```

