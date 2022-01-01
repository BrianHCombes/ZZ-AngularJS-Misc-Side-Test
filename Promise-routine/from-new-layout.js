//***********************************************************************************************************************************************************                  
//                  // Promise
//                  function getInsetValues(){
//                    return new Promise(function(resolve,reject){
//                      var tnTableBoxHeightPromiseVar = "height:" + deviceInnerHeight * lr.h("",1374,0.95,376,0.90) + "px";
//                      var tnOuterWidthNumOnly = lr.r("",1.176,0,ratioRange1,pixelRange2,"",ratioRange1,pixelRange2,ratioRange2,pixelRange3 );  
//                      if(tnOuterWidthNumOnly < 0){tnOuterWidthNumOnly = 0};
//                      var tnOuterWidth = "width:" + outerWidthNumOnly + "px";
//                      var tnTitleTextFontSize = lr.r("",1.176,1.2,0.321,0.65);
//                      var tnThumbNailImageWidth = lr.w("",1169,95,320,57);
//                      
//                      var PropertyObject1 = {
//                                              "tnTableBoxHeight" :    tnTableBoxHeightPromiseVar,
//                                              "tnOuterWidthNumOnly":  tnOuterWidthNumOnly,
//                                              "tnOuterWidth":         tnOuterWidth,
//                                              "tnTitleTextFontSize":  tnTitleTextFontSize,
//                                              "tnThumbNailImageWidth":tnThumbNailImageWidth
//                      } 
//                      resolve(PropertyObject1);
//                    })
//                  }
//                  
//                  var getInsetValuesToStart = async function(){  
//                      
//                      var thumbNailTableBoxHeightPromise = await getInsetValues();
//                      var placeHolder_thumbNailTableBoxHeight = thumbNailTableBoxHeightPromise.tnTableBoxHeight;
//                      var placeHolder_outerWidthNumOnly = thumbNailTableBoxHeightPromise.tnOuterWidthNumOnly;
//                      var placeHolder_outerWidth = thumbNailTableBoxHeightPromise.tnOuterWidth;
//                      var placeHolder_thumbNailTitleTextFontSize = thumbNailTableBoxHeightPromise.tnTitleTextFontSize;
//                      var placeHolder_thumbNailImageWidth = thumbNailTableBoxHeightPromise.tnThumbNailImageWidth
//                          placeHolder_thumbNailImageWidth = lr.r("width:px",1.176,placeHolder_thumbNailImageWidth,0.322,57);
////                      console.log("returned placeHolder_thumbNailTableBoxHeight is: " + placeHolder_thumbNailTableBoxHeight);
////                      console.log("returned placeHolder_outerWidthNumOnly is: " + placeHolder_outerWidthNumOnly);
////                      console.log("returned placeHolder_outerWidth is: " + placeHolder_outerWidth);
////                      console.log("returned placeHolder_thumbNailTitleTextFontSize is: " + placeHolder_thumbNailTitleTextFontSize);
////                      console.log("returned placeHolder_thumbNailImageWidth is: " + placeHolder_thumbNailImageWidth);
//                      
//                  };
//                  getInsetValuesToStart();
//***********************************************************************************************************************************************************        