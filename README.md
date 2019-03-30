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

The required credentials should be put into '~/.gradle/gradle.properties',
so they are also available for Gradle (only used with Android build).

```
artifactory_username=your_username
artifactory_password=your_password
```

Note that this only for convenience. If you skip this step, then the
pre-install script will prompt you to input the information. However, you will still need to set up 'gradle.properties' if you plan develping for Android.

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
6. shake handset, select "Debug app". Sometimes the connection to rn
   debugger does not form, and you need to re-start the app from Android
   studio. 
7. You can now make sandboxed, MistApi and WishApp requests:
    * `WishApp.request('identity.list', [])`
    * `MistApi.request('wish.identity.list', [])`
    * `MistApi.request('listPeers', [])`
    * `mist.request('wish.identity.list', [null])`
    * the array 'peers' has the current *sandbox* peer list.

   Try them out in the ReactNative Debugger console! For example, if
   MistApi listPeers returns a peer that is online, you can save the
   array object as a global by right-clicking the object in the console,
   the object will be named *temp1* etc.

   Then you can:

```js
   MistApi.request('mist.control.read', [temp1, 'mist.name'])
   // example return value could be:
   mist-api2.js:125 4 "mist.control.read" "cb:" null "MistCli"
```

    What the different objects are:
    * 'WishApi' is the interface for making requests directly to the core
    * 'MistApi' is the interface to mist-api; 
    * 'mist' on the other hand is the sandboxed MistApi interface,
started by the "real" MistApi. An app using only the sandboxed interface
can only see a subset of the peers, each peer being explicitly added to the
sandbox, e.g. as a result of a successful commissioning. 
    

## Working with react-native-mist-library sources

For development of the library, it is useful to have it linked to the
project, instead of installing it via npm:

In the react-native-mist-library source directory:

`yarn link`

Then in the boilerplate project:

`yarn link react-native-mist-library`

