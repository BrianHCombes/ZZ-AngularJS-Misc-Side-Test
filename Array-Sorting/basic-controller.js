 angular.module('BasicSetup', [])
        
            .controller('basicCtrl', ['$log', '$scope', function($log, $scope) {
               
                var basic = this;
                
                basic.thumbNails =  [ 
                                      { "id":"view00",
                                        "view":"view00",
                                        "thumb":"thumb00.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view01",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view01b",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view01c",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view01d",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view01e",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"lineBreakLandscape",
                                        "view":"",
                                        "thumb":"",
                                        "thumbCSSportrait":"display:none",
                                        "thumbCSSlandscape":"height:0px; opacity:0",
                                        "css":""
                                      },
                                      { "id":"view02",
                                        "view":"view02",
                                        "thumb":"thumb02.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view00",
                                        "view":"view00",
                                        "thumb":"thumb00.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"lineBreakPortrait",
                                        "view":"",
                                        "thumb":"",
                                        "thumbCSSportrait":"height:0px; opacity:0",
                                        "thumbCSSlandscape":"display:none",
                                        "css":""
                                      },
                                      { "id":"view01",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view01b",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view01c",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view01d",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view01e",
                                        "view":"view01",
                                        "thumb":"thumb01.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"lineBreakLandscape",
                                        "view":"",
                                        "thumb":"",
                                        "thumbCSSportrait":"display:none",
                                        "thumbCSSlandscape":"height:0px; opacity:0",
                                        "css":""
                                      },
                                      { "id":"view02",
                                        "view":"view02",
                                        "thumb":"thumb02.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"lineBreakPortrait",
                                        "view":"",
                                        "thumb":"",
                                        "thumbCSSportrait":"height:0px; opacity:0",
                                        "thumbCSSlandscape":"display:none",
                                        "css":""
                                      },
                                      { "id":"view05",
                                        "view":"view05",
                                        "thumb":"thumb05.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view05a",
                                        "view":"view05",
                                        "thumb":"thumb05.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view05b",
                                        "view":"view05",
                                        "thumb":"thumb05.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view05c",
                                        "view":"view05",
                                        "thumb":"thumb05.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view05d",
                                        "view":"view05",
                                        "thumb":"thumb05.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"lineBreakPortrait",
                                        "view":"",
                                        "thumb":"",
                                        "thumbCSSportrait":"height:0px; opacity:0",
                                        "thumbCSSlandscape":"display:none",
                                        "css":""
                                      },
                                      { "id":"view05e",
                                        "view":"view05",
                                        "thumb":"thumb05.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view05f",
                                        "view":"view05",
                                        "thumb":"thumb05.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view05g",
                                        "view":"view05",
                                        "thumb":"thumb05.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      },
                                      { "id":"view06",
                                        "view":"view06",
                                        "thumb":"thumb06.jpg",
                                        "thumbCSSportrait":"display:inline-block",
                                        "thumbCSSlandscape":"display:inline-block; padding:0 2px;",
                                        "css":""
                                      }
                                    ];
                    
                    var thumbs = basic.thumbNails;
                    var portraitLineBreak = 0;
                    var thumbCountIncrement = 0;
                    var thumbCountPerRow = [];
                    var LastLineBreakPortraitElement= 0;
                    
                    for(var i = 0; i < thumbs.length; i++){
                      
                      if(thumbs[i].id === "lineBreakPortrait"){
                        portraitLineBreak++;
                        thumbCountPerRow.push(thumbCountIncrement);
                        thumbCountIncrement = 0;
                        LastLineBreakPortraitElement = i;
                      } else
                      if(thumbs[i].id != "lineBreakLandscape")
                      {  
                        thumbCountIncrement++;
                      }
                    };
                    
                    thumbCountIncrement = 0;
                    for(var i = LastLineBreakPortraitElement+1; i < thumbs.length; i++){
                      if(thumbs[i].id != "lineBreakLandscape")
                      {  
                        thumbCountIncrement++;
                      }
                      console.log("thumbCountIncrement is: " + thumbCountIncrement);
                      
                    }
                    thumbCountPerRow.push(thumbCountIncrement);
                    
                    console.log("portraitLineBreak is: " + portraitLineBreak);
                    console.log("thumbCountPerRow is: " + thumbCountPerRow);
                    console.log("LastLineBreakPortraitElement is: " + LastLineBreakPortraitElement);
                    console.log("Thumbnail array length is: " + thumbs.length);
                    
                    
                    
                    thumbCountPerRow.sort(function(a, b){return b-a});
                    
                    
                    basic.metaData = thumbCountPerRow;
                    
                    basic.longestRow = thumbCountPerRow[0];
                    
                    
                    
                    
                    
            }]);
                
            
 