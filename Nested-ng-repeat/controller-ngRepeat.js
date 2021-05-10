 angular.module('BasicSetup', ['ngSanitize'])
        
            .controller('basicCtrl', ['$log', '$scope', function($log, $scope) {
               
                var basic = this;
                basic.basicVar1 = "YES! This is from the basicCtrl Controller";

                var outer = [
                                {
                                  "id":1,  
                                  "property1":"Outer ng-repeat",
                                  "inner":[
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
                                  "id":2,  
                                  "property1":"Outer ng-repeat",  
                                  "inner":[
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
                                  "id":3,  
                                  "property1":"Outer ng-repeat",
                                  "inner":[
                                            "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                            "<br>1",
                                            "<br>2",
                                            "<br>3",
                                            "<br>4"
                                          ]
                                }
                              ]  
                              
              basic.outer = angular.copy(outer);                
                              
                //basic.testArray = [1,2,3,4];              
                
                basic.outerIndex = 0;
                basic.innerIndex = 0;
                basic.outerTestFunc = function(index){
                  basic.outerIndex = index;
                  console.log("Outer has made it back to the controller and the outer index is: " + index);
                  
                  window.setTimeout(function(){basic.highlight();},200);
                }
                
                basic.testFunc = function(index){
                  basic.innerIndex = index;
                  console.log("Inner has made it back to the controller and the inner index is: " + index);
                  
                }
                
                
                basic.highlight = function(){
                  
                  var outerLength = basic.outer.length;
                  var innerLength = basic.outer[basic.outerIndex].inner.length;
                  console.log("outerLength is: " + outerLength + "\ninnerLength is: " + innerLength)
                  console.log("basic.outerIndex is: " + basic.outerIndex + "\nbasic.innerIndex is: " + basic.innerIndex)
                  
                  
                  outer[basic.outerIndex].inner[basic.innerIndex] = "<br>WTF";
//                  for(var i=0; i < outerLength; i++ ){
//                      
//                      for(var j=0; j < innerLength; j++ ){
//                        //console.log("i is: " + i + " and j is: " + j);
//                        if(i === basic.outerIndex && j === basic.innerIndex){
//                          outer[basic.outerIndex].inner[basic.innerIndex] = "<br>WTF";
//                          console.log("Contents are: " + outer[i].inner[j]);
//                        }
//                        else{ 
//                          outer[basic.outerIndex].inner[basic.innerIndex] = outer[i].inner[j];
//                          console.log("Contents are: " + basic.outer[i].inner[j]);
//                        }  
//                      }
//                  }
                  
                  window.setTimeout(function(){console.log("in setTimeout"); console.log("outer is: " + JSON.stringify(outer)); basic.outer = angular.copy(outer);},200);    
                  
                  
                  
                  
                  
//                  for(var i=0; i < outerLength; i++ ){
//                      
//                      for(var j=0; j < innerLength; j++ ){
//                        //console.log("i is: " + i + " and j is: " + j);
//                        if(i === basic.outerIndex && j === basic.innerIndex){
//                          basic.outer[basic.outerIndex].inner[basic.innerIndex] = "<span class='highlight1'><br>WTF</br>";
//                          //basic.outer[basic.outerIndex].inner[basic.innerIndex] = basic.outer[i].inner[j];
//                          console.log("Contents are: " + basic.outer[i].inner[j]);
//                        }
//                        else{ 
//                          basic.outer[basic.outerIndex].inner[basic.innerIndex] = basic.outer[i].inner[j];
//                          console.log("Contents are: " + basic.outer[i].inner[j]);
//                        }  
//                      }
//                  }
                  
                 
                  
                }
                
                
            
                //basic.outer[1].inner[4] = "<span class='highlight1'><br>WTF</br>";
                
            
            
            }]);
                
            
 