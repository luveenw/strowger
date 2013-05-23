function findById(a, id) {
  for (var i=0; i<a.length; i++) {
    if (a[i].id == id) return a[i];
  }
}

angular.module('strowger', []).
  config(['$routeProvider', function($routeProvider) {
    console.log('Setting up stuff...');

    $routeProvider.
      when('/clients', { template: 'partials/edit/clients.html', controller: ClientListCtrl }).
      when('/clients/:clientId', { template: 'partials/edit/clientEdges.html', controller: ClientDetailsCtrl }).
      when('/clients/:sourceClientId/:targetClientId', { template: 'partials/edit/clients.html' }).
      otherwise({redirectTo: '/clients'});
}]);