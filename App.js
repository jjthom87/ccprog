/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      carterCounter: 0,
      cooperCounter: 0
    };
  }
  incrementCarter(){
    this.setState({
      carterCounter: this.state.carterCounter + 1
    })
  }
  incrementCooper(){
    this.setState({
      cooperCounter: this.state.cooperCounter + 1
    })
  }
  render() {
    console.log(this.state.cooperCounter);
    console.log(this.state.carterCounter);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          What's up Cooper & Carter
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={this.incrementCarter.bind(this)}>
              <Image style={styles.image} source={require('./images/carter.png')}/>
              <Text>{this.state.carterCounter}</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={this.incrementCooper.bind(this)}>
              <Image style={styles.image} source={require('./images/cooper.png')}/>
              <Text>{this.state.cooperCounter}</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  image: {
    height: 50,
    width: 50,
    margin: '10%',
    backgroundColor: 'powderblue'
  }
});
