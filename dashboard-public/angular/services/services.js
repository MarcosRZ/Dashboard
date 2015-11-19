var Services = angular.module('Services',[]);

Services.factory('RamService', ['$http', ($http) =>{

    var svc = {

        get: (callback) => {

           var promise = $http({method: 'GET', url:'/ram'}).then(

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

Services.factory('DiskService', ['$http', ($http) =>{

    var svc = {

        get: (callback) => {

           var promise = $http({method: 'GET', url:'/disk'}).then(

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
