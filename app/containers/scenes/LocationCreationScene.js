import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';
import { LocationCreationCSS as Css } from './LocationCreationScene.css'
import { Colors } from '../../theme/theme';
import MapView from 'react-native-maps';
import { DescriptionInput } from '../../components';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / 425;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class LocationCreationScene extends Component {

  constructor(props) {
    super(props);
    const location = this.props.location;
    if (location) {
      this.state = {
        title: location.title,
        latitude: location.latitude,
        longitude: location.longitude,
        content: location.content,
      }
    } else {
      this.state = {
        title: '',
        latitude: undefined,
        longitude: undefined,
        content: '',
      }
    }
  }

  render() {
    return (
      <View style={Css.page}>
        <TextInput
          style={Css.locationTitle}
          autoCapitalize='sentences'
          placeholderTextColor={Colors.hintTextWhite}
          underlineColorAndroid='transparent'
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
          placeholder='Enter a title for this location'
        />
        <MapView
          style={Css.map}
          showsUserLocation={true}
          initialRegion={this.getMapRegionByLocation() || {
            latitude: 40.248660, // TODO: this defaults to BYU Campus
            longitude: -111.649194, // TODO: handle this more gracefully
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          onPress={(e) => this.placeMarker(e.nativeEvent.coordinate)}
        >
          {this.state.latitude && this.state.longitude &&
            <MapView.Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }}
            />
          }
        </MapView>
        <View style={{height: 1, backgroundColor: 'rgba(0,0,0,.2)'}}/>
        <DescriptionInput
          placeholder={'Leave a message'}
          description={this.state.content}
          onChange={(content) => this.setState({ content })}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.onSave({
              'title': this.state.title,
              'latitude': parseFloat(this.state.latitude),
              'longitude': parseFloat(this.state.longitude),
              'content': this.state.content
            });
            this.props.navigator.pop();
          }}
        >
          <View style={Css.footer}>
            <Text style={Css.addButton}>ADD</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  getMapRegionByLocation(){
		navigator.geolocation.getCurrentPosition(
			(position) => {
				return {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA
				};
			},
			(error) => undefined,
		);
  }

  placeMarker(location) {
    console.log('Map Event: ', location);
    this.setState({
      latitude: location.latitude,
      longitude: location.longitude
    })
  }
}


LocationCreationScene.propTypes = {
  onSave: PropTypes.func,
  location: PropTypes.object,
  navigator: PropTypes.object.isRequired
};
