<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
</head>
<body>
	<h5>Login Window</h5>

	<button>
		<a href="<spring:url value='/login/userLogin'/>">User Login </a>
	</button>

	<button>
		<a href="<spring:url value='/login/adminLogin'/>">Admin Login</a>
	</button>
</body>
</html>

