# Evicertia Calculator

## Introduction

This project was built to solve the Evicertia Calculator Coding Challenge.

## Installing

You need to have installed [node](https://nodejs.org/es/) and [npm](https://www.npmjs.com/). The project has been built with versions 11.6 of node and 6.5 of npm. You can install and manage node versions with [nvm](https://github.com/creationix/nvm).

Once installed, you have to install the project dependencies with:

```sh
npm install
```

## Running tests

Make sure you have filled in the environment variables in the `.env.test` file. Since it doesn't call the real API you can fill in the values that you want.

You can run all tests with the following commands:

```sh
# Run tests once
npm test

# Run in watch mode
npm run test:watch

# Get coverage report
npm run coverage
```

You can visit the [Jest](https://jestjs.io/) documentation to see the more options for the test runner.
