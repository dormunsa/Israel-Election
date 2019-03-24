import React, { Component } from 'react'
import { AppRegistry, ScrollView,Platform, StyleSheet, Text, View } from 'react-native';
import Party from './party.js'
export default class ParitiesList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
        this.eachParty = this.eachParty.bind(this)
        this.render = this.render.bind(this)
    }

    componentDidMount = () => {
        fetch('https://isr-elections.herokuapp.com/api/parties', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              data: responseJson.parties
           })
        })
        .catch((error) => {
           console.error(error);
        });
     }
    eachParty( party , i ){
      console.log(party);
      return(

      <Party key = {i} party = {party} isVote = {false}>
      
      </Party>

      )
    }
    render() {
      var self = this
      return (
        <ScrollView>
         {this.state.data.map(this.eachParty)}
        </ScrollView>
       
      );
    }
  }
  
  
  