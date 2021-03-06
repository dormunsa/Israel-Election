import React, { Component } from 'react'
import { AppRegistry, ScrollView ,Platform, StyleSheet, Text, View , Image ,Button  } from 'react-native';
import NameAndLogo from '../helpers/NameAndLogo'
import DropdownAlert from 'react-native-dropdownalert';
AppRegistry.registerComponent("Image", () => Image);

export default class Party extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            party : props.party,
            isVote : props.isVote,
            hebrewName : "",
            logo : "",
        }
        this.Vote = this.Vote.bind(this)
    }
    componentDidMount = () => {
      console.log(this.state.party)
      let nameAndLogo = NameAndLogo.returnNameAndLogo(this.state.party.id)
      console.log(this.state.nameAndLogo)
      this.setState(previousState => (
        { hebrewName: nameAndLogo.name,
          logo: nameAndLogo.logo }
      ))
     }

     Vote(event){
       event.preventDefault()
       fetch(`https://isr-elections.herokuapp.com/api/parties/vote/${this.state.party.id}`, {
        method: 'POST'
      })
      .then((response) => {
       if(response.ok){
        this.dropdown.alertWithType('success', 'Success', ' ההצבעה נקלטה בהצלחה ');
       } else {
        this.dropdown.alertWithType('error', 'Error', ' הצבעתך לא נקלטה במערכת ');
       }
      })
     .catch((error) => {
        console.error(error);
     });

     }

    render(){
      console.log(this.state.logo)
      var logo = this.state.logo
      return (
        <View style={styles.container}>
         <DropdownAlert ref={ref => this.dropdown = ref} />
          <Text style={styles.welcome}>{`${this.state.hebrewName}`}</Text>
          <Image
          style={styles.logo}
          source={logo}
        />
        <View style={styles.vote}>
        <Button
          onPress={this.Vote}
          title="הצבע כעת"
          color="#841584"
          />
          </View>
        </View>
      );
    }
  }
  AppRegistry.registerComponent('Party', () => Party);
  
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
  