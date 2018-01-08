import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class CoinItemComponent extends React.PureComponent {

  render() {
    const {id, name, symbol, percent_change_1h, percent_change_24h, percent_change_7d, price_usd, last_updated, onClick} = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={(event) => onClick(id)}>
        <View style={styles.left}>
          <Text style={[styles.text, styles.leftText]}>{name}({symbol})</Text>
          <Text style={[styles.text, styles.leftText]}>${price_usd}</Text>
        </View>
        <View style={styles.right}>
          <Text
            style={[styles.text, styles.rightText, percent_change_1h > 0 ? styles.positive : styles.negative]}>{percent_change_1h}%</Text>
          <Text
            style={[styles.text, styles.rightText, percent_change_24h > 0 ? styles.positive : styles.negative]}>{percent_change_24h}%</Text>
          <Text
            style={[styles.text, styles.rightText, percent_change_7d > 0 ? styles.positive : styles.negative]}>{percent_change_7d}%</Text>
          <Text style={[styles.text, styles.rightText, styles.small]}>Last
            updated: {new Date(last_updated * 1000).toLocaleString()}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    backgroundColor: '#1b2837',
    padding: 10,
    minHeight: 100
  },
  text: {
    color: 'white'
  },
  rightText: {
    textAlign: 'right'
  },
  leftText: {
    textAlign: 'left',
    fontSize: 25
  },
  small: {
    fontSize: 10
  },
  positive: {
    color: 'green'
  },
  negative: {
    color: 'red'
  },
  left: {
    position: 'absolute',
    left: 0
  },
  right: {
    position: 'absolute',
    right: 0
  }
});
