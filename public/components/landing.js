angular
  .module('app')
  .component('landing', {
    templateUrl: 'components/landing.html',
    controller: LandingCtrl,
    bindings: {
      user: '<'
    }
  })

function LandingCtrl (Profiles, $firebaseObject, $firebaseArray) {
  var ctrl = this

  ctrl.$onInit = function () {
    ctrl.profiles = $firebaseArray(Profiles)
    ctrl.profile = $firebaseObject(
      firebase.database().ref('profiles/' + ctrl.user.uid)
    )
  }
}
