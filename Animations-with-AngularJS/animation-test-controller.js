 angular.module('ngAnimate', [])
        
            .controller('animateCTRL', ['$log', '$scope', function($log, $scope) {
               
                var animate = this;
                animate.testVar = "YES! This is from the animateCTRL Controller";
            
            }]);
                
            
 