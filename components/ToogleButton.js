import React, { Component } from 'react'
import { AppRegistry, ScrollView,Platform, StyleSheet, Text, View, Button } from 'react-native';
import {  Header } from 'react-native-elements';

export default class ToggleButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           renderTopFive : this.props.topFive
        }
      
    }
    componentDidMount = () =>{
        console.log("isnide Component did mount Button")
        this.setState({ renderTopFive : this.props.topFive})
    }

    renderTopFive(){
        return (
            <View>
            <Button
                title="Vote List"
                color="#841584"
                type="clear"
                onPress = {this.props.handlePress}
            />
            </View>
           
        )
    }
    renderVoteList(){
        return (
            <View>
            <Button
                onPress = {this.props.handlePress}
                title="Top 5"
                type="clear"
                color="#841584"
            />
            </View>
           
        )

    }

    render() {
        if(this.state.renderTopFive){
            return this.renderTopFive()
        } else {
            return this.renderVoteList()
        }
    }
}