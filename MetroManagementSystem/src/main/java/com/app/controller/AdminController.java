package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Admin;
import com.app.pojos.Fare;
import com.app.pojos.Feedback;
import com.app.pojos.RestResponse;
import com.app.pojos.Route;
import com.app.pojos.Station;
import com.app.pojos.Substation;
import com.app.pojos.Train;
import com.app.service.IAdminService;
import com.app.service.IFareService;
import com.app.service.IFeedbackService;
import com.app.service.IRouteService;
import com.app.service.IStationService;
import com.app.service.ISubstationService;
import com.app.service.ITrainService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	@Autowired
	IAdminService adminService;

	@Autowired
	IRouteService routeService;

	@Autowired
	ISubstationService substationService;

	@Autowired
	ITrainService trainService;

	@Autowired
	IStationService stationService;

	@Autowired
	IFareService fareService;
	
	@Autowired
	IFeedbackService feedbackService;

	@PostMapping("/authenticate")
	public RestResponse AdminVerification(@Valid @RequestBody Admin admin) {
		try {
			Admin admin1 = adminService.adminVerification(admin);
			if (admin1 != null) {
				return new RestResponse(admin1, "Admin Successfully Verified!");
			}
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
		return null;
	}

	@PostMapping("/admin")
	public RestResponse addNewAdmin(@Valid @RequestBody Admin admin) {
		try {
			adminService.addNewAdmin(admin);
			return new RestResponse(admin, "Admin Added Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	// Station Section

	@PostMapping("/station")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse addStation(@RequestBody Station station) {
		try {
			stationService.addStations(station);
			return new RestResponse(station, "Station Added Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@GetMapping("/station")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse viewStation() {
		try {
			List<Station> stationList = stationService.viewStations();
			return new RestResponse(stationList, "Station List");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@DeleteMapping("/station/{id}")
	public RestResponse deleteStation(@PathVariable int id) {
		try {
			stationService.deleteStation(id);
			return new RestResponse(id, "Station Deleted Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}

	}

	@PutMapping("/station/{id}")
	public RestResponse updateStation(@PathVariable int id, @RequestBody Station station) {
		try {
			stationService.updateStation(id, station);
			return new RestResponse(station, "Station Updated Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	// optional normal delete method

	@DeleteMapping("/{id}")
	public RestResponse deleteAdmin(@PathVariable int id) {
		try {
			adminService.deleteAdmin(id);
			return new RestResponse(id, "Admin Deleted Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@PutMapping("password/{id}")
	public RestResponse updatePassword(@PathVariable String adminEmail, @PathVariable String oldPassword,
			@PathVariable String newPassword) {
		try {
			adminService.updateAdminPassword(adminEmail, oldPassword, newPassword);
			return new RestResponse(adminEmail, "Password Updated Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

// Route Section

	@PostMapping("/route")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse addRoute(@Valid @RequestBody Route route) {
		try {
			routeService.addRoute(route);
			return new RestResponse(route, "Route Added Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@GetMapping("/route")
	public RestResponse getAllRoute() {
		try {
			List<Route> routeList = routeService.viewRouteList();
			return new RestResponse(routeList, "List Of Routes");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@GetMapping("/{routeId}")
	public RestResponse getRouteDetails(@PathVariable int routeId) {
		try {
			Route route = routeService.getRouteById(routeId);
			return new RestResponse(route, "Route Detials From ID");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

// Substation Section

	@PostMapping("/substation/{id}")
	public RestResponse addSubstations(@PathVariable int id, @RequestBody Substation substation) {
		try {
			substationService.addSubstation(substation, id);
			return new RestResponse(null, "Route Added Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@GetMapping("/substation")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse viewSubstation() {
		try {
			List<Substation> SubstationList = substationService.viewSubstations();
			return new RestResponse(SubstationList, "Sub-Station List");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

//Train Section

	@PostMapping("/train/{id}")
	public RestResponse addTrain(@PathVariable int id, @RequestBody Train train) {
		try {
			trainService.AddTrain(train, id);
			return new RestResponse(train, "Train Added Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@PostMapping("/view-train")
	public RestResponse viewTrain() {
		try {
			List<Train> trainList = trainService.getTrainList();
			return new RestResponse(trainList, "Train Added Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

//Fares Section	

	@PostMapping("/fare/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse addFares(@PathVariable int id, @RequestBody Fare fare) {
		try {
			fareService.setFares(id, fare.getFares());
			return new RestResponse(fare, "Fares Added Successfully");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());

		}
	}

	@GetMapping("/fare/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse getFares(@PathVariable int id) {
		try {
			Fare fare = fareService.getFares(id);
			return new RestResponse(fare, "Station List");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}
	
//Feedback Report 
	
	@PostMapping("/feedback")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse saveFeedback(@RequestBody Feedback feedback) {
		try {
			feedbackService.saveFeedback(feedback);
			return new RestResponse(feedback, "Feedback Submitted");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}
	
	@GetMapping("/feedback")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse fetchFeedback() {
		
		try {
			List<Feedback> feedbackList = feedbackService.fetchFeedback();
			return new RestResponse(feedbackList, "Feedback Submitted");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}
}