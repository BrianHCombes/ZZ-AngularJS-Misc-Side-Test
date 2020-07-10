angular.module('NamedViewsComponent', ['ui.router'])
    
        .controller('viewsCTRL', ['$state', function($state){
            
            var thisCtrl = this;
    
            thisCtrl.ctrTest = "From the controller";
                
                
        }])
            
            
       
   
