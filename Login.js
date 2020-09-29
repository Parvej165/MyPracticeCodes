import React from 'react';
import { StyleSheet, Text, View ,TextInput , TouchableOpacity, ImageBackground } from 'react-native';


export default class App extends React.Component {
  constructor(
    {
        state={
        email:"",
        password:""
      }
    }
  )
  render(){
    return (
      <View style={styles.container}>

      <Text style={styles.logo}>LoginPage</Text>
       <View style={styles.inputView} >
       <TextInput  
            style={styles.inputText}
            placeholder="Email Id" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
       </View> 

       <View style={styles.inputView} >
       <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
       </View>

       <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>SignUp</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"white",
    marginBottom:60
  },

  inputText:{
    height:50,
    color:"black"
  },

  forgot:{
    color:"white",
    fontSize:15
  },

  inputView:{
    width:"80%",
    backgroundColor:"#FFFFFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#808080",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:10
  },
});