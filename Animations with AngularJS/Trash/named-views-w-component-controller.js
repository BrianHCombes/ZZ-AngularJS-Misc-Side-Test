 angular.module('NamedViewsComponent')
        
            .controller('rootCtrl', ['$log', '$scope', function($log, $scope) {
               
                var receive = this;
                $scope.rootVar1 = "YES! This is from the root Controller";
                // receive.rootVar1 = "This is from the root Controller";
            
            }]);
                
/*                 
            .controller('secondCtrl', [function() {
                var secondVar = this;
                secondVar.secondCtrlValue = "Yes! this is from the second controller";
            }])


            .controller('view2Ctrl', [ '$scope', function($scope){
                $scope.view2Var = 'This is from the view2Ctrl controller which is a third controller but is accessed via the view called \"view2\"';
             }])
         
 
            .controller('view3Ctrl', ['$scope', function($scope) {
                $scope.view3Var =  'This is the view3Var $scope variable';

            }]);
*/
 
 