app.controller("caseCtrl",["$scope","AJAX","$routeParams","headerChanger","noticeInfo",function(E,D,A,F,B){E.IMAGE_ROOT=IMAGE_ROOT;var C=D({url:APP_ACTION.CASE,cache:true,sCall:function(G){console.log(G);if(G.status=="ok"&&!angular.equals([],G.result)){E.caseCategories=G.result;E.getCaseCategory(G.result[0])}},eCall:function(){B.show()}});E.getCaseCategory=function(G){E.caseCategoryName=G.name;$(".dropdown-menu").hide();var H=D({url:APP_ACTION.CASELIST+G.id,cache:true,bCall:function(){E.$emit("LOAD")},sCall:function(I){console.log(I);if(I.status=="ok"){E.cases=I.result}},cCall:function(){E.$emit("UNLOAD")},eCall:function(){B.show()}})};E.toggleDropdownMenu=function(){$(".dropdown-menu").toggle()};E.$on("$destroy",function(){C.resolve()})}]);