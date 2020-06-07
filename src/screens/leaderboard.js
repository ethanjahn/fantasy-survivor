import * as React from "react";
import { SafeAreaView, Image, View, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';

class Expand extends React.Component {
  render() {
      return <Entypo name="chevron-small-down" size={24} color="black" />
  }
}

class Collapse extends React.Component {
  render() {
    return <Entypo name="chevron-small-up" size={24} color="black" />
  }
}

const TeamStandingBar = props =>
  <View style={{flexDirection: 'row'}}>
    <View style={{flex: 8, flexDirection: 'row', justifyContents: 'space-around'}}>
        <Text style={{flex: 3, fontSize: 35, textAlign: 'center', textAlignVertical: 'center'}}>{props.Standing}</Text>
        <Text style={{flex: 7, fontSize: 20, textAlignVertical: 'center'}}>{props.TeamName}</Text>
        <Text style={{flex: 5, fontSize: 18, textAlign: 'center', textAlignVertical: 'center'}}>{props.Wins}-{props.Ties}-{props.Losses}</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'row'}}>
        <Expand />
        </View>
  </View>


const PlayerAvatar = props =>
  <View style={{flexDirection: 'row'}}>
    <Image 
      style={{width: 45, height: 45, borderColor: props.borderColor, borderWidth: 4, borderRadius: 30}}
      source={{uri: props.imageUrl}}
    />
    <Text style={{fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase', margin: 10}}>{props.name}</Text>
  </View>


class TeamMembers extends React.Component {
  state = {
    players: [
      {
        key: "1",
        name: "Sophie",
        borderColor: "darkred",
        imageUrl: "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w425-q80/cast/svr_cast_sophie_clarke_800x1000.jpg"
      },
      {
        key: "2",
        name: "Michele",
        borderColor: "darkred",
        imageUrl: "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w425-q80/cast/svr_cast_michele_fitzgerald_800x1000.jpg"
      },
      {
        key: "3",
        name: "Denise",
        borderColor: "darkred",
        imageUrl: "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w425-q80/cast/svr_cast_denise_stapley_800x1000.jpg"
      },
      {
        key: "4",
        name: "Wendell",
        borderColor: "darkblue",
        imageUrl: "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w425-q80/cast/svr_cast_wendell_holland_800x1000.jpg"
      },
      {
        key: "5",
        name: "Jeremy",
        borderColor: "darkblue",
        imageUrl: "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w425-q80/cast/svr_cast_jeremy_collins_800x1000.jpg"
      },
      {
        key: "6",
        name: "Yul",
        borderColor: "darkred",
        imageUrl: "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w425-q80/cast/svr_cast_yul_kwon_800x1000.jpg"
      }]
  }

  render() {
    return <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
    <View style={{flexDirection: 'column'}}>
      <PlayerAvatar 
        name={this.state.players[0].name}
        borderColor={this.state.players[0].borderColor}
        imageUrl={this.state.players[0].imageUrl}
      />
    </View>
    <View style={{flexDirection: 'column'}}>
    <PlayerAvatar 
        name={this.state.players[3].name}
        borderColor={this.state.players[3].borderColor}
        imageUrl={this.state.players[3].imageUrl}
      />
    </View>
  </View>
  }
}

class TeamStanding extends React.Component {
  state = {
      Standing: 1,
      TeamName: 'Tony\'s Ladder',
      Wins: 2,
      Ties: 1,
      Losses: 1
  }

  render() {
    return  <View>
      <TeamStandingBar 
        Standing={this.state.Standing}
        TeamName={this.state.TeamName}
        Wins={this.state.Wins}
        Ties={this.state.Ties}
        Losses={this.state.Losses} 
      />
      </View>
    }
  }
  
  export default function LeaderboardScreen() {
    return <SafeAreaView>
      <Text style={{fontWeight: 'bold', color: '#51355A',fontSize: 30, margin: 20, textAlign: 'center'}}>Previously on...</Text>
      <TeamStanding />
      <TeamMembers />
      </SafeAreaView>
  }