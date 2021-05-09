 angular.module('BasicSetup', [])
        
            .controller('basicCtrl', ['$log', '$scope', function($log, $scope) {
               
                var basic = this;
                basic.basicVar1 = "YES! This is from the basicCtrl Controller";
            
            }]);
                
            
 