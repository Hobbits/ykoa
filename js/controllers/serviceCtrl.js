app.controller("serviceCtrl",["$scope","AJAX","noticeInfo",function(D,C,A){D.IMAGE_ROOT=IMAGE_ROOT;var B=C({url:APP_ACTION.SERVICE,cache:true,bCall:function(){D.$emit("LOAD")},sCall:function(E){console.log(E);if(E.status=="ok"&&!angular.equals([],E.result)){D.services=E.result}},cCall:function(){D.$emit("UNLOAD")},eCall:function(){A.show({message:"获取信息列表失败！"})}});D.$on("$destroy",function(){B.resolve()})}]);