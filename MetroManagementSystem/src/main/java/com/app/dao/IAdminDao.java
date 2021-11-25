package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Admin;

public interface IAdminDao extends JpaRepository<Admin, Integer> {
	public Admin findByAdminEmailAndAdminPassword(String email, String password);
	public Admin findByAdminEmail(String email);
}
