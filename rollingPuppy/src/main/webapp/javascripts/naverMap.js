var naverMap = document.getElementById("naver_map"); 
var oCenterPoint = new nhn.api.map.LatLng(37.5010226, 127.0396037);
 nhn.api.map.setDefaultPoint('LatLng');
 oMap = new nhn.api.map.Map(naverMap, {
       point : oCenterPoint,
 zoom : 10, // - 초기 줌 레벨은 10으로 둔다.
 enableWheelZoom : false,
 enableDragPan : true,
 enableDblClickZoom : false,
 mapMode : 0,
 activateTrafficMap : false,
 activateBicycleMap : false,
 minMaxLevel : [ 1, 14 ],
 size : new nhn.api.map.Size(500, 400)
});
 var markerCount = 0;
 
 var oSize = new nhn.api.map.Size(28, 37);
 var oOffset = new nhn.api.map.Size(14, 37);
 var oIcon = new nhn.api.map.Icon('http://www.apkdad.com/wp-content/uploads/2013/02/LINE-Card-Icon.png', oSize, oOffset);
 //마커를 네이버의 기본마커가 아닌 우리가 만드는 마커로 바꿀 수 있는 부분. 
 var mapInfoTestWindow = new nhn.api.map.InfoWindow(); // - info window 생성. 마커를 눌렀을 때 뜨는 창. html코드만 삽입 가
 
 mapInfoTestWindow.setVisible(false); // - infowindow 표시 여부 지정.
 oMap.addOverlay(mapInfoTestWindow);     // - 지도에 추가.     
 
 var oLabel = new nhn.api.map.MarkerLabel(); // - 마커 라벨 선언.
 oMap.addOverlay(oLabel); // - 마커 라벨 지도에 추가. 기본은 라벨이 보이지 않는 상태로 추가됨.

 mapInfoTestWindow.attach('changeVisible', function(oCustomEvent) {
       if (oCustomEvent.visible) {
               oLabel.setVisible(false);
       }
});
 
 
 oMap.attach('mouseenter', function(oCustomEvent) {
       var oTarget = oCustomEvent.target;
 // 마커위에 마우스 올라간거면
 if (oTarget instanceof nhn.api.map.Marker) {
       var oMarker = oTarget;
 oLabel.setVisible(true, oMarker); // - 특정 마커를 지정하여 해당 마커의 title을 보여준다.
}
});
 
 oMap.attach('mouseleave', function(oCustomEvent) {
       var oTarget = oCustomEvent.target;
 // 마커위에서 마우스 나간거면
 if (oTarget instanceof nhn.api.map.Marker) {
       oLabel.setVisible(false);
}
});
 
 oMap.attach('click', function(oCustomEvent) {
       var oPoint = oCustomEvent.point;
       var oTarget = oCustomEvent.target;
       mapInfoTestWindow.setVisible(false);
 // 마커 클릭하면
 if (oTarget instanceof nhn.api.map.Marker) {
 // 겹침 마커 클릭한거면
 if (oCustomEvent.clickCoveredMarker) {
       return;
}
 // - InfoWindow 에 들어갈 내용은 setContent 로 자유롭게 넣을 수 있습니다. 외부 css를 이용할 수 있으며, 
 // - 외부 css에 선언된 class를 이용하면 해당 class의 스타일을 바로 적용할 수 있습니다.
 // - 단, DIV 의 position style 은 absolute 가 되면 안되며, 
 // - absolute 의 경우 autoPosition 이 동작하지 않습니다. 
 mapInfoTestWindow.setContent('<div style="border-top:1px solid; border-bottom:2px groove black; border-left:1px solid; border-right:2px groove black;margin-bottom:1px;color:black;background-color:white; width:auto; height:auto;"><table style="width:300px;">'+
       '<tr>'+'<td>Jill</td>'+'<td>Smith</td>'+'<td>50</td>'+
       '</tr>'+'<tr>'+'<td>Eve</td>'+'<td>Jackson</td>'+'<td>94</td>'+
 '</tr>'+'</table></div>'); //여기가 info window의 html코
 mapInfoTestWindow.setPoint(oTarget.getPoint());
 mapInfoTestWindow.setVisible(true);
 mapInfoTestWindow.setPosition({right : 15, top : 30});
 mapInfoTestWindow.autoPosition();
 return;
}
var oMarker = new nhn.api.map.Marker(oIcon, { title : '마커 : ' + oPoint.toString() });
oMarker.setPoint(oPoint);
oMap.addOverlay(oMarker);
});
 