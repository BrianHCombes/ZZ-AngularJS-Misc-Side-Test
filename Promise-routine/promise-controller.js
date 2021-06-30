 angular.module('PromiseRoutine', [])
        
            .controller('promiseCtrl', ['$log', '$scope',  'PromDat', function($log, $scope, PromDat) {
               
                var prom = this;
                prom.promVar1 = "YES! This is from the promiseCtrl Controller";
                
                
                var promiseData = function(promData){
                  
                  console.log("Promise data returned to the controller is: " + JSON.stringify(promData));
                  prom.promiseData1 = "Promise data returned to the controller is: " + JSON.stringify(promData);
                }
                PromDat.getPromiseData2(promiseData);
                
                
                // Playing around with async / await per https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
                var hello = async function() { return "Hello" };
               
                console.log( hello());
                hello().then(console.log);
                hello().then((value) => console.log(value));
                
                
                
                
                var hello2 = async function() {
                  var greeting = await Promise.resolve("Hello2");
                  return greeting;
                };

                hello2().then(alert);
                
                
            }])
          
                
            
 