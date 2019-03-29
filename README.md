# Mist react-native "boilerplate" application

This application is a simple app that can be used as a starting point for react-native development using the react-native-mist-library.

## License 

Source to this example application is released under Apache 2.0 license
by ControlThings Oy Ab. In order to use the application, you will need
to get a license for react-native-mist-library from ControlThings Oy Ab.
https://controlthings.fi/

## Setting up

1. node.js version 8 must be used, because of the react-native version
   0.56.0.
	* Install with Node version manager: `nvm install 8.11.4`
	* Note that this could change, if you don't specifify explicit version in `package.json`, as the react-native project continues to release versions which might depend on newer versions of node.js.
  
2. `yarn install`

A pre-install script will be run, which downloads the
react-native-mist-library from ControlThings' Artifactory server. You
will need to contact ControlThings Oy Ab to get the required
credentials.

3. Open the project in Android studio or Xcode, depending on platform,
   see below

NOTE: The project's `package.json` currently specifies react-native `^0.56.0`, which means that yarn can upgrade to a newer version. For production apps, consider specifying explicitly the react-native version to prevent any issues araising from unexpected react-native upgrades by yarn, which might happen behind the scenes for instance when a new developer starts with the code base.


## Android

1. Start android studio, open the project in subdir android/
2. adb reverse tcp:8081 tcp:8081
3. `yarn start` to start bundle server
4. Press play in Android studio to put apk on handset

## iOS

1. Open the project in Xcode
2. Build and start application from Xcode
3. Xcode should start bundle server automatically
4. Start the RN Debugger app, shake handset, select "Debug app"

## Common to both iOS and Android

5. Start react-native debugger on your desktop
6. shake handset, select "Debug app"
7. You can now make sandboxed, MistApi and WishApp requests:
    * `WishApp.request('identity.list', [])`
    * `MistApi.request('wish.identity.list', [])`
    * `mist.request('wish.identity.list', [null])`



## Working with react-native-mist-library sources

For development of the library, it is useful to have it linked to the
project, instead of installing it via npm:

In the react-native-mist-library source directory:

`yarn link`

Then in the boilerplate project:

`yarn link react-native-mist-library`

