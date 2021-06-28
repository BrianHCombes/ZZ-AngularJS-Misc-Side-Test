 angular.module('PromiseRoutine', [])
        
            .controller('promiseCtrl', ['$log', '$scope',  'PromDat', function($log, $scope, PromDat) {
               
                var prom = this;
                prom.promVar1 = "YES! This is from the promiseCtrl Controller";
                
                
                var promiseData = function(promData){
                  
                  console.log("Promise data returned to the controller is: " + JSON.stringify(promData));
                  prom.promiseData1 = "Promise data returned to the controller is: " + JSON.stringify(promData);
                }
                
                PromDat.getPromiseData2(promiseData);
            }])
          
                
            
 