/**
 * Created by Raj Chandra on 11/5/2017.
 */

var app = angular.module('vellore',["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/recommended",{
        controller : "contentDelivery",
        templateUrl : "/templates/recommended.ejs"
    })
        .when("/bank",{
            // controller : "contentDelivery",
            templateUrl : "/templates/bank.ejs"
        })
        .when("/hotel",{
            controller : "contentDelivery",
            templateUrl : "/templates/hotel.html"
        })
        .when("/hospital",{
            controller : "contentDelivery",
            templateUrl : "/templates/hospital.html"
        })
        .when("/nearby",{
            controller : "contentDelivery",
            templateUrl : "/templates/nearby.html"
        })
        .when("/report",{
            controller : "contentDelivery",
            templateUrl : "/templates/report.html"
        })
        .when("/travel",{
            controller : "contentDelivery",
            templateUrl : "/templates/travel.html"
        })
        .otherwise({
            template : "404 url not Found !!"
        });
});

app.controller('contentDelivery',['$scope','$http','$location',function ($scope,$http,$location) {
    console.log("Controller Loaded");
    $scope.getRecommendations = function () {
        $http.get('/recommended').then(successCallback, errorCallback);

        function successCallback(response) {
            $scope.question = response.data;
        }

        function errorCallback(error) {
            console.log("data could not be Obtained !" + error);
        }
    }
}]);

angular.module('vellore').directive('loader', loader);

/**
 * Defines loading spinner behaviour
 *
 * @param {obj} $http
 * @returns {{restrict: string, link: Function}}
 */
function loader($http) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$watch(function() {
                return $http.pendingRequests.length;
            }, function(isLoading) {
                if (isLoading) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
        }
    };
}