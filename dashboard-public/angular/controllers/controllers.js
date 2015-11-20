var Controllers = angular.module('Controllers', ['Services'])

Controllers.controller('CpuController', ['$scope', '$interval', 'RamService', 'DiskService', function ($scope, $interval, RamService, DiskService) {

        $scope.ram = {}
        $scope.disk = {}

        $scope.updateRam = (ram) => {
            $scope.ram = ram;
            $scope.ram.percent = ((ram.totalmem - ram.freemem) * 100 / ram.totalmem);
            $scope.ramGauge.refresh($scope.ram.percent);
            console.log($scope.ram.percent)
        }

        $scope.updateDisk = (disk) => {
            $scope.disk = disk;
            $scope.disk.percent = ((disk.total - disk.free) * 100 / disk.total);
            $scope.diskGauge.refresh($scope.disk.percent);
            console.log($scope.disk.percent);
        }

        $scope.ramGauge = new JustGage({
            id: "ram-gauge",
            formatNumber: false,
            counter: false,
            title: 'RAM',
            label: '%'
        });

        $scope.diskGauge = new JustGage({
            id: "disk-gauge",
            formatNumber: false,
            counter: false,
            title: 'Disk',
            label: '%'
        });

        $scope.work = () => {
            RamService.get($scope.updateRam);
            DiskService.get($scope.updateDisk);
        }

        $interval($scope.work, 1000);
    }
]);
