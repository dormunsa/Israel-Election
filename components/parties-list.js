import React, { Component } from 'react'
import { AppRegistry, ScrollView,Platform, StyleSheet, Text, View } from 'react-native';
import Party from './party.js'
import TopFiveParty from './topFiveParty'
import { Button, Header } from 'react-native-elements';
import ToggleButton from './ToogleButton.js'

export default class ParitiesList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            partiesPollObject : {},
            partiesPollArray : [] ,
            renderTooFive : false,
            totalVotes : 0 , 
            topFive : []
        }
        this.eachParty = this.eachParty.bind(this)
        this.render = this.render.bind(this)
        this.createTopFive = this.createTopFive.bind(this)
        this.renderVoteList = this.renderVoteList.bind(this)
        this.renderTopFiveList = this.renderTopFiveList.bind(this)
        this.getVotePrtiesList = this.getVotePrtiesList.bind(this)
        this.getPollPartiesObject = this.getPollPartiesObject.bind(this)
        this.toggleButton = this.toggleButton.bind(this)
        this.eachPartyTopFive = this.eachPartyTopFive.bind(this)
    }
    componentDidMount = () => {
     this.getVotePrtiesList()
     this.getPollPartiesObject()
    
   }

   getVotePrtiesList(){
    fetch('https://isr-elections.herokuapp.com/api/parties', {
      method: 'GET'
   })
   .then((response) => response.json())
   .then((responseJson) => {
      this.setState({
         data: responseJson.parties
      })
   })
   .catch((error) => {
      console.error(error);
   });
   }

   getPollPartiesObject(){
    fetch('https://isr-elections.herokuapp.com/api/parties/poll-status', {
      method: 'GET'
   })
   .then((response) => response.json())
   .then((response) => {
       this.createTopFive(response)
       this.setState({
           partiesPollObject: response
        })
   })
   .catch((error) => {
      console.error(error);
   });
   this.createTopFive()
  }

   eachParty( party , i ){
     console.log(this.state.renderTooFive)
    return(
    <View>
    <Party key = {i} party = {party}>
    </Party>
    </View>
    )
  }
  eachPartyTopFive( party , i ){
    console.log(this.state.renderTooFive)
   return(
   <View>
   <TopFiveParty key = {i} party = {party}>
   </TopFiveParty>
   </View>
   )
 }

    createTopFive(response) {
      let data = response;
      for (let key in data) {
        this.state.totalVotes += data[key].currentVotes;
      }
  
      for (let key in data) {
        perc = (data[key].currentVotes / this.state.totalVotes) * 100;
        let partyPollStatus = {
          name: key,
          votes: data[key].currentVotes,
          percentage: perc.toFixed(1)
        }
        this.state.partiesPollArray.push(partyPollStatus);
      }
      this.state.partiesPollArray.sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes));
      this.state.topFive = this.state.partiesPollArray.slice(0, 5);
     
    }

    toggleButton(){
      this.setState({
        renderTooFive: ! this.state.renderTooFive
     })
    }

    renderTopFiveList(){
      return (
        <View>
        <Header
        leftComponent={<ToggleButton handlePress = {this.toggleButton} topFive = {this.state.renderTooFive} />}
        centerComponent={{ text: 'MY TITLE', style: { color: '#000' } }}
        />
        <ScrollView>
         {this.state.topFive.map(this.eachPartyTopFive)}
        </ScrollView>
        </View>
       
      );
    }

    renderVoteList(){
      return (
        <View>
        <Header
        leftComponent={<ToggleButton  handlePress = {this.toggleButton} topFive = {this.state.renderTooFive}/>}
        centerComponent={{ text: 'MY TITLE', style: { color: '#000' } }}
        />
        <ScrollView>
         {this.state.data.map(this.eachParty)}
        </ScrollView>
        </View>
      );
    }
    
    render() {
      if(this.state.renderTooFive){
        return this.renderTopFiveList()
      } else {

        return this.renderVoteList()
      }
    
    }
  }
  
  
  