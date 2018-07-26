/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import mist from "react-native-mist-library";
import { WishApp } from "react-native-mist-library";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

type State = {
  list: Array<{ alias: string, uid: Buffer }>
}

export default class App extends Component<Props, State> {
  state = {
    list: []
  }

  componentWillMount() {
    WishApp.request('signals', [null], (err, data) => {
      if (data[0] === 'identity') {
        mist.request('wish.identity.list', [null], (err, data) => {
          this.setState({ list:  data });
        });
      }
    });

    mist.request('wish.identity.create', [null, 'Alvin'], (err, data) => {
      // bail if identity already exists
      if (err && data.code === 304) { return; }

      console.log("wish.identity.create:", err, data);
    });

    mist.request('wish.identity.list', [null], (err, data) => {
      this.setState({ list:  data });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>

        {this.state.list.map((value, index, list) => {
          return <Text key={index}>{value.alias}</Text>;
        })}

        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
