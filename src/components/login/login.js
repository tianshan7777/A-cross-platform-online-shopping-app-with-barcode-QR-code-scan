import React, { Component } from 'react';
import LoginForm from './loginForm';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height}  = Dimensions.get('window');

export default class Login extends Component {

  static navigationOptions = {
    title: 'Welcom to MishiPay',
  }

  render() {
    return (
      <View style={styles.container}>
          <View style = {styles.logoConten}>
            <Image
             style = {styles.logo}
             source={require('../../images/logo.png')} />
          <Text style = {styles.titleApp}>It's time we shop smart</Text>
          </View>
          <LoginForm style ={{flex:0}}/>
              <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.login}
                    onPress={() => this.props.navigation.navigate('Menu')}>
                        <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                            Log In
                        </Text>
              </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  logoConten:{
    flexGrow :1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleApp: {
    width : 200,
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color :'#ffffff'
  },
  logo:{
    width:300,
    height: 90
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer:{
    backgroundColor: "#1980b9",
    paddingVertical:10,
    marginTop:15,
    marginBottom:20
  },
  login:{
    width:width-32,
        height:35,
        borderRadius: 20,
        alignSelf:'center',
        backgroundColor:'skyblue',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'//显示Text组件居中
      }
});
