angular.module('mobileresume.controllers', [])

.controller('ProfileCtrl', function($scope) {
  //scope variables
  $scope.profileInformation = {
    "name": "John Moline",
    "address": "2956 Albares",
    "city": "Grand Prairie",
    "state": "TX",
    "zip": "75054",
    "phone": "(214)400-9400",
    "description": "Hello and thank you for visiting my resume. I am a Senior Architect that happens to still write alot of code. It is my strong opinion that all senior-level engineers still ensure that they keep on top of technology and how it evolves. To be a successful mentor, one needs to know the ins/outs of all software platforms. Please click the other application tabs for more information on my background. Thank you!"
  };
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
