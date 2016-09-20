# Getting started with React Native

## Running the app

1. Setup your React Native environment. See the Mac Setup Notes (no other OS supported yet)
1. Clone repo
1. `npm install`
1. `tsc`
1. `react-native run-ios`

TODO: actually have it watch on changes. Maybe use `webpack` for this.

## Mac setup notes

* [Cannot run virtualbox machine at same time as Android emulator](https://www.virtualbox.org/ticket/14294)
    * problematic for a docker container running at same time (i.e. local backend for app,
        standardized development environment for said backend...)
* Not in React Native Docs: to run Android, need to create an Android emulator to connect to
    * In Android Studio, go to Android Virtual Device (AVD) Manager
    * Create an emulator with version >= 16 (minimum React Native supported version)
        * This will download and install everything it needs to do so
* Otherwise, the [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)
    page is thorough (as of Sept 10, 2016)
