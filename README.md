[![Build Status](https://travis-ci.org/salamaashoush/hotelsearch.svg?branch=master)](https://travis-ci.org/salamaashoush/hotelsearch)
[![Maintainability](https://api.codeclimate.com/v1/badges/e6971bcbb690e13ae233/maintainability)](https://codeclimate.com/github/salamaashoush/hotelsearch/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e6971bcbb690e13ae233/test_coverage)](https://codeclimate.com/github/salamaashoush/hotelsearch/test_coverage)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    api/ --> Api end point for each app env
      development.js
      index.js
      tdev.js --> "test" env file renamed to avoid jest conflicts
    assets/
      logo.svg
    containers/
      App.js --> main app conatiner component
      asyncComponent.js --> helper to load component async
      createRoutes.js --> helper to create the routes with asyncComponent helper
    layout/
      PageLayout.js --> main layout for the app used to provide the app theme
    routes/ --> conatins all app routes/pages
      Search/ --> the home page
        components/
          AvailabilityRange.js --> date range pickers
        containers/
          SearchContainer.js --> the container components for the search page it provide redux state and action to other componets
        modules/ --> i am injecting the redux reducers for each route indivdualy if needed
          actions.js --> actions for search page
          constants.js
          intitialState.js
          reducers.js
          selectors.js --> see [https://github.com/reactjs/reselect](https://github.com/reactjs/reselect)
        index.js --> contains the code for async load component and codespliting also injects the reducer
      SearchResult/ --> same structure as Search
    shared/ --> contains the shared components
    store/ --> redux configurations
      makeRootReducer.js --> helper to make the root reducer for redux and the injectReducer function
      index.js --> redux setup
    styles/ --> global css code styles
    utils/
      httpClient.js --> axois instance configured with for the app
      registerServiceWorker.js --> create-react-app service worker code
    index.js --> the entry point for the app
    setupTests.js --> jest setup code
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the uint test runner in the interactive watch mode.<br>

I wrote simple unit test for dump components

### `npm run e2e`

Launches cypress e2e test runner in gui

please start the server before you run it

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### deployed at [http://hotelsearch.surge.sh/](http://hotelsearch.surge.sh/)
