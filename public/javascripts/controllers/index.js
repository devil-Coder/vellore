/**
 * Created by Raj Chandra on 11/5/2017.
 */
var app = angular.module("velore", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/recommended",{
        controller : "contentDelivery",
        templateUrl : "/templates/recommended.ejs"
    })
        .when("/bank",{
            controller : "contentDelivery",
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
