//first, copied from Dan's code for reference
export async function getChallenges(successCallback, failureCallback) {
  let formData = new FormData();
  formData.append('token', 'geo-ninjas');
  formData.append('user', 3);
  // TODO: get the userId from AsyncStorage. Waiting on authentication scene.
  // try {
  //   const userId = await AsyncStorage.getItem('userId');
  //   if (userId !== null){
  //     formData.append('user', userId);
  //   }
  // } catch (error) {
  //   failureCallback('Authentication error. Try signing in again.');
  // }
  // formData.append('challenge', JSON.stringify(challenge));
  // try {
  //   const response = await fetch('http://enexia.com:10000/geo-challenge/challenge/create', {
  //     method: 'POST',
  //     body: formData
  //   })
  //   const responseJson = await response.json();
  //   if(responseJson.success) {
  //     successCallback(responseJson);
  //   } else {
  //     failureCallback(getErrorMessage(responseJson.error));
  //   }
  // } catch (e) {
  //   failureCallback(e);
  // }


  try{
    const response = await fetch('http://enexia.com:10000/geo-challenge/challenge/search', {
      method: 'POST', //GET?
      body: formData
    })
    const responseJson = await response.json();
    if(responseJson.success) {
      successCallback(responseJson);
    } else {
      failureCallback(getErrorMessage(responseJson.error));
    }
  } catch (e){
    failureCallback(e);
  }



}

export function getErrorMessage(error) {
  switch(error) {
    case 'auth_failure':
      return 'Authentication error';
    case 'missing_user':
      return 'user does not exist';
    case 'missing_challenge':
      return 'missing challenge';
    case 'user_doesnt_exist':
      return 'user doesn\'t exist';
    case 'invalid_json':
      return '';
    case 'missing_title':
      return 'missing title';
    case 'expires_not_long_number':
      return 'invalid expiration format';
    case 'missing_points':
      return 'missing point';
    case 'point_gps_invalid':
      return '';
    case 'user_inactive':
      return '';
    case 'ERROR_CHALLENGE_DOESNT_EXIST':
      return '';
    case 'ERROR_CHALLENGE_HAS_ACHIEVEMENT':
      return '';
    case 'ERROR_EXPIRES_INVALID':
      return '';
    case 'ERROR_MAX_LIMIT_EXCEEDED':
      return '';
    case 'ERROR_MAX_NOT_INTEGER':
      return '';
    case 'ERROR_MISSING_LOCATION_PARAMETER':
      return '';
    case 'ERROR_MISSING_POINT':
      return '';
    case 'ERROR_POINT_DOESNT_EXIST':
      return '';
    case 'ERROR_UNKNOWN_SORT_TYPE':
      return '';
    default:
      return 'Unknown error occurred. Check your connection and try again'
  }
}
