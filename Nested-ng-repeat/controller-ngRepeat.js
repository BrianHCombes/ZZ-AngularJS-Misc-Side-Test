 angular.module('BasicSetup', ['ngSanitize'])
        
            .controller('basicCtrl', ['$log', '$scope', function($log, $scope) {
               
                var basic = this;
                basic.basicVar1 = "YES! This is from the basicCtrl Controller";

                var outer = [
                                {
                                  "id":1,  
                                  "property1":"Outer ng-repeat",
                                  "inner":[
                                            { "id":"1A",
                                              "img":"",
                                              "html":"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                              "css":""
                                            },
                                            { "id":"1B",
                                              "img":"",
                                              "html":"<br>1",
                                              "css":""
                                            },  
                                            { "id":"1C",
                                              "img":"",
                                              "html":"<br>2",
                                              "css":""
                                            },  
                                            { "id":"1D",
                                              "img":"",
                                              "html":"<br>3",
                                              "css":""
                                            },  
                                            { "id":"1E",
                                              "img":"",
                                              "html":"<br>4",
                                              "css":""
                                            },  
                                            { "id":"1F",
                                              "img":"",
                                              "html":"<br>5",
                                              "css":""
                                            },  
                                            { "id":"1G",
                                              "img":"",
                                              "html":"<br>6",
                                              "css":""
                                            }
                                          ]
                                },
                                {
                                  "id":2,  
                                  "property1":"Outer ng-repeat",  
                                  "inner":[
                                            { "id":"2A",
                                              "img":"",
                                              "html":"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                              "css":""
                                            },
                                            { "id":"2B",
                                              "img":"",
                                              "html":"<br>1",
                                              "css":""
                                            },  
                                            { "id":"2C",
                                              "img":"",
                                              "html":"<br>2",
                                              "css":""
                                            },  
                                            { "id":"2D",
                                              "img":"",
                                              "html":"<br>3",
                                              "css":""
                                            },  
                                            { "id":"2E",
                                              "img":"",
                                              "html":"<br>4",
                                              "css":""
                                            },  
                                            { "id":"2F",
                                              "img":"",
                                              "html":"<br>5",
                                              "css":""
                                            },  
                                            { "id":"2G",
                                              "img":"",
                                              "html":"<br>6",
                                              "css":""
                                            }
                                          ]
                                },
                                {
                                  "id":3,  
                                  "property1":"Outer ng-repeat",
                                  "inner":[
                                            { "id":"3A",
                                              "img":"",
                                              "html":"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                              "css":""
                                            },
                                            { "id":"3B",
                                              "img":"",
                                              "html":"<br>1",
                                              "css":""
                                            },  
                                            { "id":"3C",
                                              "img":"",
                                              "html":"<br>2",
                                              "css":""
                                            },  
                                            { "id":"3D",
                                              "img":"",
                                              "html":"<br>3",
                                              "css":""
                                            },  
                                            { "id":"3E",
                                              "img":"",
                                              "html":"<br>4",
                                              "css":""
                                            },  
                                            { "id":"3F",
                                              "img":"",
                                              "html":"<br>5",
                                              "css":""
                                            },  
                                            { "id":"3G",
                                              "img":"",
                                              "html":"<br>6",
                                              "css":""
                                            }
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
                  
//                  window.setTimeout(function(){basic.highlight();},200);
                }
                
                basic.testFunc = function(index){
                  basic.innerIndex = index;
                  console.log("Inner has made it back to the controller and the inner index is: " + index);
                  
                }
                
                
                basic.highlight = function(thmbID){
                  
                  var outerLength = basic.outer.length;
                  var innerLength = basic.outer[basic.outerIndex].inner.length;
                  console.log("outerLength is: " + outerLength + "\ninnerLength is: " + innerLength)
                  console.log("basic.outerIndex is: " + basic.outerIndex + "\nbasic.innerIndex is: " + basic.innerIndex)
                  
                  console.log("thmbID is: " + thmbID)
                  //outer[basic.outerIndex].inner[basic.innerIndex] = "<br>WTF";
                  if(thmbID === "2A"){
                    outer[0].property1 = "Holely Molely";
                    outer[0].inner[2].html = "<br>Who Dat!";
                  }  
                  
                  update();
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
                   
                  // window.setTimeout(function(){console.log("in setTimeout"); console.log("outer is: " + JSON.stringify(outer)); basic.outer = angular.copy(outer);},200);    
                }  
                  
                var update = function(){  
                  console.log("In update");
                  console.log("outer is: " + JSON.stringify(outer[0]) + "\n" + JSON.stringify(outer[1])+ "\n" + JSON.stringify(outer[2]));
//                  basic.outer[0].inner = angular.copy(outer[0].inner);
//                  basic.outer[1].inner = angular.copy(outer[1].inner);
//                  basic.outer[2].inner = angular.copy(outer[2].inner);
                  basic.outer = angular.copy(outer);
                }  
                  
                  
                  
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
                  
                 
                  
                
                
            
                //basic.outer[1].inner[4] = "<span class='highlight1'><br>WTF</br>";
                
            
            
            }]);
                
            
 