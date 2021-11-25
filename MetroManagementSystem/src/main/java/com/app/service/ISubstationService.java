package com.app.service;

import java.util.List;

import com.app.pojos.JourneyDetailsDTO;
import com.app.pojos.Substation;

public interface ISubstationService {

	public void addSubstation(Substation substation, int routeId);

	public List<Substation> viewSubstations();
	
	public List<Substation> fetchSubstationsByRouteId(int id);

	public JourneyDetailsDTO getJouneyDetails(int fares, String sourceStation, String destinationStation);
}
