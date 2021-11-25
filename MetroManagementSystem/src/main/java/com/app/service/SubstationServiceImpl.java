package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IRouteDao;
import com.app.dao.ISubstationDao;
import com.app.pojos.JourneyDetailsDTO;
import com.app.pojos.Route;
import com.app.pojos.Substation;
import com.app.pojos.Train;

@Service
@Transactional
public class SubstationServiceImpl implements ISubstationService {

	@Autowired
	private ISubstationDao substationDao;

	@Autowired
	private IRouteService routeService;

	@Autowired
	private IRouteDao routeDao;

	@Autowired
	private ITrainService trainService;

	@Override
	public void addSubstation(Substation substation, int routeId) {
		routeService.addSubstationByRouteId(routeId, substation);
		Route route = routeDao.findById(routeId).get();
		substation.setSubstationRoute(route);
		substationDao.save(substation);

	}

	@Override
	public List<Substation> viewSubstations() {
		return substationDao.findAll();
	}

	@Override
	public List<Substation> fetchSubstationsByRouteId(int id) {
		return substationDao.findBySubstationRoute(id);
	}

// main journey details

	@Override
	public JourneyDetailsDTO getJouneyDetails(int fares, String sourceStation, String destinationStation) {
		JourneyDetailsDTO journeyDetailsDto = new JourneyDetailsDTO();
		List<Substation> sourceList = substationDao.findBySubstationName(sourceStation);
		Substation sourceList1 = sourceList.get(0);
		Substation sourceList2 = sourceList.get(1);

		List<Substation> destinationList = substationDao.findBySubstationName(destinationStation);
		Substation destinationList1 = destinationList.get(0);
		Substation destinationList2 = destinationList.get(1);

// matching route id's
		if (sourceList1.getSubstationRoute().getId() == destinationList1.getSubstationRoute().getId()) {

			// matching baseEntity id's
			if (sourceList1.getId() < destinationList1.getId()) {

				Train train = trainService.getTrainByRouteId(sourceList1.getSubstationRoute());
				System.out.println("Train" + train);

				journeyDetailsDto.setSourceName(sourceStation);
				journeyDetailsDto.setDestinationName(destinationStation);
				journeyDetailsDto.setSourceArrivalTime(sourceList1.getArrivalTime());
				journeyDetailsDto.setSourceDepartureTime(sourceList1.getDepartureTime());
				journeyDetailsDto.setDestinationArrivalTime(destinationList1.getArrivalTime());
				journeyDetailsDto.setDestinationDepartureTime(destinationList1.getDepartureTime());
				journeyDetailsDto.setTrainName(train.getTrainName());
				journeyDetailsDto.setTrainNumber(train.getTrainNumber());
				journeyDetailsDto.setFares(fares);

				return journeyDetailsDto;
			}

		}

		if (sourceList2.getSubstationRoute().getId() == destinationList2.getSubstationRoute().getId()) {

			if (sourceList2.getId() < destinationList2.getId()) {
				
				Train train = trainService.getTrainByRouteId(sourceList2.getSubstationRoute());
				System.out.println("Train" + train);

				journeyDetailsDto.setSourceName(sourceStation);
				journeyDetailsDto.setDestinationName(destinationStation);
				journeyDetailsDto.setSourceArrivalTime(sourceList2.getArrivalTime());
				journeyDetailsDto.setSourceDepartureTime(sourceList2.getDepartureTime());
				journeyDetailsDto.setDestinationArrivalTime(destinationList2.getArrivalTime());
				journeyDetailsDto.setDestinationDepartureTime(destinationList2.getDepartureTime());
				journeyDetailsDto.setTrainName(train.getTrainName());
				journeyDetailsDto.setTrainNumber(train.getTrainNumber());
				journeyDetailsDto.setFares(fares);

				return journeyDetailsDto;
			}
		}
		return null;
	}
}
