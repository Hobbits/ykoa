app.controller("casePicCtrl",["$scope","AJAX","$routeParams","$timeout","noticeInfo",function(E,D,A,F,B){var C={};E.$on("$pageNaved",(function(){var G=false;return function(){if(G){return}G=true;C=D({url:APP_ACTION.CASEIMG+A.id,cache:true,sCall:function(J){if(J.status=="ok"){var I=J.result;var H=I.map(function(K){return IMAGE_ROOT+K});E.pictures=H;E.caseDescription=J.remark;F(function(){var K=new CardView("#wrapper",{effect:"slide",direction:"h"})},500)}else{B.show()}},eCall:function(){B.show()}});console.log("ajax1",C);document.getElementById("morePic").addEventListener("touchmove",function(H){H.preventDefault()},false)}})());E.$on("$destroy",function(){if(C){C.resolve()}})}]);