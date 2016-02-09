
angular.module('app', [])
  .controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {
  
  /**
   * Let's just make sure something happens when the user submits the form
   * by binding the declared 'addNew' function to the scope. You can see we
   * are expecting a user object as a parameter. This is 'userForm'
   */
  $scope.addNew = function (user) {
    $scope.users.push({ 
      name: user.name,
      avatarUrl: user.url
    }); /* [1] */
    
    user.name = ''; /* [2] */
    user.url = ''; /* [2] */
  };
  };
}
