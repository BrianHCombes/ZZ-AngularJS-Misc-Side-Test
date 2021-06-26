angular.module("ModuleConfigRoutine")
  .factory('ModuleConfigFactory', [function(){
   
    return  {
                          
      getModuleConfigData:               function(){
                              return "And this is from the the factory service called ModuleConfigFactory.\n It is a in a separate file which is the point of this side test.";
                          }
    }
  }])