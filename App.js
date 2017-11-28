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

export default class App extends Component<{}> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: undefined,
      lcSelected: undefined,
      animal: undefined,
      startOver: undefined
    };
  }
  selectCarter(){
    this.setState({
      selected: 'Carter',
      lcSelected: 'carter',
      startOver: undefined
    })
  }
  selectCooper(){
    this.setState({
      selected: 'Cooper',
      lcSelected: 'cooper',
      startOver: undefined
    })
  }
  selectDinosaur(){
    this.setState({
      animal: 'dinosaur'
    })
  }
  selectBird(){
    this.setState({
      animal: 'eagle'
    })
  }
  startOver(){
    this.setState({
      selected: undefined,
      lcSelected: undefined,
      animal: undefined,
      startOver: 'y'
    })
  }
  render() {
    const renderBeginning = () => {
      return (
        <View>
          <Text style={styles.welcome}>
            What's up Cooper & Carter, who is playing?
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={this.selectCarter.bind(this)}>
                <Image style={styles.image} source={require('./images/carter.png')}/>
                <Text>{this.state.carterCounter}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={this.selectCooper.bind(this)}>
                <Image style={styles.image} source={require('./images/cooper.png')}/>
                <Text>{this.state.cooperCounter}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )   
    }
    const prePick = () => {
      if(!this.state.selected && !this.state.animal){
        return (
          <View>
            <Text style={styles.welcome}>
              What's up Cooper & Carter, who is playing?
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={this.selectCarter.bind(this)}>
                  <Image style={styles.image} source={require('./images/carter.png')}/>
                  <Text>{this.state.carterCounter}</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={this.selectCooper.bind(this)}>
                  <Image style={styles.image} source={require('./images/cooper.png')}/>
                  <Text>{this.state.cooperCounter}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )   
      } else if (this.state.selected && !this.state.animal){
        return (
          <View>
            <Text style={styles.welcome}>Hey {this.state.selected}, what animal do you want to be?</Text>
              <TouchableOpacity onPress={this.selectDinosaur.bind(this)}>
                <Text style={styles.welcome}>T-Rex</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.selectBird.bind(this)}>
                <Text style={styles.welcome}>Eagle</Text>
              </TouchableOpacity>
          </View>
        )
      } else {
        if(this.state.selected === "Carter" && this.state.animal === 'eagle'){
          return (
            <View>
              <Image style={styles.carterEagle} source={require('./images/carter_eagle.jpg')}/>
              <TouchableOpacity onPress={this.startOver.bind(this)}>
                <Text style={styles.welcome}>Start Over</Text>
              </TouchableOpacity>
            </View>
          )
        } else if (this.state.selected === "Carter" && this.state.animal === 'dinosaur'){
          return (
            <View>
              <Image style={styles.carterDinosaur} source={require('./images/carter_dinosaur.jpg')}/>
              <TouchableOpacity onPress={this.startOver.bind(this)}>
                <Text style={styles.welcome}>Start Over</Text>
              </TouchableOpacity>
            </View> 
          )
        } else if (this.state.selected === "Cooper" && this.state.animal === 'dinosaur'){
          return (
            <View>
              <Image style={styles.animalImage} source={require('./images/cooper_dinosaur.jpg')}/>
              <TouchableOpacity onPress={this.startOver.bind(this)}>
                <Text style={styles.welcome}>Start Over</Text>
              </TouchableOpacity>
            </View> 
          )
        } else if (this.state.selected === "Cooper" && this.state.animal === 'eagle'){
          return (
            <View>
              <Image style={styles.animalImage} source={require('./images/cooper_eagle.jpg')}/>
              <TouchableOpacity onPress={this.startOver.bind(this)}>
                <Text style={styles.welcome}>Start Over</Text>
              </TouchableOpacity>
            </View> 
          )
        }
      }
    }
    return (
      <View style={styles.container}>
        {prePick()}
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
  },
  animalImage: {
    height: 200,
    width: 300
  },
  carterEagle: {
    height: 250,
    width: 250
  },
  carterDinosaur: {
    height: 150,
    width: 300
  }
});
