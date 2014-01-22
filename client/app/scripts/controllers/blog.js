'use strict';

angular.module('clientApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.posts = [];
    $scope.posts.push({
      title: 'Hola Mundo',
      author: 'Manuel Ayaso',
      date: new Date(),
      content: 'Mi primera entrada en el blog, hacía mucho tiempo que quería haber escrito un blog pero nunca me había atrevido a hacerlo, este es el momento!',
      comments: []
    });
  });
