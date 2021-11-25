package com.app.pojos;

import javax.persistence.*;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "user")
public class User extends BaseEntity {

	@Column(name = "user_name", length = 25)
	private String userName;
	@Column(name = "user_email", length = 25, unique = true)
	private String userEmail;
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password")
	@Column(name = "user_password", nullable = false)
	private String userPassword;
	@Column(name = "user_mobile", length = 25)
	private String userMobile;
	@Enumerated(EnumType.STRING)
	private Gender userGender;

	public User() {
		//default
	}

	public User(String userName, String userEmail, String userPassword, String userMobile, Gender userGender) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userMobile = userMobile;
		this.userGender = userGender;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserMobile() {
		return userMobile;
	}

	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}

	public Gender getUserGender() {
		return userGender;
	}

	public void setUserGender(Gender userGender) {
		this.userGender = userGender;
	}

	@Override
	public String toString() {
		return "user [userName=" + userName + ", userEmail=" + userEmail + ", userPassword=" + userPassword
				+ ", userMobile=" + userMobile + ", userGender=" + userGender + "]";
	}

}
