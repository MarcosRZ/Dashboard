var Controllers = angular.module('Controllers', ['Services', 'ngJustGage'])

Controllers.controller('CpuController', ['$scope', '$interval', 'RamService', 'DiskService', function ($scope, $interval, RamService, DiskService) {

        $scope.ram = {percent:50}
        $scope.disk = {percent:50}

        $scope.updateRam = (ram) => {
            $scope.ram = ram;
            $scope.ram.percent = ((ram.totalmem - ram.freemem) * 100 / ram.totalmem);
        }

        $scope.updateDisk = (disk) => {
            $scope.disk = disk;
            $scope.disk.percent = ((disk.total - disk.free) * 100 / disk.total);
        }

        $scope.work = () => {
            RamService.get($scope.updateRam);
            DiskService.get($scope.updateDisk);
        }

        $interval($scope.work, 1000);
    }
]);
