import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

import ProgressBar from 'react-native-progress/Bar';
import {actions} from "../../api";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class SplashScreen extends React.Component {

  componentWillMount() {
    this.props.requestCoinsList();
  }

  componentWillReceiveProps(nextProps) {

    if(this.props.isLoading && !nextProps.isLoading) {
      this.props.navigation.navigate('AllCoinsList');
    }
  }

  render() {
    return <View style={style.container}>
      <Text>Coin Manager</Text>
      <ProgressBar indeterminate={true}/>
    </View>
  }

}

export default withNavigation(connect(
  (state, props) => ({
    isLoading: state.list.isLoading
  }),
  (dispatch) => bindActionCreators({
    ...actions
  }, dispatch)
)(SplashScreen));

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%'
  }
});