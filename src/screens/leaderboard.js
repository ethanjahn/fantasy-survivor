import * as React from "react";
import { SafeAreaView, View, Text } from "react-native";

const TeamStandingBar = props =>
  <Text style={{fontSize: 35}}>
    <Text>{props.Standing}</Text>
    <Text>{props.TeamName}</Text>
    <Text>{props.Wins}-{props.Ties}-{props.Losses}</Text>
  </Text>;

class TeamStanding extends React.Component {
  state = {
      Standing: 1,
      TeamName: 'Tony\'s Ladder',
      Wins: 2,
      Ties: 1,
      Losses: 1
  }

  render() {
    return <TeamStandingBar 
      Standing={this.state.Standing}
      TeamName={this.state.TeamName}
      Wins={this.state.Wins}
      Ties={this.state.Ties}
      Losses={this.state.Losses} />
    }
  }
  
  export default function LeaderboardScreen() {
    return <SafeAreaView>
      <Text style={{fontWeight: 'bold', color: '#51355A',fontSize: 40, margin: 20, textAlign: 'center'}}>Previously on...</Text>
      <TeamStanding />
      </SafeAreaView>
  }