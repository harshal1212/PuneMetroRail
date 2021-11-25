package com.app.service;

import com.app.pojos.Fare;

public interface IFareService {

	public void setFares(int fareId, int amount);
	public Fare getFares(int fareId);
	public int getFaresByKm(double lat1, double lon1, double lat2, double lon2);
}
