var Controllers = angular.module('Controllers', ['Services'])

Controllers.controller('CpuController', ['$scope', '$interval', 'RamService', 'DiskService', function ($scope, $interval, RamService, DiskService) {

        $scope.ram = {}
        $scope.disk = {}

        $scope.updateRam = (ram) => {
            $scope.ram = ram;
            $scope.ram.mempercent = ((ram.totalmem - ram.freemem) * 100 / ram.totalmem);
            $scope.gg1.refresh($scope.ram.mempercent);
            $scope.gg1.label = $scope.ram.used + '/' + $scope.ram.total;
        }

        $scope.updateDisk = (disk) => {
            $scope.disk = disk;
            $scope.disk.percent = disk.available * 100 / disk.total;
        }
        
        $scope.work = () => {
            RamService.get($scope.updateRam);
           // DiskService.get($scope.updateDisk);
        }

        $interval($scope.work, 1000);

        $scope.gg1 = new JustGage({
            id: "gg1",
            formatNumber: false,
            counter: true,
            title: 'Ram',
            label: $scope.ram.used + '/' + $scope.ram.total
        });

        
    
    }
]);
