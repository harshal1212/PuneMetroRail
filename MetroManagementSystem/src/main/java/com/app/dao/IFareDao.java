package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Fare;

public interface IFareDao extends JpaRepository<Fare, Integer>{

}
