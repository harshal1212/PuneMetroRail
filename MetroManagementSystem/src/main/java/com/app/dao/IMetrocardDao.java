package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.pojos.MetroCard;

public interface IMetrocardDao extends JpaRepository<MetroCard, Integer> {

	public MetroCard findByUserEmailAndUserPassword(String email, String password);
	
	public MetroCard findByCardNumber(int cardnumber);

}
