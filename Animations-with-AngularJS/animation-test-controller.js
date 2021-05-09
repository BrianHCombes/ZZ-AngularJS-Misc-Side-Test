 angular.module('ngAnimate', [])
        
            .controller('animateCTRL', ['$log', '$scope', function($log, $scope) {
               
                var animate = this;
                animate.testVar = "YES! This is from the animateCTRL Controller";
                
                animate.centering = lr.w("left:px",1680,-300,360,-360);
                console.log(animate.centering);
                /*animate.centering = "left:-100px";*/
                console.log(animate.centering)
                
                lr.toConsole();
            
            }]);
                
            
 