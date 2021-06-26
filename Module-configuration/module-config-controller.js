 angular.module('ModuleConfigRoutine', [])
        
            .controller('moduleConfigCtrl', ['$log', '$scope',  'ModuleConfigFactory', function($log, $scope, ModuleConfigFactory) {
               
                var modConfig = this;
                modConfig.modConfigVar1 = "YES! This is from the moduleConfigCtrl Controller";
                
                var moduleConfigData = "WTF";
                
                moduleConfigData = ModuleConfigFactory.getModuleConfigData();
                
                modConfig.modConfigVar2 = moduleConfigData;
                
                console.log(moduleConfigData)
            
            }])
                
            
 