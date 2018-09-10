# Mist react-native "boilerplate" application

This application is a simple app that will be used as a starting point for react-native development using the react-native-mist-library.

NOTE: The project's `package.json` currently specifies react-native `^0.56.0`, which means that yarn can upgrade to a newer version. For production apps, consider specifying explicitly the react-native version to prevent any issues araising from unexpected react-native upgrades by yarn, which might happen behind the scenes for instance when a new developer starts with the code base.

## Setting up

1. node.js version 8 must be used, because of the react-native version
   0.56.0.
	* Install with Node version manager: `nvm install 8.11.4`
	* Note that this could change, if you don't specifify explicit version in `package.json`, as the react-native project continues to release versions which might depend on newer versions of node.js.
  
2. `yarn install`
3. `yarn link react-native-mist-library` NOTE: this assuming you already
   have cloned MistLibrary and done `yarn link` there
4. Open the project in Android studio or Xcode, depending on platform,
   see below

### Android

1. Start android studio, open the project in subdir android/
2. adb reverse tcp:8081 tcp:8081
3. yarn start
4. Press play in Android studio to put apk on handset
5. Start react-native debugger on your desktop
6. shake handset, select "Debug app"
7. You can now make sandboxed, MistApi and WishApp requests:
    * `WishApp.request('identity.list', [])`
    * `MistApi.request('wish.identity.list', [])`
    * `mist.request('wish.identity.list', [null])`

### iOS

ToDo
