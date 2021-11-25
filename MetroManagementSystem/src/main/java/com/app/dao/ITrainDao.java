package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Route;
import com.app.pojos.Train;

public interface ITrainDao extends JpaRepository<Train, Integer> {
	public Train findBySelectedRoute(Route routeId);

}
