package com.app.service;

import java.util.List;

import com.app.pojos.User;

public interface IUserService {

	public User authenticateUser(User user);

	// public boolean registerUser(User user);
	public void saveUser(User user);

	public List<User> getAllUsers();

	public String deleteUserById(int userId);

	public User getUserDetails(int userId);

	public void updateUserDetails(int userId, User user);

}
