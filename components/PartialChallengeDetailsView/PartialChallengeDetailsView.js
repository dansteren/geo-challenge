import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  ScrollView,
  Alert,
  Button
} from 'react-native';

export default class PartialChallengeDetailsView extends Component {


  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      challengeData: {
      },
      createdBy: '',
      completedBy: '',
      completedByArr: [],
      users: ds.cloneWithRows([]),
      ds: ds
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

      // TODO: switch [some of] the following out for the commented code above (but, the above code needs modifying)
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

      this.state.users = this.state.ds.cloneWithRows(completedByArr)

      this.setState({
        challengeData: challenge,
        createdBy: 'Created by '+challenge.owner.displayName+' on '+challenge.created,
        completedBy: completedByArr.length + ' complete' + (completedByArr.length == 1 ? '' : 's')
        // another option:
        //'Completed by ' + completedByArr.length + ' ' + (completedByArr.length == 1 ? 'person' : 'people')
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

  hide() {
    console.log('closeInfoWindow called')
    console.log(this.props)
    this.props.showInfoWindow = false
    // super.closeInfoWindow()
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.challengeDetails}>
          <Text style={[styles.caption,styles.title]}>{this.state.challengeData.title}</Text>
          <Text style={[styles.caption,styles.description]}>{this.state.challengeData.description}</Text>
          <Text style={[styles.caption,styles.createdBy]}>{this.state.createdBy}</Text>


          <View style={styles.line}/>
          <View style={styles.buttonContainer}>
            <View style={{margin:1}}>
              <Button style={styles.startButton}
                title='Begin'
                onPress=''
                color='blue'
                textAlign='center'
              />
            </View>
            <View style={{margin:1}}>
              <Button style={styles.startButton}
                title='Add to Favorites'
                onPress=''
                color='purple'
                textAlign='center'
              />
            </View>
            <View style={{margin:1}}>
              <Button style={styles.startButton}
                title='Back'
                onPress={this.hide.bind(this)}
                color='green'
                textAlign='center'
              />
            </View>
          </View>
          <View style={styles.line}/>

          <Text style={[styles.caption,styles.description,styles.completes]}>{this.state.completedBy}:</Text>
          <ListView
            dataSource={this.state.users}
            renderRow={(person) =>
              <View>
                <Text style={[styles.caption,styles.descriptionSmall]}>{person.user} <Text style={styles.message}>{person.message}</Text></Text>
                <View style={styles.line}/>
              </View>}
          />
        </View>
      </ScrollView>
    );
  }
}

//<CompletedByListView users={this.state.completedByArr}/>

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
    paddingRight: 12
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
  },
  message: {
    color: '#414141'
  },
  descriptionSmall: {
    fontSize: 12
  },
  completes: {
    paddingBottom: 10
  }
})
