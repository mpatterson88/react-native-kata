import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
          <Text>Hello Fruit!</Text>
          <Image source={pic} style={{width: 193, height: 110}}></Image>
          <Greeting name="Tyler"></Greeting>
          <Greeting name="Matt"></Greeting>
          <Greeting name="Steve"></Greeting>
      </View>
    );
  }
}

class Greeting extends React.Component {
    render() {
        let txt ="Hello " + this.props.name + "!";
        return (
            <Blink text={ txt }></Blink>
        );
    }
}

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
        this.setState(previousState => {
            return {isShowingText: !previousState.isShowingText };
        });
    }, 1000);
  }
    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
