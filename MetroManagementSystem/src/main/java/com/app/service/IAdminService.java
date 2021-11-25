package com.app.service;

import com.app.pojos.Admin;

public interface IAdminService {

	public Admin adminVerification(Admin admin);

	public void addNewAdmin(Admin admin);

	public void deleteAdmin(int id);

	public void updateAdminPassword(String email, String oldPassword, String newPassword);

}
