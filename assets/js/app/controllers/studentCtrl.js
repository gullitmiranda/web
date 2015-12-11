myApp.controller('studentCtrl', [
    '$scope', 'studentsService', 'studentRes', 'lodash', '$routeParams', '$rootScope',
    function ($scope, studentsService, studentRes, lodash, $routeParams, $rootScope) {
        $rootScope.page = 'home';
        $scope.student = studentsService;
        // Get Users
        studentRes.fetch({id:$routeParams.id}).$promise.then(
            function (data) {
                //$scope.students.list = data;
                //userService.name = lodash.first(data).full_name;

                // Prepare name
                $scope.student.name = data.full_name;
                $scope.student.school = data.school;
                $scope.student.grader = data.grader;
                $scope.student.score = data.score;

                $scope.student =
                {
                    id: data.id,
                    name: $scope.student.name,
                    school: $scope.student.school,
                    grader: $scope.student.grader,
                    score: $scope.student.score
                };
            },
            function (error) {
                console.log(error.status, error.statusText);
            }
        );

    }
]);