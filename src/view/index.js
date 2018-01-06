import React from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, StyleSheet} from "react-native";

import {actions} from "../api";

class MainScreen extends React.Component {

  render() {
    if(this.props.name) {
      return <View style={styles.view}>
        <Text>{this.props.name}</Text>
      </View>
    } else {
      return <View style={styles.view}>
        <Button onPress={() => {
          console.log("Button pressed");
          actions.greet('Word')
        }}
        title={'Greet'} />
      </View>
    }
  }

}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});

export default connect(
  (state, props) => {
    console.log(state);
    return ({
      name: state.name
    })
  }
)(MainScreen);