angular
  .module('app')
  .component('landing', {
    templateUrl: 'components/landing.html',
    controller: LandingCtrl,
    bindings: {
      user: '<'
    }
  })

function LandingCtrl (FireDB) {
  var ctrl = this

  ctrl.$onInit = function () {
    ctrl.profiles = FireDB.getArray('profiles')
    ctrl.profile = FireDB.getObject('profiles/' + ctrl.user.uid)
  }
}
