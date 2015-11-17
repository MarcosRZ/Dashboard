var Controllers = angular.module('Controllers', ['Services'])

Controllers.controller('CpuController', ['$scope', '$interval', 'StatsService', function ($scope, $interval, StatsService) {

        $scope.stats = {}

        $scope.updateModel = (model) => {
            $scope.stats = model;
            $scope.mempercent = ((model.totalmem - model.freemem) * 100 / model.totalmem)
        }
        
        $scope.work = () => {
            StatsService.get($scope.updateModel);
        }

        $interval($scope.work, 100) ;
    
    }
]);
