import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Dimensions,
    DeviceEventEmitter
} from 'react-native';

import ItemComponent from './itemComponent';

const data = require('./shoping.json');

export default class ShoppingCart extends Component {
    static navigationOptions = {
        headerTitle : 'Shopping Cart',
    };

    constructor(props) {
        super(props);
        this.state = {
            allSelecte : data.isAllSelect,
            totalMoney : data.totalMoney,
        }

    };

    getMoney = (m) => {
        this.state.totalMoney=this.state.totalMoney+m;
        //this.state.totalMoney += m;
        data.totalMoney = this.state.totalMoney;
        this.setState({
            totalMoney : this.state.totalMoney
        });

        let i = 0;
        data.datas.map((item) => {
            if (item.isSelect != true) {
                i += 1;
            }
        });
        if (i == 0) {
            data.isAllSelect = true;
            this.setState({ allSelecte : true })
        }
        else {
            data.isAllSelect = false;
            this.setState({ allSelecte : false })
        }
    };

    renderItem = (item) => {
        return (
            <ItemComponent
                itemData={item}
                money={this.getMoney}
            />
        )
    };

    allSelect = () => {
        data.totalMoney = 0;
        data.isAllSelect = !data.isAllSelect;
        this.state.totalMoney = 0;
        DeviceEventEmitter.emit('allSelect', !this.state.allSelecte);
        this.setState({ allSelecte : !this.state.allSelecte })
    };

    separatorView = () => {
        return (
            <View style={{ height : 10, backgroundColor : '#e9e9e9' }}/>
        )
    };

    keyExtractor = (item) => item.name;

    render() {
        let { allSelecte, totalMoney } = this.state;
        return (
            <View style={styles.container}>
                <FlatList data={data.datas}
                          ItemSeparatorComponent={this.separatorView}
                          renderItem={({ item }) => this.renderItem(item)}
                          keyExtractor={ this.keyExtractor }
                />
                <View style={styles.tool}>
                    <View style={{ flex : 1, flexDirection : 'row', alignItems : 'center' }}>
                        <TouchableOpacity style={styles.select} onPress={ this.allSelect }>
                            <Text style={{ marginLeft : 3 }}>Select All</Text>
                        </TouchableOpacity>
                        <Text style={styles.allMoneyText}>
                            ￥{this.state.totalMoney}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.balance}>
                        <Text style={styles.balanceText}>Check Out</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    tool : {
        height : 44,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        borderTopWidth : 1,
        borderTopColor : '#D3D3D3'
    },
    select : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 15,
    },
    balance : {
        width : 100,
        height : 44,
        backgroundColor : 'red',
        alignItems : 'center',
        justifyContent : 'center'
    },
    allMoneyText : {
        fontSize : 20,
        marginLeft : 15
    },
    balanceText : {
        fontSize : 20,
        color : 'white'
    },

});
