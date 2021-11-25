package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ITrainDao;
import com.app.pojos.Route;
import com.app.pojos.Train;

@Service
@Transactional
public class TrainServiceImpl implements ITrainService {

	@Autowired
	ITrainDao trainDao;

	@Autowired
	IRouteService routeService;

	@Override
	public void AddTrain(Train train, int routeId) {
		routeService.addTrainByRouteId(routeId, train);
		trainDao.save(train);
	}

	@Override
	public List<Train> getTrainList() {
		return trainDao.findAll();
	}

	@Override
	public Train getTrainByRouteId(Route routeId) {
		return trainDao.findBySelectedRoute(routeId);
	}
}
