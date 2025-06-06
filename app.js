angular.module('blog', []);

angular.module('blog').controller('Rest', function ($scope, $http) {

  $scope.modoDetalhe = false;
  $scope.postSelecionado = null;

  $http.get('https://api-fake-blog.onrender.com/postagens')
    .success(function (data) {
     
      data.forEach(function (post) {
        if (post.thumbImage.includes("221223090506-01-bugatti-chiron-profilee.jpg")) {
          post.thumbImage = "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/12/04-BUGATTI_CHIRON-Profilee.jpg";
        }
      });

      $scope.publicacoes = data;
      
    });

    $scope.renderizarConteudo = function(index) {
      $scope.postSelecionado = $scope.publicacoes[index];
      $scope.modoDetalhe = true;
    };

    $scope.voltarParaLista = function() {
      $scope.modoDetalhe = false;
      $scope.postSelecionado = null;
    };
});
