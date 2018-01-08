import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import {withNavigation} from 'react-navigation';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {requestCoin} from "../../store/actions";

class CoinItemPage extends React.Component {

  componentWillMount() {
    this.props.requestCoin(this.props.navigation.state.params.coin);
  }

  render() {
    const {data} = this.props;
    if(!data) {
      return <View style={style.container}>
        <ProgressBar indeterminate={true}/>
      </View>
    } else {
      console.log(data);
      return <ScrollView>
        <Text>{data.name} | {data.symbol}</Text>
        <View style={style.item}>
          <Text>Rank</Text>
          <Text>{data.rank}</Text>
        </View>
        <View style={style.item}>
          <Text>Price USD</Text>
          <Text>{data.price_usd}</Text>
        </View>
        <View style={style.item}>
          <Text>Price BTC</Text>
          <Text>{data.price_btc}</Text>
        </View>
        <View style={style.item}>
          <Text>24h volume usd</Text>
          <Text>{data['24h_volume_usd']}</Text>
        </View>
        <View style={style.item}>
          <Text>Market Cap Usd</Text>
          <Text>{data.market_cap_usd}</Text>
        </View>
        <View style={style.item}>
          <Text>Available Supply</Text>
          <Text>{data.available_supply}</Text>
        </View>
        <View style={style.item}>
          <Text>Total Supply</Text>
          <Text>{data.total_supply}</Text>
        </View>
        <View style={style.item}>
          <Text>Max Supply</Text>
          <Text>{data.max_supply}</Text>
        </View>
        <View style={style.item}>
          <Text>Percent Change 1h</Text>
          <Text>{data.percent_change_1h}</Text>
        </View>
        <View style={style.item}>
          <Text>Percent Change 24h</Text>
          <Text>{data.percent_change_24h}</Text>
        </View>
        <View style={style.item}>
          <Text>Percent Change 7d</Text>
          <Text>{data.percent_change_7d}</Text>
        </View>
        <View style={style.item}>
          <Text>Last Updated</Text>
          <Text>{new Date(data.last_updated*1000).toLocaleDateString()}</Text>
        </View>
      </ScrollView>
    }
  }

}

export default withNavigation(
  connect(
    (state, props) => ({
      isLoading: state.item.isLoading,
      data: state.item.data
    }), (dispatch) => bindActionCreators({
      requestCoin
    }, dispatch)
  )(CoinItemPage)
);

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  }
});