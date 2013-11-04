app.controller("newsDetailCtrl",['$scope','$routeParams','$resource',function($scope,$routeParams,$resource){
        var aid=$routeParams['aid'];
        var newsDt=$resource(APP_ACTION['NEWSDETAIL']+':aid',
            {'aid':aid});

    $scope.detail={};
        $scope.detail=newsDt.get(function(data){
            if(data.content){
                $scope.detail.content=data.content;
            }
            if(data.picture){
                $scope.detail.picture=IMAGE_ROOT+data.picture;
            }else{
                $scope.detail.picture=null;
            };



        },function(error){
            $scope.detail.title=":( 数据传输错误";
        });


    $scope.newBro=function(url){
        var tt=$scope.detail.title || null;

        try{
        window.plugins.socialsharing.share(tt,tt, $scope.detail.picture, url);
        }catch(e){
            alert('分享模块加载失败');
        }
    }



}])