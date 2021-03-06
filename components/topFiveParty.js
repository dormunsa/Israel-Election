import React, { Component } from 'react'
import { AppRegistry, ScrollView ,Platform, StyleSheet, Text, View , Image ,Button  } from 'react-native';
import NameAndLogo from '../helpers/NameAndLogo'
import DropdownAlert from 'react-native-dropdownalert';

export default class TopFiveParty extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            party : props.party,
            hebrewName : "",
            logo : "",
        }
    }
    componentDidMount = () => {
      console.log(this.state.party)
      let nameAndLogo = NameAndLogo.returnNameAndLogo(this.state.party.name)
      this.setState(previousState => (
        { hebrewName: nameAndLogo.name,
          logo: nameAndLogo.logo }
      ))
     }
   
    render(){
      return (
        <View style={styles.container}>
         <DropdownAlert ref={ref => this.dropdown = ref} />
          <Text style={styles.welcome}>{`${this.state.hebrewName}`}</Text>
          <Image
          style={styles.logo}
          source= {{uri: this.state.logo}}
        />
        <View style={styles.vote}>
        <Text style={styles.welcome}>{`${this.state.party.percentage}%`}</Text>
          </View>
        </View>
      );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    logo : {
      width: 259,
      height: 169,
      borderRadius: 10
    },
    vote : {
      marginTop : 20 ,
      marginBottom : 20 ,
      width : 100
    }
  });
  