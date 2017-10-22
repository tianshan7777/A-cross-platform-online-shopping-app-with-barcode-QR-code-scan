import React, { Component } from 'react';
import {Text, Button, Image, View, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';

const {width, height}  = Dimensions.get('window');

export default class MainMenu extends Component {

    static navigationOptions = function(props) {
        return {
            title: 'main',
            headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "menu" />
        }
    };

	render(){
		return (
			<View style={styles.container}>
		            <TouchableOpacity
                    activeOpacity={0.5}//点击时的透明度
                    style={styles.login}
                    onPress={() => this.props.navigation.navigate('Scanner')}>
                        <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                            Barcodes or QR Codes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.login}
                    onPress={() => this.props.navigation.navigate('Scanner')}>
                        <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                            Other Kinds of Codes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.login}
                    onPress={() => this.props.navigation.navigate('Gen')}>
                        <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                            Make Your Own Codes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.login}
                    onPress={() => this.props.navigation.navigate('Cart')}>
                        <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                            Shopping Cart
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.login}
                    onPress={() => this.props.navigation.navigate('About')}>
                        <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                            About MishiPay
                        </Text>
                    </TouchableOpacity>
		        </View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    login :{
        width:width-32,
        height:35,
        borderRadius: 20,//按钮圆角
        alignSelf:'center',
        backgroundColor:'skyblue',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'//显示Text组件居中
    },
});
