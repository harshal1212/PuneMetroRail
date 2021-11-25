package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.JourneyDetailsDTO;
import com.app.pojos.Station;

public interface IStationService {

	public void addStations(Station s);

	public List<Station> viewStations();

	public void updateStation(int stationId, Station s);

	public Optional<Station> getStation(int id);

	public void deleteStation(int id);

	// get two stations by their ID's

	public JourneyDetailsDTO getStationsBySourceIdAndDestinationId(int sid, int did);

}
