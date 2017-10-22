import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
} from 'react-native';

import QRCode from 'react-native-qrcode';

export default class Generator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '123456'
		};
	}

	render() {
		return(
			<View styel={styles.container}>
			  <TextInput 
			    style={styles.input}
			    onChangeText={(text) => this.setState({text: text})}
			    value={this.state.text}
			    />
			    <View style={styles.container}>
			      <QRCode
			         value={this.state.text}
			         size={200}
			         bgColor='skyblue'
			         fgColor='white'
			     />
			     </View>
			</View>);
	}
}

const styles = StyleSheet.create({
		container:{
			flex: 1,
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent: 'center',
		},
		input:{
			height:40,
			borderColor:'grey',
			borderWidth: 1,
			margin: 10,
			borderRadius: 5,
			padding: 5,
		}
	})