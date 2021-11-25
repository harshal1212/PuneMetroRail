package com.app.service;

import com.app.pojos.MetroCard;

public interface IMetrocardService {

	public void addMetrocard(MetroCard metrocard);

	public void depositeBalance(MetroCard metrocard, int depositeAmount);

	public void withdrawBalance(MetroCard metrocard, int withdrawAmount);

	public MetroCard validateMetrocardDetails(String email,String password);
	
}
