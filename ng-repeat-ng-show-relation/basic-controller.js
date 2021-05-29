 angular.module('BasicSetup', [])
        
            .controller('basicCtrl', ['$log', '$scope', function($log, $scope) {
               
                var basic = this;
                basic.basicVar1 = "Try below, it works";
                
                basic.ngRepeatTest = [0,1,2];
                
                //basic.showDivViaController = "1";
                basic.showTest =  function(enable){
                                    console.log("Made back to Controller and enable is: " + enable)
                                    if(enable >= 1){
                                      basic.showDivViaController = 1;
                                      basic.ngRepeatElementIndex = enable-1;
                                    }
                                    else { 
                                      console.log("inside");
                                      basic.showDivViaController = 0;
                                      console.log(basic.showDivViaController);
                                    }
                                  };
                                  
                                  
            
            }]);
                
            
 