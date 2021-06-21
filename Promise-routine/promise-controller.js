 angular.module('PromiseRoutine', [])
        
            .controller('promiseCtrl', ['$log', '$scope', function($log, $scope) {
               
                var prom = this;
                prom.promVar1 = "YES! This is from the promiseCtrl Controller";
            
            }]);
                
            
 