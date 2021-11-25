package com.app.service;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.dao.IFareDao;
import com.app.pojos.Fare;

@Service
@Transactional
public class FareServiceImpl implements IFareService {

	@Autowired
	IFareDao fareDao;
	
	@Override
	public void setFares(int fareId, int amount) {

		Fare f = fareDao.findById(fareId).get();
		f.setFares(amount);
		fareDao.save(f);
	}

	@Override
	public Fare getFares(int fareId) {
		Fare f = fareDao.findById(fareId).get();
		return f;
	}

	@Override
	public int getFaresByKm(double lat1, double lon1, double lat2, double lon2) {
		Fare fare = fareDao.findById(1).get();
		System.out.println("Done with Fare");
		double p = 0.017453292519943295;
		double a = 0.5 - Math.cos((lat2 - lat1) * p) / 2
				+ Math.cos(lat1 * p) * Math.cos(lat2 * p) * (1 - Math.cos((lon2 - lon1) * p)) / 2;
		double km = Math.ceil(12742 * Math.asin(Math.sqrt(a)));
		return (int) (km * fare.getFares());
	}
}
