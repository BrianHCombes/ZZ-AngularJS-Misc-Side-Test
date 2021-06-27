angular.module("PromiseRoutine")
  .factory('PromDat', ['$http', function($http){
  //.factory('PromDat', [function(){
   
    return  {
      
      getPromiseData:       function(promiseDataRef){
                            
                              $http.get('promise-routine.json', { cache: true }).then(function(resp) {
                              //$http.get('https://www.tarptiedown.com/data_common/json-client-css.json', { cache: true }).then(function(resp) {    
                                        console.log("Data is: " + JSON.stringify(resp.data));
                                        console.log("Data is: " + resp.data.name);
                                        return promiseDataRef(resp.data);
                              },
                              function (resp){
                                console.error("ERROR! ERROR! is: " + JSON.stringify(resp));
                              });
                            },
                          
      test:               function(){
                              return "At the HTTP service";
                          }
      
    }
  }])