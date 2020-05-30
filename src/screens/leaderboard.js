import * as React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { HelloWorld } from '_atoms';

const TeamStandingBar = props =>
  <View style={{flexDirection: 'row'}}>
    <View style={{flex: 8, flexDirection: 'row', justifyContents: 'space-around'}}>
        <Text style={{flex: 3, fontSize: 35, textAlign: 'center', textAlignVertical: 'center'}}>{props.Standing}</Text>
        <Text style={{flex: 7, fontSize: 20, textAlignVertical: 'center'}}>{props.TeamName}</Text>
        <Text style={{flex: 5, fontSize: 18, textAlign: 'center', textAlignVertical: 'center'}}>{props.Wins}-{props.Ties}-{props.Losses}</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'row'}}>
        <HelloWorld />
        </View>
  </View>

class TeamStanding extends React.Component {
  state = {
      Standing: 1,
      TeamName: 'Tony\'s Ladder',
      Wins: 2,
      Ties: 1,
      Losses: 1,
      name: 'Mehek'
  }

  render() {
    return  <View>
      <TeamStandingBar 
      Standing={this.state.Standing}
      TeamName={this.state.TeamName}
      Wins={this.state.Wins}
      Ties={this.state.Ties}
      Losses={this.state.Losses}
      name={this.state.name} />
      </View>
    }
  }
  
  export default function LeaderboardScreen() {
    return <SafeAreaView>
      <Text style={{fontWeight: 'bold', color: '#51355A',fontSize: 30, margin: 20, textAlign: 'center'}}>Previously on...</Text>
      <TeamStanding />
      </SafeAreaView>
  }