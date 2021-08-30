 angular.module('BasicSetup', [])
        
            .controller('basicCtrl', ['$log', '$scope', '$timeout', function($log, $scope, $timeout) {
               
                var basic = this;
                //basic.basicVar1 = "YES! This is from the basicCtrl Controller";
                basic.asyncAwaitTest_01 = "";
                
                
//              function nonPromise(){
//                console.log("WTF4");
//                //basic.asyncAwaitTest_01 = "WTF3"; 
//                $timeout(function(){                                   
//                           basic.asyncAwaitTest_01 = "WTF4"; 
//                         },0)     
//              }
//              nonPromise();
              
                
              function asyncAwaitTestFunc(){
                return new Promise(function(resolve,reject){
                  resolve("This is the asyncAwaitTest_01 Promise");
                })
              }  
              
              function insetLR(){
                return new Promise(function(resolve,reject){
                  resolve(lr.w("",1170,150,360,10));
                })
              }  
              
              var asyncAwaitBlockFunc = async function(){  
                var asyncAwaitTest_01 = await asyncAwaitTestFunc();
                console.log("asyncAwaitTest_01 is: " + asyncAwaitTest_01);
                $timeout(function(){ 
                  basic.asyncAwaitTest_01 = asyncAwaitTest_01;
                },0);
                
                var insetLRpromise = await insetLR();
                  var finalLR = lr.h("height:%",1000,insetLRpromise,500,10);
                  console.log("insetLRpromise is: " + insetLRpromise);
                  console.log("finalLR is: " + finalLR);
                $timeout(function(){   
                  basic.insetLR = insetLRpromise;
                },0);
              }
              asyncAwaitBlockFunc();
            }]);
                
            
 