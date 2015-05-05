angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('profileCtrl', function($scope) {
  $scope.user =
    { 
        firstName: 'Kushal',
        lastName: 'Nigam',
        phoneNum: '6784040062',
        dob: '11/11/1993'
    };
})

.controller('feedCtrl', function($scope, $ionicModal) {
  $scope.statuses = [
    { title: 'Chill', user: 'Tom', id: 1 },
    { title: 'Ball', user: 'Bob', id: 2 },
    { title: 'Sleep', user: 'Eve', id: 3 },
    { title: 'Eat', user: 'Ann', id: 4 },
  ];

  // Create and load the modal
  $ionicModal.fromTemplateUrl('new-status.html', function(modal)
  {
      $scope.statusModal = modal;
  }, {
      scope: $scope,
      animation: 'slide-in-up'
  });

  // Called when form is submitted
  $scope.createStatus = function(status) {
      $scope.statuses.push({
          title: status.title,
          user: 'Kushal',
          id: $scope.statuses.length
      });
      $scope.statusModal.hide();
      status.title = "";
  };

  // Open the new status modal
  $scope.newStatus= function() {
      $scope.statusModal.show();
  };

  // Close the new status modal
  $scope.closeNewStatus = function() {
      $scope.statusModal.hide();
  };
})

.controller('notificationsCtrl', function($scope) {
  $scope.notifications = [
    { title: 'Someone added you as a friend' },
    { title: 'You\'ve been invited' },
    { title: 'Someone wants to chat' }
  ];
})

.controller('friendsCtrl', function($scope) {
  $scope.friends = [
    { name: 'Bob' },
    { name: 'Tom' },
    { name: 'Amy' }
  ];
})

.controller('statusCtrl', function($scope, $stateParams) {
  $scope.id = $stateParams["statusId"]
});
