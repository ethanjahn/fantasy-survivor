import React, { useState } from "react";
import { Text, Image, View, SafeAreaView, ScrollView, TouchableWithoutFeedback } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';


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

class PlayerCardButtonIcon extends React.Component {
  render() {
    switch(this.props.buttonType) {
      case 'survival':
        return (<MaterialCommunityIcons name="campfire" size={35} color={this.props.color} />);
      case 'exploration':
        return (<MaterialCommunityIcons name="compass" size={35} color={this.props.color} />);
      case 'challenge':
        return (<FontAwesome5 name="fist-raised" size={35} color={this.props.color} />);
      case 'social':
        return (<MaterialCommunityIcons name="drama-masks" size={35} color={this.props.color} />);
    }
  }
}

class PlayerCardButton extends React.Component {
  state = {
    isPressed: false
  }

  _onPress() {
    this.setState(
      {isPressed: true}
    )
  }

  _getColor() {
    if (this.state.isPressed) {
      return "red"
    } else {
      return "green"
    }
  }

  render() {
    console.log(this._getColor())
    console.log(this.state.isPressed)
    return (
    <TouchableWithoutFeedback onPress={this._onPress} style={{backgroundColor: "blue"}}>
      <View>
        <PlayerCardButtonIcon buttonType={this.props.buttonType} color={this._getColor()}/>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

class PlayerCardButtonGroup extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
        <PlayerCardButton buttonType='survival' />
        <PlayerCardButton buttonType='exploration' />
        <PlayerCardButton buttonType='challenge' />
        <PlayerCardButton buttonType='social' />
      </View>
    )
  }
}

class PlayerCards extends React.Component { 
  state = {
    players: [
      {
        key: "1",
        name: "Tony",
        tribeName: "Dakal",
        boostedType: "survival",
        isSelected: false,
        color: "lightblue",
        borderColor: "darkblue",
        imageUrl: "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w425-q80/cast/520510d9980da36f_surv34_cast_tonyvlachos.jpg"
      },
      {
        key: "2",
        name: "Natalie",
        tribeName: "Sele",
        boostedType: "survival",
        isSelected: false,
        color: "pink",
        borderColor: "darkred",
        imageUrl: "https://i0.wp.com/myiclicktv.com/wp-content/uploads/2020/02/EOVw7HrWAAAfWs1-409x600sss.jpg?fit=591%2C400&ssl=1"
      },
      {
        key: "3",
        name: "Yul",
        tribeName: "Dakal",
        boostedType: "survival",
        isSelected: false,
        color: "lightblue",
        borderColor: "darkblue",
        imageUrl: "https://vignette.wikia.nocookie.net/survivor/images/d/dc/S40_Yul_Kwon.jpg/revision/latest/scale-to-width-down/670?cb=20200115164424"
      }
    ]
  };

  getColumns() {
    var leftColumnArray = [];
    var rightColumnArray = [];

    for (var i = 0; i < this.state.players.length; i++) {
      if (i % 2 == 0)
        leftColumnArray.push(this.state.players[i]);
      else
        rightColumnArray.push(this.state.players[i]);
    }

    return [leftColumnArray, rightColumnArray]
  }


  columns = this.getColumns()
  leftColumn = this.columns[0].map(cardInfo => (<PlayerCard {...cardInfo}/>));
  rightColumn = this.columns[1].map(cardInfo => (<PlayerCard {...cardInfo}/>));

  render() {
    return <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <View style={{flexDirection: 'column'}}>
        {this.leftColumn}
      </View>
      <View style={{flexDirection: 'column'}}>
        {this.rightColumn}
      </View>
    </View>
  };
}

const PlayerCard = props =>
  <View style={{backgroundColor: props.color, width: 160, height: 160, margin: 16}}>
    <Text style={{fontWeight: "bold", fontSize: 20}}>{ props.name }</Text>
    <Text style={{fontSize: 14}}>{ props.tribeName }</Text>
    <Image style={{marginTop: -20, marginBottom: 5, width: 90, height: 90, alignSelf: "center", borderRadius: 45, borderWidth: 3, borderColor: props.borderColor}} source={{uri: props.imageUrl}} />
    <PlayerCardButtonGroup />
  </View>

export default function ToDoScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{fontWeight: "bold", fontSize: 30, margin: 5, color: "#51355A", textAlign: "center"}}>Survivors, are you ready?</Text>
        <ToDoTextContainer />
        <PlayerCards />
      </ScrollView>
    </SafeAreaView>
  );
}
