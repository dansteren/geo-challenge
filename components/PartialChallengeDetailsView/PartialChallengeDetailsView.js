import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"slateblue",
//     alignItems:"center",
//     justifyContent:"center"
//   },
//
// });

export default class PartialChallengeDetailsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      challengeData: {
      },
      createdBy: '',
      completedBy: ''
    }
  }

  componentDidMount() {
    this.getChallengeData().done()
  }

  /*
   * Get's challenges asynchronously and updates the view when it gets the data
   * will only retrieve one challenge based on an id passed in from parent scene
   *
   * currently only retrieves mock data
   */
  async getChallengeData() {
    try {
      // let response = await fetch('https://ec2-52-43-242-238.us-west-2.compute.amazonaws.com:3000/api/v1/challenges')
      // let responseJson = await response.json()
      // this.setState({
      //   challengeData: responseJson,
      //   createdBy: 'Created by '+responseJson.owner.displayName+' on '+responseJson.created,
      //   completedBy: responseJson.completedBy.user
      // })
      console.log('in getChallengeData, challengeId = '+this.props.challengeId);
      let jsonStr = '{"challenges": [{"id": "686x565asdf87657657xwe868q7we89","title": "Arrowhead Trail","description": "Great view. Waterfall at the top with some pools.","locations": [{"longitude": -122.4324,"latitude": 37.78825,"title": "Welcome!","content": {"text": "It\'s time to begin your journey","image": "image/url/something/whatevs","video": "video/url/something/whatevs"},"lockType": "auto"},{"longitude": -122.4354,"latitude": 37.78425,"title": "You Finshed!","content": {"text": "It\'s done","image": "image/url/something/whatevs","video": "video/url/something/whatevs"},"lockType": "auto"}],"owner": {"id": "0a9ds7a767ac7vr5as4de4465464646","displayName": "Tina Turner"},"completedBy": [{"id": "1s12fa1243g3kok6800llpmc1q76","user": "Billy Bob","message": "Text"},{"id": "1s12fa1243g3kok6800llpmc1q78","user": "jibby332","message": "great hike"},{"id": "1s12fa1243g3kok6800llpmc1q79","user": "Sonya","message": "sup??"},{"id": "1s12fa1243g3kok6800llpmc1q80","user": "ILoveDogs","message": ""}],"created": "Mon Feb 06 2017 00:45:48 GMT-0700 (MST)","expiration": "Mon Feb 20 2017 00:45:48 GMT-0700 (MST)"},{"id": "686x565asdf87657657xwe868q7we123","title": "Hike Mount Timp","description": "For extreme hikers only.","locations": [{"longitude": -122.4220,"latitude": 37.78720,"title": "In the beginning...","content": {"text": "You\'re a star!","image": "image/url/something/whatevs","video": "video/url/something/whatevs"},"lockType": "auto"},{"longitude": -122.4270,"latitude": 37.78920,"title": "Ta-dah!","content": {"text": "It\'s done","image": "image/url/something/whatevs","video": "video/url/something/whatevs"},"lockType": "auto"}],"owner": {"id": "0a9ds7a767ac7vr5as4de4465464646","displayName": "Tina Turner"},"completedBy": [{"id": "1s12fa1243g3kok6800llpmc1q76","user": "Billy Bob","message": "Text"}],"created": "Mon Feb 06 2017 00:45:48 GMT-0700 (MST)","expiration": "Mon Feb 20 2017 00:45:48 GMT-0700 (MST)"},{"id": "686x565asdf87657657xwe868q7we456","title": "Secret Adventure","description": "You\'ll never know...","locations": [{"longitude": -122.4430,"latitude": 37.78930,"title": "It all starts here!","content": {"text": "Here we go...","image": "image/url/something/whatevs","video": "video/url/something/whatevs"},"lockType": "auto"},{"longitude": -122.4030,"latitude": 37.78980,"title": "The last one","content": {"text": "I can\'t believe it!","image": "image/url/something/whatevs","video": "video/url/something/whatevs"},"lockType": "auto"}],"owner": {"id": "0a9ds7a767ac7vr5as4de4465464646","displayName": "Tina Turner"},"completedBy": [{"id": "1s12fa1243g3kok6800llpmc1q76","user": "Billy Bob","message": "Text"}],"created": "Mon Feb 06 2017 00:45:48 GMT-0700 (MST)","expiration": "Mon Feb 20 2017 00:45:48 GMT-0700 (MST)"}]}'
      let responseJson = JSON.parse(jsonStr)
      let challenge = {};
      for(var i = 0; i < responseJson.challenges.length; ++i) {
        if(responseJson.challenges[i].id == this.props.challengeId) {
          challenge = responseJson.challenges[i];
        }
      }
      let completedBy = '';
      let completedByArr = [];
      for(var i = 0; i < challenge.completedBy.length; ++i) {
        completedByArr.push(challenge.completedBy[i]);
      }
      console.log(this.props.challengeId)
      this.setState({
        challengeData: challenge,
        createdBy: 'Created by '+challenge.owner.displayName+' on '+challenge.created,
        completedBy: 'Completed by ' + completedByArr.length + ' ' + (completedByArr.length == 1 ? 'person' : 'people')
      })

    } catch(error) {
      console.error(error)
    }
  }

  onMarkerDeselect() {
    console.log("onMarkerDeselect")
  }

  getRouteLength() {
    var locations = this.props.challenge.locations
    if(locations.length == 1) {
      return false
    }
    var totalDistance = 0;
    for(var i=0; i<locations.length; i++) {
      // TODO: Calculate distance between points
      totalDistance += 3;
    }
    return totalDistance;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.challengeDetails}>
          <Text style={[styles.caption,styles.title]}>{this.state.challengeData.title}</Text>
          <View style={styles.line}/>
          <Text style={[styles.caption,styles.description]}>{this.state.challengeData.description}</Text>
          <Text style={[styles.caption,styles.createdBy]}>{this.state.createdBy}</Text>
          <View style={styles.line}/>

          <View style={styles.buttonContainer}>
            <View style={{margin:3}}>
              <Button style={styles.startButton}
                title='Begin Challenge'
                onPress=''
                color='blue'
                textAlign='center'
              />
            </View>
            <View style={{margin:3}}>
              <Button style={styles.startButton}
                title='Save to Favorites'
                onPress=''
                color='purple'
                textAlign='center'
              />
            </View>
          </View>
          <View style={styles.line}/>
          <Text style={[styles.caption,styles.description]}>{this.state.completedBy}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    flex: 2,
    height: 50,
    backgroundColor: 'skyblue'
  },
  challengeDetails: {
    flex: 3
  },
  caption: {
    fontSize: 28,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4
  },
  title: {
    // textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 42
  },
  description: {
    fontSize: 16
    // fontStyle: 'italic',
  },
  createdBy: {
    fontSize: 14,
    color: 'grey'
  },
  line: {
    backgroundColor: '#ccc',
    alignSelf: 'stretch',
    margin: 10,
    height: .5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20
  },
  startButton: {
    color:'white'
  }
})
