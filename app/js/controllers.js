var ClientListCtrl = ['$scope', 'clientDataService', function($scope, clientDataService) {
	clientDataService.getClients($scope.clients);
}];

var clientEdgesController = function($scope, $routeParams, clientDataService) {
	$scope.clientId = $routeParams.clientId;
	$console.log('Edges for client ID', $scope.clientId);

	clientDataService.getClientEdges($scope.clientId, $scope.clientEdges);
};
var ClientEdgesCtrl = ['$scope', '$routeParams', 'clientDataService', clientEdgesController];

var clientDetailsController = function($scope, $routeParams, clientDataService) {
	$scope.clientId = $routeParams.clientId;
	clientDataService.activeClient = $scope.clientId;
	$console.log('Details for client ID', $scope.clientId);

	clientDataService.getClientDetails($scope.clientId);
};
var ClientDetailsCtrl = ['$scope', '$routeParams', 'clientDataService', clientDetailsController];

var ClientDetailsAndEdgesCtrl = ['$scope', '$routeParams', 'clientDataService', function($scope, $routeParams, clientDataService) {
	if (typeof $routeParams.clientId !== 'undefined') {
		clientDetailsController($scope, $routeParams, clientDataService);
	} else if (typeof $routeParams.sourceClientId !== 'undefined' && typeof $routeParams.targetClientId !== 'undefined' && typeof $routeParams.direction !== 'undefined') {
		// todo warning: mucking with $routeParams could cause issues if this objet isn't being freshly generated per new request
		$routeParams.clientId = $routeParams.sourceClientId;
		edgeDetailsController($scope, $routeParams, clientDataService);
		clientEdgesController($scope, $routeParams, clientDataService);
	} else {
		console.log('Undefined route', $routeParams);
	}
}];

var EdgeDetailsCtrl = ['$scope', '$routeParams', 'clientDataService', function($scope, $routeParams, clientDataService) {
	$scope.sourceClient = $routeParams.sourceClientId;
	$scope.targetClient = $routeParams.targetClientId;
	clientDataService.activeEdge = { 'source': $scope.sourceClientId, 'target': $scope.targetClientId };
	$console.log('Edge details for edge' + $scope.sourceClientId + ' -> ' + $scope.targetClientId);

	clientDataService.getEdgeDetails($scope.sourceClientId, $scope.targetClientId);
}];

ClientListCtrl.$inject = ['clientDataService'];
ClientEdgesCtrl.$inject = ['clientDataService'];
ClientDetailsCtrl.$inject = ['clientDataService'];
EdgeDetailsCtrl.$inject = ['clientDataService'];

var ClientDataServiceProvider = function($provide) { 
	$provide.factory('clientDataService',
		['$http', function($http) {
			var clientDataService = {};
		
			// maintain current application state like the currently selected client/edge and the list of all clients
			clientDataService.clients = [];
			clientDataService.activeClient = undefined;
			clientDataService.activeEdge = undefined;

			clientDataService.getClients = function(result, closure) {
				$http.get('http://localhost:5002/api/v2/clients')
					.success(function(data) {
					    clientDataService.clients = data;

					    if (!clientDataService.clients || !clientDataService.clients[0]) {
					    	throw "No data available!";
					    }
					    
					    console.log(clientDataService.clients);

					    if (typeof result !== 'undefined') {
					    	result = data;
					    }

					    if (typeof closure === 'function') {
					    	closure(data);
					    }
					})
					.error(function(data) {
						console.log("Error! Could not load clients data: ", data);
					});
			};

			clientDataService.getClientEdges = function(clientId, result, closure) {
				$http.get('http://localhost:5002/api/v2/edges/' + $scope.clientId)
					.success(function(data) {
					    clientDataService.clientEdges = data;

					    if (!clientDataService.clientEdges || !clientDataService.clientEdges[0]) {
					    	throw "No data available!";
					    }
					    
					    console.log(clientDataService.clientEdges);

					    if (typeof result !== 'undefined') {
					    	result = data;
					    }

					    if (typeof closure === 'function') {
					    	closure(data);
					    }
					})
					.error(function(data) {
						console.log("Error! Could not load clients data: ", data);
					});
			};

			clientDataService.getClientDetails = function(clientId) {
				var result;
				clientDataService.getClients(undefined, function(data) { result = data[clientId] });
				return result;
			};

			clientDataService.getEdgeDetails = function(sourceClientId, targetClientId) {
				var result;
				// todo verify that edges API call returns a JSON array
				clientDataService.getClientEdges(sourceClientId, undefined, function(data) { result = data[targetClientId] });
				return result;
			};

			// TBD
			clientDataService.addClient = function(clientId) {};
			clientDataService.addEdge = function(sourceClientId, targetClientId) {};
			clientDataService.updateClientDetails = function(clientId) {};
			clientDataService.updateEdgeDetails = function(sourceClientId, targetClientId) {};
			return clientDataService;
		}]);
};