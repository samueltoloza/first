/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomButton from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    const {count: ct} = this.state;
    this.setState({count: ct + 1});
  }

  handleDown() {
    const {count: ct} = this.state;
    this.setState({count: ct - 1});
  }

  render() {
    const {count} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <CustomButton label="-" action={this.handleDown}/>
          <View style={styles.countercontainer}>
            <Text style={styles.counter}>{count}</Text>
          </View>
          <CustomButton label="+" action={this.handleUp}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    justifyContent: 'center',
  },
  subcontainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bdc3c7',
  },
  btnText: {
    fontSize: 18,
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
  countercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
