import LoginScene from '../containers/scenes/LoginScene'
import MainMapScene from '../containers/scenes/MainMapScene'
import ProfileScene from '../containers/scenes/ProfileScene'
import UserChallengesScene from '../containers/scenes/UserChallengesScene'
import ChallengeDetailScene from '../containers/scenes/ChallengeDetailScene'
import LocationDetailScene from '../containers/scenes/LocationDetailScene'
import ChallengeCreationScene from '../containers/scenes/ChallengeCreationScene'
import LocationCreationScene from '../containers/scenes/LocationCreationScene'
import ChallengeTracker from '../containers/scenes/ChallengeTracker/ChallengeTracker'

module.exports.LoginRoute = {
	component: LoginScene
}

module.exports.MainMapRoute = {
	title: 'Map', 
	component: MainMapScene,
	rightText: 'Challenges', 
	leftText: 'Profile',
	leftRoute: "ProfileRoute",
	rightRoute: "UserChallengesRoute"
}

module.exports.ProfileRoute = {
	title: 'Profile', 
	component: ProfileScene, 
	rightText: 'Map'
}

module.exports.UserChallengesRoute = {
	title: 'My Challenges', 
	component: UserChallengesScene, 
	leftText: 'Map'
}

module.exports.ChallengeDetailRoute = {
	title: 'Challenge', 
	component: ChallengeDetailScene, 
	leftText: 'Challenges'
}

module.exports.LocationDetailRoute = {
	title: 'Location', 
	component: LocationDetailScene, 
	leftText: ''
}

module.exports.ChallengeCreationRoute = {
	title: 'New challenge',
	component: ChallengeCreationScene,
	leftText: 'Challenges'
}

module.exports.LocationCreationRoute = {
	title: 'New Location',
	component: LocationCreationScene,
	leftText: ''
}

module.exports.ChallengeTrackerRoute = {
	title: 'Challenge',
	component: ChallengeTracker,
	leftText: ''
}