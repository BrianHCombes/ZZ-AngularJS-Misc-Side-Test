 angular.module('BasicSetup', ['ngSanitize'])
        
            .controller('basicCtrl', ['$log', '$scope', function($log, $scope) {
               
                var basic = this;
                basic.basicVar1 = "YES! This is from the basicCtrl Controller";

                var outer = [
                                {
                                  "id":1,  
                                  "property1":"Outer ng-repeat",
                                  "inner":[
                                            { "id":"intro",
                                              "img":"",
                                              "html":"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                              "css":""
                                            },
                                            { "id":"thmb00",
                                              "img":"",
                                              "html":"<br>1",
                                              "css":""
                                            },  
                                            { "id":"thmb01",
                                              "img":"",
                                              "html":"<br>2",
                                              "css":""
                                            },  
                                            { "id":"thmb02",
                                              "img":"",
                                              "html":"<br>3",
                                              "css":""
                                            },  
                                            { "id":"thmb03",
                                              "img":"",
                                              "html":"<br>4",
                                              "css":""
                                            },  
                                            { "id":"thmb04",
                                              "img":"",
                                              "html":"<br>5",
                                              "css":""
                                            },  
                                            { "id":"thmb05",
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
                                            { "id":"thmb06",
                                              "img":"",
                                              "html":"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                              "css":""
                                            },
                                            { "id":"thmb07",
                                              "img":"",
                                              "html":"<br>1",
                                              "css":""
                                            },  
                                            { "id":"thmb08",
                                              "img":"",
                                              "html":"<br>2",
                                              "css":""
                                            },  
                                            { "id":"thmb09",
                                              "img":"",
                                              "html":"<br>3",
                                              "css":""
                                            },  
                                            { "id":"thmb10",
                                              "img":"",
                                              "html":"<br>4",
                                              "css":""
                                            },  
                                            { "id":"thmb11",
                                              "img":"",
                                              "html":"<br>5",
                                              "css":""
                                            },  
                                            { "id":"thmb12",
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
                                            { "id":"thmb13",
                                              "img":"",
                                              "html":"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner ng-repeat<br><img src='image.png' class='style1'>",
                                              "css":""
                                            },
                                            { "id":"thmb14",
                                              "img":"",
                                              "html":"<br>1",
                                              "css":""
                                            },  
                                            { "id":"thmb15",
                                              "img":"",
                                              "html":"<br>2",
                                              "css":""
                                            },  
                                            { "id":"thmb16",
                                              "img":"",
                                              "html":"<br>3",
                                              "css":""
                                            },  
                                            { "id":"thmb17",
                                              "img":"",
                                              "html":"<br>4",
                                              "css":""
                                            },  
                                            { "id":"thmb18",
                                              "img":"",
                                              "html":"<br>5",
                                              "css":""
                                            },  
                                            { "id":"thmb19",
                                              "img":"",
                                              "html":"<br>6",
                                              "css":""
                                            }
                                          ]
                                }
                              ];  
                              
              basic.outer = angular.copy(outer);    
              
              
              var idArray = [];
              for(var i = 0; i < outer.length; i++){
                for(var j = 0; j < outer[i].inner.length; j++){
                  idArray.push(outer[i].inner[j].id);
                }
              }
              console.log("idArray is: " + idArray);
                
                //basic.testArray = [1,2,3,4];              
                
                basic.outerIndex = 0;
                basic.innerIndex = 0;
//                basic.outerTestFunc = function(index){
//                  basic.outerIndex = index;
//                  console.log("Outer has made it back to the controller and the outer index is: " + index);
//                  
////                  window.setTimeout(function(){basic.highlight();},200);
//                }
                
//                basic.testFunc = function(index){
//                  basic.innerIndex = index;
//                  console.log("Inner has made it back to the controller and the inner index is: " + index);
//                  
//                }
                
                
                basic.highlight = function(thmbID){
                  
                  var outerLength = basic.outer.length;
                  var innerLength = basic.outer[basic.outerIndex].inner.length;
                  console.log("outerLength is: " + outerLength + "\ninnerLength is: " + innerLength)
                  console.log("basic.outerIndex is: " + basic.outerIndex + "\nbasic.innerIndex is: " + basic.innerIndex)
                  
                  console.log("thmbID is: " + thmbID)
                  //outer[basic.outerIndex].inner[basic.innerIndex] = "<br>WTF";
                  if(thmbID === "thmb12"){
                    outer[0].property1 = "Holely Molely";
                    outer[0].inner[2].html = "<br>Who Dat!";
                  }  
                  
                  for(var i = 0; i < idArray.length; i++){
                    if(thmbID === idArray[i]){
                      console.log("thmbID is: " + thmbID);
                    }
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
                
            
 