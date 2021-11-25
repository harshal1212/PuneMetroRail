package com.app.service;

import java.util.List;

import com.app.pojos.Route;
import com.app.pojos.Train;

public interface ITrainService {

	public void AddTrain(Train t, int routeId);

// complete list from Train Table
	public List<Train> getTrainList();

// get trains by route id
	public Train getTrainByRouteId(Route routeId);
	
}