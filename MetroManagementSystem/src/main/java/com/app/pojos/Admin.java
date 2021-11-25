package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "admin")
public class Admin extends BaseEntity {

	@Column(name = "admin_name", length = 25)
	private String adminName;
	@Column(name = "admin_email", length = 25, unique = true)
	private String adminEmail;
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password")
	@Column(name = "admin_password", nullable = false)
	private String adminPassword;
	@Column(name = "admin_location", length = 25)
	private String adminnLocation;
	@Column(name = "admin_mobile", length = 25)
	private String adminMobile;
	@Enumerated(EnumType.STRING)
	Gender adminGender;
	@Column(name = "admin_dob", length = 25)
	private LocalDate adminDob;
	@Column(name = "admin_designation", length = 25)
	private String adminDesignation;
	
	
	public Admin() {
		//default Const
	}

	public Admin(String adminName, String adminEmail, String adminPassword, String adminnLocation, String adminMobile,
			Gender adminGender, LocalDate adminDob, String adminDesignation) {
		super();
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.adminPassword = adminPassword;
		this.adminnLocation = adminnLocation;
		this.adminMobile = adminMobile;
		this.adminGender = adminGender;
		this.adminDob = adminDob;
		this.adminDesignation = adminDesignation;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public String getAdminnLocation() {
		return adminnLocation;
	}

	public void setAdminnLocation(String adminnLocation) {
		this.adminnLocation = adminnLocation;
	}

	public String getAdminMobile() {
		return adminMobile;
	}

	public void setAdminMobile(String adminMobile) {
		this.adminMobile = adminMobile;
	}

	public Gender getAdminGender() {
		return adminGender;
	}

	public void setAdminGender(Gender adminGender) {
		this.adminGender = adminGender;
	}

	public LocalDate getAdminDob() {
		return adminDob;
	}

	public void setAdminDob(LocalDate adminDob) {
		this.adminDob = adminDob;
	}

	public String getAdminDesignation() {
		return adminDesignation;
	}

	public void setAdminDesignation(String adminDesignation) {
		this.adminDesignation = adminDesignation;
	}

	@Override
	public String toString() {
		return "Admin [adminName=" + adminName + ", adminEmail=" + adminEmail + ", adminPassword=" + adminPassword
				+ ", adminnLocation=" + adminnLocation + ", adminMobile=" + adminMobile + ", adminGender=" + adminGender
				+ ", adminDob=" + adminDob + ", adminDesignation=" + adminDesignation + "]";
	}
	

	
}
