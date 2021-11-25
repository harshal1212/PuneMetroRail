package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IMetrocardDao;
import com.app.pojos.MetroCard;

@Service
@Transactional
public class MetrocardServiceImpl implements IMetrocardService {

	@Autowired
	IMetrocardDao metrocardDao;

	@Override
	public void addMetrocard(MetroCard metrocard) {
		metrocardDao.save(metrocard);
	}

	@Override
	public void depositeBalance(MetroCard metrocard,int depositeAmount) {
		System.out.println(depositeAmount);
		System.out.println(metrocard);
		metrocard.setBalance(metrocard.getBalance() + depositeAmount);
		metrocardDao.save(metrocard);
	}

	@Override
	public void withdrawBalance(MetroCard metrocard,int withdrawAmount) {
		metrocard.setBalance(metrocard.getBalance() - withdrawAmount);
		metrocardDao.save(metrocard);
	}

	@Override
	public MetroCard validateMetrocardDetails(String email, String password) {
		MetroCard metrocard = metrocardDao.findByUserEmailAndUserPassword(email, password);
		if (metrocard != null) {
			return metrocard;
		}
		return null;
	}

}
