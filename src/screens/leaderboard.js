import * as React from "react";
import { SafeAreaView, View, Text } from "react-native";
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
      Losses={this.state.Losses} />
      </View>
    }
  }
  
  export default function LeaderboardScreen() {
    return <SafeAreaView>
      <Text style={{fontWeight: 'bold', color: '#51355A',fontSize: 30, margin: 20, textAlign: 'center'}}>Previously on...</Text>
      <TeamStanding />
      </SafeAreaView>
  }