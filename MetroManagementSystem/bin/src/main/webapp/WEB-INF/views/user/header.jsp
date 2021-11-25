<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

		<a class="navbar-brand" href="#"> <img
			src="/MetroManagementSystem/src/main/resources/static/images/puneMetro.png"
			width="30" height="30" alt="">
		</a>
		<!-- 
		<a class="navbar-brand" href="#"><i class="fa fa-train"></i>&nbsp;<span
			style="font-size: 15px;">PMR</span></a>
 -->
		<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
			<ul class="navbar-nav mr-auto mt-2 mt-lg-0">

				<li class="nav-item"><a class="nav-link" href="#"><i
						class="fa fa-home" style="color: white; margin-right: 5px;"></i>Home</a></li>

				<li class="nav-item"><a class="nav-link" href="#"><i
						class="fa fa-clock-o" style="color: white; margin-right: 5px;"></i>Timing</a></li>

				<li class="nav-item"><a class="nav-link" href="#"><i
						class="fa fa-address-card"
						style="color: white; margin-right: 5px;"></i>About us</a></li>
			</ul>
			<button class="btn btn-outline-success my-2 my-sm-0">
				<a href="<spring:url value='/login'/>"> Login</a>
				<!-- making call to homePageController -->
			</button>
			</form>
		</div>
	</nav>
</body>
</html>