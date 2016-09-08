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
    "description": " - Hello and thank you for visiting my resume. I am a Senior Architect that happens to still write alot of code. It is my strong opinion that all senior-level engineers still ensure that they keep on top of technology and how it evolves. To be a successful mentor, one needs to know the ins/outs of all software platforms. Please click the other application tabs for more information on my background. Thank you!"
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

.controller('ReferencesCtrl', function($scope) {
  //scope variables
  $scope.references = [
    {
      "image" : "http://107.170.195.98/wp-content/uploads/2014/12/ibm.png",
      "name" : "IBM",
      "description" : "Performs system design, application architecture, system analysis, application development, unit testing of projects related to software development for mobile, micro-services, and front-end technologies.",
      "dates" : "February 2013 - PRESENT"
    },
    {
      "image" : "http://img.wallpaperfolder.com/f/6CDCD20D1E31/browse-motorola-logo-bin-collection.jpg",
      "name" : "Motorola",
      "description" : "Performed electronics engineering for mobile devices; Created automated service process for Android devices utilizing Android and .NET frameworks; Instrumental in pairing Motorola partner B2B systems with service integrations",
      "dates" : "February 2000 - August 2012"
    },
    {
      "image" : "http://s1.thingpic.com/images/ot/oxinrMZGEoSAYbnAM5LToCHm.jpeg",
      "name" : "Contractor",
      "description" : "Consistently attends to various companies around the world by building the most advanced applications, back-end systems, and data sources using the latest and emerging technologies.",
      "dates" : "February 2000 - PRESENT"
    }
  ];


})

.controller('SkillsCtrl', function($scope) {
});
