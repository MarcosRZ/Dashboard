var Services = angular.module('Services',[]);

Services.factory('StatsService', ['$http', ($http) =>{

    var svc = {

        hello: () => console.log("Hello world!"),

        get: (callback) => {

           var promise = $http({method: 'GET', url:'/stats'}).then(

                    function (response){

                        if (callback) callback(response.data);
                    },
 
                    function (response){
                        console.log ("Error: " + response.data);
                    }
                );
            
                return promise;
        }

    }

    return svc;

}]);
