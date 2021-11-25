package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.GlobalHandlingException;
import com.app.dao.IUserDao;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private IUserDao userDao;

	@Override
	public User authenticateUser(User user) {
		return userDao.findByUserEmailAndUserPassword(user.getUserEmail(), user.getUserPassword());
	}

	@Override
	public void saveUser(User user) {
		userDao.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		return userDao.findAll();
	}

	@Override
	public String deleteUserById(int userId) {
		User user = userDao.findById(userId).orElseThrow(() -> new GlobalHandlingException("Invalid User ID"));
		userDao.deleteById(userId);
		return "User details for ID " + user + userId + " deleted...";
	}

	@Override
	public User getUserDetails(int userId) {
		User user = userDao.findById(userId).orElseThrow(() -> new GlobalHandlingException("Invalid User ID"));
		System.out.println("user " + user);
		return user;
	}

	@Override
	public void updateUserDetails(int userId, User newUser) {
		// user Details from db
		User oldUser = userDao.findById(userId).get();
		System.out.println("oldUser dtls from db " + oldUser);
		if (oldUser == null) {
			throw new GlobalHandlingException("User Not Exist with Id " + userId);
		}
		oldUser.setUserName(newUser.getUserName());
		oldUser.setUserEmail(newUser.getUserEmail());
		oldUser.setUserPassword(newUser.getUserPassword());
		oldUser.setUserMobile(newUser.getUserMobile());
		oldUser.setUserGender(newUser.getUserGender());

		userDao.save(oldUser);
	}

}
