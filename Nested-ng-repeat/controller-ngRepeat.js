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
                                            "css":"background-color:cyan"
                                          },
                                          { "id":"thmb00",
                                            "img":"",
                                            "html":"<br>1",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb01",
                                            "img":"",
                                            "html":"<br>2",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb02",
                                            "img":"",
                                            "html":"<br>3",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb03",
                                            "img":"",
                                            "html":"<br>4",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb04",
                                            "img":"",
                                            "html":"<br>5",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb05",
                                            "img":"",
                                            "html":"<br>6",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb05A",
                                            "img":"",
                                            "html":"<br>6A",
                                            "css":"background-color:yellow"
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
                                            "css":"background-color:yellow"
                                          },
                                          { "id":"thmb07",
                                            "img":"",
                                            "html":"<br>1",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb08",
                                            "img":"",
                                            "html":"<br>2",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb09",
                                            "img":"",
                                            "html":"<br>3",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb10",
                                            "img":"",
                                            "html":"<br>4",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb11",
                                            "img":"",
                                            "html":"<br>5",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb12",
                                            "img":"",
                                            "html":"<br>6",
                                            "css":"background-color:yellow"
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
                                            "css":"background-color:yellow"
                                          },
                                          { "id":"thmb14",
                                            "img":"",
                                            "html":"<br>1",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb15",
                                            "img":"",
                                            "html":"<br>2",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb16",
                                            "img":"",
                                            "html":"<br>3",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb17",
                                            "img":"",
                                            "html":"<br>4",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb18",
                                            "img":"",
                                            "html":"<br>5",
                                            "css":"background-color:yellow"
                                          },  
                                          { "id":"thmb19",
                                            "img":"",
                                            "html":"<br>6",
                                            "css":"background-color:yellow"
                                          }
                                        ]
                              }
                            ];  
                              
              basic.outer = angular.copy(outer);    
              
              // Build ID array
              var idArray = [];
              for(var i = 0; i < outer.length; i++){
                for(var j = 0; j < outer[i].inner.length; j++){
                  idArray.push(outer[i].inner[j].id);
                }
              }
              console.log("idArray is: " + idArray);
                
              basic.highlight = function(thmbID){
                var idArrayIncrement = 0;
                for(var i=0; i<outer.length; i++){
                  for(var j=0; j<outer[i].inner.length; j++){
                    if(thmbID === idArray[idArrayIncrement]){
                      outer[i].inner[j].css = "background-color:cyan;"
                    }
                    else{
                      outer[i].inner[j].css = "background-color:yellow;"
                    }
                    idArrayIncrement+=1;
                  }
                }
                basic.outer = angular.copy(outer);
              }  
//            console.log("outer is: " + JSON.stringify(outer[0]) + "\n" + JSON.stringify(outer[1])+ "\n" + JSON.stringify(outer[2]));
            }]);
                
            
 