import React, { useState } from "react";
import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView, TouchableWithoutFeedback } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { intToWords } from "_utils/intToWords.js"

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 5,
    color: "#51355A",
    textAlign: "center"
  },
  playerCard: {
    width: 160, 
    height: 160, 
    margin: 8,
    borderRadius: 6
  },
  playerCardNameText: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 4
  },
  playerCardTribeText: {
    fontSize: 14,
    marginLeft: 4
  },
  tribe1Text: {
    color: "darkblue"
  },
  tribe2Text: {
    color: "darkred"
  },
  tribe1Card: {
    backgroundColor: "lightblue"
  },
  tribe2Card:{
    backgroundColor: "pink"
  },
  playerCardAvatar: {
    marginTop: -20,
    width: 90,
    height: 90,
    alignSelf: "center",
    borderRadius: 45,
    borderWidth: 3,
  },
  tribe1Avatar: {
    borderColor: "darkblue"
  },
  tribe2Avatar: {
    borderColor: "darkred"
  },
  tribe1PressedButton: {
    backgroundColor: "darkblue"
  },
  tribe2PressedButton: {
    backgroundColor: "darkred"
  },
  notPressedButton: {
    backgroundColor: "transparent"
  },
  tribe1NotPressedButtonIcon: {
    color: "darkblue"
  },
  tribe2NotPressedButtonIcon: {
    color: "darkred"
  },
  pressedButtonIcon: {
    color: "white"
  },
  playerCardButton: {
    height: 40,
    width: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const styleMap = {
  text: {
    tribe1: styles.tribe1Text,
    tribe2: styles.tribe2Text
  },
  avatar: {
    tribe1: styles.tribe1Avatar,
    tribe2: styles.tribe2Avatar
  },
  card: {
    tribe1: styles.tribe1Card,
    tribe2: styles.tribe2Card
  },
  button: {
    true: {
      tribe1: styles.tribe1PressedButton,
      tribe2: styles.tribe2PressedButton
    },
    false: {
      tribe1: styles.notPressedButton,
      tribe2: styles.notPressedButton
    }
  },
  buttonIcon: {
    true: {
      tribe1: styles.pressedButtonIcon,
      tribe2: styles.pressedButtonIcon
    },
    false: {
      tribe1: styles.tribe1NotPressedButtonIcon,
      tribe2: styles.tribe2NotPressedButtonIcon
    }
  }
}


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

  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    this.setState(
      {isPressed: !this.state.isPressed}
    )
  }

  render() {
    return (
    <TouchableWithoutFeedback onPress={this._onPress} >
      <View style={[styles.playerCardButton, styleMap['button'][this.state.isPressed][this.props.tribeId]]}>
        <PlayerCardButtonIcon
          buttonType={this.props.buttonType}
          color={styleMap['buttonIcon'][this.state.isPressed][this.props.tribeId]['color']}
          style={styleMap['button'][this.state.isPressed][this.props.tribeId]}/>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

class PlayerCardButtonGroup extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1, alignItems: 'flex-end'}}>
        <PlayerCardButton buttonType='survival' tribeId={ this.props.tribeId } />
        <PlayerCardButton buttonType='exploration' tribeId={ this.props.tribeId }  />
        <PlayerCardButton buttonType='challenge' tribeId={ this.props.tribeId }  />
        <PlayerCardButton buttonType='social' tribeId={ this.props.tribeId }  />
      </View>
    )
  }
}

class PlayerCards extends React.Component { 

  getColumns() {
    var leftColumnArray = [];
    var rightColumnArray = [];

    for (var i = 0; i < this.props.players.length; i++) {
      if (i % 2 == 0)
        leftColumnArray.push(this.props.players[i]);
      else
        rightColumnArray.push(this.props.players[i]);
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

class PlayerCard extends React.Component {

  render() {
    return (
      <View style={[styles.playerCard, styleMap['card'][this.props.tribeId]]}>
        <Text style={[styles.playerCardNameText, styleMap['text'][this.props.tribeId]]}>{ this.props.name }</Text>
        <Text style={[styles.playerCardTribeText, styleMap['text'][this.props.tribeId]]}>{ this.props.tribeName }</Text>
        <Image style={[styles.playerCardAvatar, styleMap['avatar'][this.props.tribeId]]} source={{uri: this.props.imageUrl}} />
        <PlayerCardButtonGroup tribeId={ this.props.tribeId }/>
      </View>
    )}
}

export default class ToDoScreen extends React.Component {
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
    ],
    players: [
      {
        key: "1",
        name: "Tony",
        tribeName: "Dakal",
        tribeId: "tribe1",
        boostedType: "survival",
        isSelected: false,
        imageUrl: "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w425-q80/cast/520510d9980da36f_surv34_cast_tonyvlachos.jpg"
      },
      {
        key: "2",
        name: "Natalie",
        tribeName: "Sele",
        tribeId: "tribe2",
        boostedType: "survival",
        isSelected: false,
        imageUrl: "https://i0.wp.com/myiclicktv.com/wp-content/uploads/2020/02/EOVw7HrWAAAfWs1-409x600sss.jpg?fit=591%2C400&ssl=1"
      },
      {
        key: "3",
        name: "Yul",
        tribeName: "Dakal",
        tribeId: "tribe1",
        boostedType: "survival",
        isSelected: false,
        imageUrl: "https://vignette.wikia.nocookie.net/survivor/images/d/dc/S40_Yul_Kwon.jpg/revision/latest/scale-to-width-down/670?cb=20200115164424"
      }
    ]
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.headerText}>Survivors, are you ready?</Text>
          <CurrentWeek
            weekNumber={intToWords(this.state.weekNumber)}
            weekOpponent={this.props.weekOpponent}
          />
          <PlayoffString 
            winsNeeded={intToWords(this.state.winsNeeded)}
            weeksLeft={intToWords(this.state.weeksLeft)} 
          />
          <SelectedPlayers
            numPlayersToSelect={intToWords(this.state.numPlayersToSelect)}
            isPlural={this.props.isPlural}
          />
          <BoostedPlayers
            boostedPlayers={this.state.boostedPlayers}
          />
          <PlayerCards players={this.state.players}/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
