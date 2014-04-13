<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Main Page</title>
	<link type="text/css" rel="stylesheet" href="/stylesheets/reset.css">
	<link type="text/css" rel="stylesheet" href="/stylesheets/default.css">
	<link type="text/css" rel="stylesheet" href="/stylesheets/main.css">
	<script type="text/javascript" src="http://openapi.map.naver.com/openapi/naverMap.naver?ver=2.0&key=f154abb26c9c79ed5a4a25d000a9349c"></script>
</head>

<body>

<!--페이지 전체를 감싸는 영역-->
<div id="wrapper">

	<!--검색박스를 포함하는 헤더 영역-->
	<div id="header">
		<h1><a href="/main">Rolling Puppy</a></h1>
		
		<!--검색 박스와 검색 버튼을 포함하는 영역-->
		<div id="search_box">
			<input type="text"></input>
			<button class="button" type="submit">검색</button>
		</div>
	</div>
	
	<!--헤더를 제외하고 네비게이션바와 지도를 포함하는 핵심 컨텐츠 영역-->
	<div id="container">
	
		<!-- 네이게이션바와 네이게이션 바의 메뉴를 눌렀을 때 나오는 패널을 함께 묶은 영역-->
		<div id="aside">

			<!--네비게이션바 영역 -->
			<div id="nav">
				<ul class="nav_list">
					<li>
						<div class="search"></div>
						<a href="#">검색</a>
					</li>
					<li>
						<div class="recommendation"></div>
						<a href="#">추천방</a>
					</li>
					<li>
						<div class="chatting"></div>
						<a href="#">채팅중</a>
					</li>
					<li>
						<div class="bookmark"></div>
						<a href="#">관심장소</a>
					</li>
					<li>
						<div class="settings"></div>
						<a href="#">설정</a>
					</li>
				</ul>
			</div>
			
			<!--네비게이션바를 눌렀을때 나오는 패널 영역-->
			<div id="panel"></div>
		</div>
		
		<!-- 컨텐츠 영역에서 네비게이션과 패널 영역을 제외한, 지도를 포함한 영역-->
		<div id="content">
			<div id="map_area">
			
				<!-- 지도 영역 -->
				<div id="naver_map" class="naver_map"></div>
			</div>
		</div>
	</div>
	

</div>
</body>
<script type="text/javascript" src="/javascripts/main.js"></script>
</html>
