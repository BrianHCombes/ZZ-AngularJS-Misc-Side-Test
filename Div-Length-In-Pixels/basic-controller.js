 angular.module('BasicSetup', [])
        
            .controller('basicCtrl', ['$log', '$scope', '$window', function($log, $scope, $window) {
               
//                https://www.w3schools.com/jsref/prop_element_clientheight.asp
//                https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
//                https://www.w3schools.com/cssref/pr_text_white-space.asp
//                https://stackoverflow.com/questions/35095656/getelementbyid-in-angularjs 
                
                  var basic = this;
                  
                  document.getElementById("lengthTest1").style = "color:blue; background-color:yellow";
                  var length = document.getElementById("lengthTest1");
                  var report = length.clientWidth;
                  console.log("Div width is: " + report);
                  
                  document.getElementById("lengthTest2").style = "color:blue; background-color:cyan";
                  var length2 = document.getElementById("lengthTest2");
                  var report2 = length2.clientWidth;
                  console.log("td width is: " + report2);
            
                  var length3 = document.getElementById("lengthTest3");
                  console.log("length3: " + length3.clientWidth);
                  
                  console.log("length4: " + document.getElementById("lengthTest4").clientWidth);
                  
                  console.log("length5: " + document.getElementById("lengthTest5").clientWidth);
                  
                  basic.elementArray1 =  [
                                          {
                                            "id":"element1",
                                            "text":"WhoDat_01"
                                          },
                                          {
                                            "id":"element2",
                                            "text":"WhoDat_02 WhoDat_02"
                                          },
                                          {
                                            "id":"element3",
                                            "text":"WhoDat_03 WhoDat_03 WhoDat_03"
                                          },
                                          {
                                            "id":"element4",
                                            "text":"WhoDat_04 WhoDat_04 WhoDat_04 WhoDat_04"
                                          }
                                        ];
                  
                  $window.setTimeout(function(){console.log("element1: " + document.getElementById("element1").clientWidth);},0);
                  $window.setTimeout(function(){console.log("element2: " + document.getElementById("element2").clientWidth);},0);
                  $window.setTimeout(function(){console.log("element3: " + document.getElementById("element3").clientWidth);},0);                      
                  $window.setTimeout(function(){console.log("element4: " + document.getElementById("element4").clientWidth);},0);
                  
                  
                  
                  $window.setTimeout(function(){
                    
                      var total = 0;
                      for(var i=0; i < basic.elementArray1.length; i++){

                          console.log(basic.elementArray1[i].id + " is: " + document.getElementById(basic.elementArray1[i].id).clientWidth);
                          total += document.getElementById(basic.elementArray1[i].id).clientWidth;
                      }
                      console.log("total is: " + total);
                  },50);
                  
                  
//***********************************************************************************************************************************************************                  
/*Table element length totaling               */
//***********************************************************************************************************************************************************
                  basic.elementArray2 =  [
                                          {
                                            "id":"element1b",
                                            "text":"WhoDat_01"
                                          },
                                          {
                                            "id":"element2b",
                                            "text":"WhoDat_02 WhoDat_02"
                                          },
                                          {
                                            "id":"element3b",
                                            "text":"WhoDat_03 WhoDat_03 WhoDat_03"
                                          },
                                          {
                                            "id":"element4b",
                                            "text":"WhoDat_04 WhoDat_04 WhoDat_04 WhoDat_04"
                                          }
                                        ];
                                        
                  $window.setTimeout(function(){
                      var total = 0;
                      for(var i=0; i < basic.elementArray2.length; i++){
                          console.log(basic.elementArray2[i].id + " is: " + document.getElementById(basic.elementArray2[i].id).clientWidth);
                          total += document.getElementById(basic.elementArray2[i].id).clientWidth;
                      }
                      console.log("total is: " + total);
                  },50);
                  
                  
                  
                  
                  
                  
                  
                  
            
            }]);
                
            
 