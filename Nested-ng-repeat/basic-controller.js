 angular.module('BasicSetup', ['ngSanitize'])
        
            .controller('basicCtrl', ['$log', '$scope', function($log, $scope) {
               
                var basic = this;
                basic.basicVar1 = "YES! This is from the basicCtrl Controller";

                basic.outer = [
                                {
                                  "property1":"Outer ng-repeat",
                                  "property2":[
                                                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                                "<br>1",
                                                "<br>2",
                                                "<br>3",
                                                "<br>4",
                                                "<br>5",
                                                "<br>6"
                                              ]
                                },
                                {
                                  "property1":"Outer ng-repeat",  
                                  "property2":[
                                                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                                "<br>1",
                                                "<br>2",
                                                "<br>3",
                                                "<br>4",
                                                "<br>5",
                                                "<br>6"
                                              ]
                                },
                                {
                                  "property1":"Outer ng-repeat",
                                  "property2":[
                                                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                                "<br>1",
                                                "<br>2",
                                                "<br>3",
                                                "<br>4",
                                                "<br>5",
                                                "<br>6"
                                              ]
                                }
                              ]  
                              
                basic.testArray = [1,2,3,4];              
                
                basic.outerTestFunc = function(index){
                  console.log("Outer has made it back to the controller and the outer index is: " + index);
                }
                
                basic.testFunc = function(index){
                  console.log("Made it back to the controller and the index is: " + index);
                }
            
            }]);
                
            
 