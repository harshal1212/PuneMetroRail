package com.app.service;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.GlobalHandlingException;
import com.app.dao.IAdminDao;
import com.app.pojos.Admin;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private IAdminDao adminDao;

	@Override
	public Admin adminVerification(Admin admin) {
		return adminDao.findByAdminEmailAndAdminPassword(admin.getAdminEmail(), admin.getAdminPassword());
	}

	@Override
	public void addNewAdmin(Admin admin) {
		try {
			adminDao.save(admin);
		} catch (Exception e) {
			throw new GlobalHandlingException(e.getMessage());
		}
	}

	@Override
	public void deleteAdmin(int id) {
		adminDao.deleteById(id);
	}

	@Override
	public void updateAdminPassword(String adminEmail, String oldPassword, String newPassword) {
		Admin admin = adminDao.findByAdminEmail(adminEmail);
		if (admin.getAdminPassword().equals(oldPassword)) {
			admin.setAdminPassword(newPassword);
			adminDao.save(admin);
		} else {
			throw new GlobalHandlingException("password updation Failed!");
		}
	}
}