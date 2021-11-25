package com.app.service;

import java.util.List;

import com.app.pojos.Route;
import com.app.pojos.Substation;
import com.app.pojos.Train;

public interface IRouteService {

	public void addRoute(Route route);

	public List<Route> viewRouteList();

	public Route getRouteById(int id);

	public void updateRoute(int routeId, Route route);

	public void addSubstationByRouteId(int routeId, Substation substation);

	public void addTrainByRouteId(int routeId, Train train);

}
