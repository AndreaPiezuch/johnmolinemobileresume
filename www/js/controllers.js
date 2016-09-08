angular.module('mobileresume.controllers', [])

.controller('ProfileCtrl', function($scope) {
  //scope variables
  $scope.profileQuote = "";
  $scope.profileListItems = [
    {
      icon: "icon ion-social-twitter",
      url: "https://twitter.com/MolineSystem",
      name: "Twitter"
    },
    {
      icon: "icon ion-social-facebook",
      url: "https://www.facebook.com/john.h.moline",
      name: "Facebook"
    },
    {
      icon: "icon ion-social-linkedin",
      url: "https://www.linkedin.com/in/john-moline-0156094",
      name: "LinkedIn"
    },
    {
      icon: "icon ion-social-github",
      url: "https://github.com/JoMo1970/",
      name: "Github"
    },
    {
      icon: "icon ion-ios-cloud",
      url: "http://www.molinesystem.com",
      name: "Web"
    }
  ];


})

.controller('ReferencesCtrl', function($scope) {})

.controller('SkillsCtrl', function($scope) {
});
