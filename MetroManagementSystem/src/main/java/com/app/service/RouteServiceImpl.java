package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.GlobalHandlingException;
import com.app.dao.IRouteDao;
import com.app.pojos.Route;
import com.app.pojos.Substation;
import com.app.pojos.Train;

@Service
@Transactional
public class RouteServiceImpl implements IRouteService {

	@Autowired
	IRouteDao routeDao;

	@Override
	public void addRoute(Route route) {
		try {
			routeDao.save(route);
		} catch (Exception e) {
			throw new GlobalHandlingException(e.getMessage());
		}
	}

	@Override
	public List<Route> viewRouteList() {

		return routeDao.findAll();
	}

	@Override
	public Route getRouteById(int id) {
		return routeDao.findById(id).orElseThrow(() -> new GlobalHandlingException("Route Not Found By Id"));
	}

	@Override
	public void updateRoute(int routeId, Route newRoute) {

		Route oldRoute = routeDao.findById(routeId).get();

		if (oldRoute == null) {
			throw new GlobalHandlingException("Route Not Found, id => " + routeId);
		}

		oldRoute.setArrivalTime(newRoute.getArrivalTime());
		oldRoute.setDepartureTime(newRoute.getDepartureTime());
		oldRoute.setSourceName(newRoute.getSourceName());
		oldRoute.setDestinationName(newRoute.getDestinationName());

		routeDao.save(oldRoute);

	}

	@Override
	public void addSubstationByRouteId(int routeId, Substation substation) {
		Route route = routeDao.findById(routeId).get();
		route.getSubstations().add(substation);
	}

	@Override
	public void addTrainByRouteId(int routeId, Train train) {
		Route route = routeDao.findById(routeId).get();
		route.addTrain(train);

	}

}
