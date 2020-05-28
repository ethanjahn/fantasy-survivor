import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { HelloWorld } from "_atoms";


// Create 4 container components: currentWeek, playoffString, selectedPlayers, boostedPlayers
const CurrentWeek = props =>
  <Text style={{margin: 5, fontSize: 20}}>
    <Text>It is </Text>
    <Text style={{fontWeight: "bold"}}>week {props.weekNumber} </Text>
    <Text>and you are facing </Text>
    <Text style={{fontWeight: "bold"}}>{props.weekOpponent} </Text>
  </Text>;

const PlayoffString = props =>
  <Text style={{margin: 5, fontSize: 16, color: "gray"}}>
    <Text>You need to win </Text>
    <Text style={{fontWeight: "bold"}}>{ props.winsNeeded } of the next { props.weeksLeft } weeks </Text>
    <Text>to make the playoffs</Text>
  </Text>;

const SelectedPlayers = props =>
  <Text style={{margin: 5, fontSize: 20}}>
    <Text>You need to select </Text>
    <Text style={{fontWeight: "bold"}}>{props.numPlayersToSelect} </Text>
    <Text>more player{props.isPlural ? "s" : ""}</Text>
  </Text>;

function BoostedPlayers(props) {
  if (props.boostedPlayers.length == 0) {
    return null
  }

  let output_string = "";

  if (props.boostedPlayers.length == 1) {
    output_string = props.boostedPlayers[0].name + ' for ' + props.boostedPlayers[0].boostType
  } else {
    props.boostedPlayers.forEach(function (item, index) {
      output_string += item.name + ' for ' + item.boostType
      
      if (index === props.boostedPlayers.length - 2) {
        output_string += ' and '
      } else if (index < props.boostedPlayers.length - 2) {
        output_string += ', '
      }

    });
  }

  return <Text style={{margin: 5, fontSize: 20}}>
    <Text>You are boosting </Text>
    <Text style={{fontWeight: "bold"}}>{output_string}</Text>
  </Text>;
  }

class ToDoTextContainer extends React.Component {
  state = { 
    winsNeeded: 3,
    weeksLeft: 5,
    weekNumber: 5,
    weekOpponent: "Tony's Ladder",
    numPlayersToSelect: 1,
    isPlural: false,
    boostedPlayers: [
      {name: "Natalie", boostType: "Survival"},
      {name: "Tony", boostType: "Social"}
    ]
  }

  toWords(int, capitalize) {
    let map = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten"
    }

    if (capitalize) {
      let str = map[int]
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return map[int]
  }

  render() {
    return <>
      <CurrentWeek
        weekNumber={this.toWords(this.state.weekNumber)}
        weekOpponent={this.state.weekOpponent}
      />
      <PlayoffString 
        winsNeeded={this.toWords(this.state.winsNeeded)}
        weeksLeft={this.toWords(this.state.weeksLeft)} 
      />
      <SelectedPlayers
        numPlayersToSelect={this.toWords(this.state.numPlayersToSelect)}
        isPlural={this.state.isPlural}
      />
      <BoostedPlayers
        boostedPlayers={this.state.boostedPlayers}
      />
    </>;
  }
}

const PlayerCard = props =>
  <View style={{backgroundColor: "red", width: 160, height: 160, margin: 15,}}></View>

export default function ToDoScreen() {
  return (
    <SafeAreaView>
        <Text style={{fontWeight: "bold", fontSize: 40, margin: 5, color: "#51355A", textAlign: "center"}}>Survivors, are you ready?</Text>
        <ToDoTextContainer />
        <View style={{marginLeft: 15, flex: 1, alignSelf: 'center', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', flexWrap: 'wrap'}}>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </View>
    </SafeAreaView>
  );
}
