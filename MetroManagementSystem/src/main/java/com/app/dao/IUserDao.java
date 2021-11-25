package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;

@Repository
public interface IUserDao extends JpaRepository<User, Integer>{	
	public User findByUserEmailAndUserPassword(String email,String password);
}
