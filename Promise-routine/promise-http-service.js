angular.module("PromiseRoutine")
  .factory('PromDat', ['$http', function($http){
  //.factory('PromDat', [function(){
   
    return  {
      
      getPromiseData1:       function(promiseDataRef){
                            
                              $http.get('promise-routine1.json', { cache: true }).then(function(resp) {
                              //$http.get('https://www.tarptiedown.com/data_common/json-client-css.json', { cache: true }).then(function(resp) {    
                                        console.log("Data is: " + JSON.stringify(resp.data));
                                        //console.log("Data is: " + resp.data.promDat3);
                                        return promiseDataRef(resp.data);
                              },
                              function (resp){
                                console.error("ERROR! ERROR! is: " + JSON.stringify(resp));
                              });
                            },
                          
      test:                 function(){
                                return "At the HTTP service";
                            },
                          
      getPromiseData2:      function(promiseDataRef2){
        
                              var returnDat1 = "";
                              var returnDat2 = "";
                              var returnDat3 = "";
                              $http.get('promise-routine3.json', { cache: true })
                                      .then(function(resp1) { console.log(resp1.data.promDatFile3Key3); promiseDataRef2(resp1); return resp1.data.promDatFile3Key3}, function(ErrorResp1){console.error("ERROR! ERROR! is: " + ErrorResp1.data + "\n\n\n" + JSON.stringify(ErrorResp1));})
                                      .then(function(resp2) {console.log("In the second 'then' and passed in is: " + resp2)}, function(ErrorResp2){console.error("ERROR! ERROR! is: " + JSON.stringify(ErrorResp2));})
//                                    .then(function(resp2) {}, function(ErrorResp2){console.error("ERROR! ERROR! is: " + JSON.stringify(ErrorResp2));})
//                                      .then(function(resp1) {}, function(ErrorResp3){console.error("ERROR! ERROR! is: " + JSON.stringify(ErrorResp3));});
                                    
                                    
                              }  
      
      
      
      
    }
    
var ErrorReport = 
  {
    "data":"<!doctype html><html><head><title>404 Not Found</title><style>\nbody { background-color: #fcfcfc; color: #333333; margin: 0; padding:0; }\nh1 { font-size: 1.5em; font-weight: normal; background-color: #9999cc; min-height:2em; line-height:2em; border-bottom: 1px inset black; margin: 0; }\nh1, p { padding-left: 10px; }\ncode.url { background-color: #eeeeee; font-family:monospace; padding:0 2px;}\n</style>\n</head><body><h1>Not Found</h1><p>The requested resource <code class=\"url\">/Promise-routine/promise-routineA.json</code> was not found on this server.</p></body></html>",
    "status":404,
    "config":{
                "method":"GET",
                "transformRequest":[null],
                "transformResponse":[null],
                "jsonpCallbackParam":"callback",
                "cache":true,
                "url":"promise-routineA.json",
                "headers":{
                            "Accept":"application/json, text/plain, */*"
                          }
              },
              "statusText":"Not Found"
  }
    
    
    
    
    
  }])

//                                    $http.get('promise-routine1.json', { cache: true })
//                                      .then(function(resp1) {}, function(ErrorResp1){console.error("ERROR! ERROR! is: " + JSON.stringify(ErrorResp1));})
//                                      .then(function(resp1) {}, function(ErrorResp1){console.error("ERROR! ERROR! is: " + JSON.stringify(ErrorResp1));})
//                                      .then(function(resp1) {}, function(ErrorResp1){console.error("ERROR! ERROR! is: " + JSON.stringify(ErrorResp1));})  
                                    
                            
//$http.get('promise-routine1.json', { cache: true })
//                                      .then(function(resp1) {}, function(){})
//                                      .then(function(resp1) {}, function(){})
//                                      .then(function(resp1) {}, function(){});




//  return $http.get('promise-routine2.json', { cache: true })
//                                      .then(function(resp2) {
//                                          
//                                      return $http.get('promise-routine2.json', { cache: true })
//                                      .then(function(resp3) {console.log("WTF")},
//                                function (resp){
//                                  console.error("ERROR! ERROR! is: " + JSON.stringify(resp));
//                                });
//                                },
//                                function (resp){
//                                  console.error("ERROR! ERROR! is: " + JSON.stringify(resp));
//                                }




//console.log("Data is: " + JSON.stringify(resp.data));
//console.log("Data is: " + resp.data.promDat3);
//console.log("Data is: " + JSON.stringify(resp.data));
//console.log("Data is: " + resp.data.promDat3);


