import React from 'react';
import {FlatList, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from "react-redux";
import CoinItemComponent from "../components/CoinItemComponent";

class CoinListPage extends React.Component {

  render() {
    const {data} = this.props;
    return <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({item}) => <CoinItemComponent
          onClick={(id) => {
            this.props.navigation.navigate('CoinItem', {coin: id});
          }}
          id={item.id}
          name={item.name}
          symbol={item.symbol}
          percent_change_1h={item.percent_change_1h}
          percent_change_24h={item.percent_change_24h}
          percent_change_7d={item.percent_change_7d}
          last_updated={item.last_updated}
          price_usd={item.price_usd}
        />}
      />
    </View>
  }

}

export default withNavigation(
  connect(
    (state, props) => ({
      data: state.list.data
    })
  )(CoinListPage)
)