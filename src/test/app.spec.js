describe("testing_Angular_Ctrl", function(){
    var $rootScope,
        $scope,
        controller;

    beforeEach(function(){
        module("angulartest");

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("testingAngularCtrl", {$scope: $scope})
        });
    });

    describe("Inicialization", function(){
        it("should set the title", function(){
            expect($scope.title).toEqual('Testing AngularJS App');
        })
    });

    // describe("Inicialization_error", function(){
    //     it("should set the title", function(){
    //         expect($scope.title).toEqual('123123123');
    //     })
    // });

});