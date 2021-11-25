package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.GlobalHandlingException;
import com.app.dao.IStationDao;
import com.app.pojos.JourneyDetailsDTO;
import com.app.pojos.Station;

@Service
@Transactional
public class StationServiceImpl implements IStationService {

	@Autowired
	private IStationDao stationDao;

	@Autowired
	private IFareService fareService;

	@Autowired
	private ISubstationService substationService;

	@Override
	public void addStations(Station station) {
		try {
			stationDao.save(station);
		} catch (Exception e) {
			throw new GlobalHandlingException(e.getMessage());
		}
	}

	@Override
	public List<Station> viewStations() {
		return stationDao.findAll();
	}

	@Override
	public void updateStation(int id, Station station) {
		stationDao.deleteById(id);
		stationDao.save(station);

//		oldStation.setStationName(station.getStationName());
//		oldStation.setLatitude(station.getLatitude());
//		oldStation.setLongitude(station.getLongitude());

//		stationDao.save(oldStation);
	}

	@Override
	public Optional<Station> getStation(int id) {
		return stationDao.findById(id);
	}

	@Override
	public void deleteStation(int id) {
		stationDao.deleteById(id);
	}

	@Override
	public JourneyDetailsDTO getStationsBySourceIdAndDestinationId(int sid, int did) {
		Station source = stationDao.findById(sid).get();
		Station destination = stationDao.findById(did).get();
		int fares = fareService.getFaresByKm(source.getLatitude(), source.getLongitude(), destination.getLatitude(),
				destination.getLongitude());
		return substationService.getJouneyDetails(fares, source.getStationName(), destination.getStationName());
	}
}
