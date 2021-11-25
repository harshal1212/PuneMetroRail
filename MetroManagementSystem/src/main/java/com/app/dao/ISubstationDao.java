package com.app.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Substation;

public interface ISubstationDao extends JpaRepository<Substation, Integer> {
	public List<Substation> findBySubstationRoute(int id);
	
	public List<Substation> findBySubstationName(String substationName);
}
