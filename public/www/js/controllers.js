angular.module('mobileresume.controllers', [])

.controller('ProfileCtrl', function($scope, $http) {
  //scope variables
  $scope.profileInformation = {
    "name": "John Moline",
    "address": "2956 Albares",
    "city": "Grand Prairie",
    "state": "TX",
    "zip": "75054",
    "phone": "(214)400-9400",
    "description": "Hello and thank you for visiting my mobile resume. I am a Senior Developer/Architect. I live and breathe technology and am always looking for more insight to continuously build my knowledge and arsenal of development tools. Please click the other application tabs for more information on my background. Thank you!"
  };
  $scope.profileQuote = "";
  $scope.randomjoke = null;
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

  //scope load events
  $scope.$on('$ionicView.afterEnter', function(event, data) {
    //call the random joke api
    console.log("Getting random joke");
    $http.get('http://api.icndb.com/jokes/random').then(function(response) {
      console.log("Joke Received: " + JSON.stringify(response));
      $scope.randomjoke = response;
    });
  });

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
  //scope variables
  $scope.skills = [
    {
      "image" : "http://www.content4demand.com/wp-content/uploads/2014/12/tools.jpg",
      "environment" : "IDEs",
      "items" : [ "Visual Studio", "Eclipse", "Android Studio", "X-Code", "Atom" ]
    },
    {
      "image" : "http://www.software20.org/wp-content/uploads/2016/01/programming-languages.jpg",
      "environment" : "Languages",
      "items" : [ ".NET", "Java (including Android)", "iOS (Objective-C and Swift)", "PHP", "NodeJS", "Javascript (including UI frameworks)", "XML", "JSON", "C", "C++", "HTML5", "CSS3" ]
    },
    {
      "image" : "http://www.essentialsql.com/wp-content/uploads/2014/05/database-parts.jpg",
      "environment" : "Databases",
      "items" : [ "MongoDB", "CouchDB (including Cloudant)", "MySql", "Sql Server", "Oracle", "DB2" ]
    },
    {
      "image" : "http://www.derivetech.com/sites/default/files/Desktop-Development-Gears-Operation-Software-Icon-2.png",
      "environment" : "Application Platforms",
      "items" : [ "Android", "iOS", "Cordova", "Micro-Services", "REST", "SOAP" ]
    },
    {
      "image" : "https://i.ytimg.com/vi/5AjReRMoG3Y/maxresdefault.jpg",
      "environment" : "Operating Systems",
      "items" : [ "Windows", "Windows Server", "MacOS", "Linux", "Unix" ]
    }
  ];
});
