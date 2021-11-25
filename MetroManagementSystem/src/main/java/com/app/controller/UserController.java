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

import com.app.custom_exceptions.GlobalHandlingException;
import com.app.pojos.JourneyDetailsDTO;
import com.app.pojos.MetroCard;
import com.app.pojos.RestResponse;
import com.app.pojos.User;
import com.app.service.IMetrocardService;
import com.app.service.IStationService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	IUserService service;

	@Autowired
	IMetrocardService metrocardSevice;

	@Autowired
	IStationService stationService;

	@PostMapping("/authenticate")
	public RestResponse authenticateUser(@Valid @RequestBody User user) {
		try {
			User temp = service.authenticateUser(user);
			System.out.println(temp);
			if (temp != null) {
				return new RestResponse(temp, "User Verified!");
			}
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
		return null;
	}

	@PostMapping("/register")
	public RestResponse registerUser(@RequestBody User user) {
		try {
			service.saveUser(user);
			return new RestResponse(user, "Registered User");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@GetMapping("/users")
	public RestResponse getAllUser() {
		try {
			List<User> usersList = service.getAllUsers();
			return new RestResponse(usersList, "List Of Users");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@DeleteMapping("/delete/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse deleteUserDetails(@PathVariable int id) {
		try {
			service.deleteUserById(id);
			return new RestResponse(null, "Deleted Success!");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@GetMapping("/user/{id}")
	public RestResponse getUserDetails(@PathVariable int id) {

		try {
			User user = service.getUserDetails(id);
			return new RestResponse(user, "User Details By ID");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}


	@PutMapping("/user/{id}")
	public RestResponse updateUserDetails(@PathVariable int id, User user) {
		try {
			service.updateUserDetails(id, user);
			return new RestResponse(user, "User Updated Successfully!");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

// Metrocard

	@PostMapping("/metrocard")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse addMetroCard(@RequestBody MetroCard metrocard) {
		try {
			metrocardSevice.addMetrocard(metrocard);
			return new RestResponse(metrocard, "MetroCard Added!");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@PostMapping("/metrocard-recharge/{amount}")
	public RestResponse depositeBalanace(@RequestBody MetroCard metrocard, @PathVariable int amount) {
		try {
			MetroCard metrocard1 = metrocardSevice.validateMetrocardDetails(metrocard.getUserEmail(),
					metrocard.getUserPassword());
			metrocardSevice.depositeBalance(metrocard1, amount);
			return new RestResponse(metrocard, "Registered User");
		} catch (Exception e) {
			return new RestResponse(null, e.getMessage());
		}
	}

	@PostMapping("/station-search/{sid}/{did}")
	public RestResponse stationSearch(@PathVariable int sid, @PathVariable int did) {
		JourneyDetailsDTO journeyDetailsDao = null;
		try {
			journeyDetailsDao = stationService.getStationsBySourceIdAndDestinationId(sid, did);
		} catch (Exception e) {
			throw new GlobalHandlingException(e.getMessage());
		}
		System.out.println("in station search");
		return new RestResponse(journeyDetailsDao, "Complete Journey Details.");
	}

	@PostMapping("/payment/{fare}")
	@ResponseStatus(code = HttpStatus.OK)
	public RestResponse paymentValidations(@RequestBody MetroCard metrocard, @PathVariable int fare) {
		try {
			MetroCard metrocard1 = metrocardSevice.validateMetrocardDetails(metrocard.getUserEmail(),
					metrocard.getUserPassword());
			metrocardSevice.withdrawBalance(metrocard1, fare);
		} catch (Exception e) {
			throw new GlobalHandlingException(e.getMessage());
		}
		return new RestResponse(metrocard, "Payment Successful");
	}

}