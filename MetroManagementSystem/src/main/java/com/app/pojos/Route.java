package com.app.pojos;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "route")
public class Route extends BaseEntity {

	@Column(name = "arrival_time")
	private LocalTime arrivalTime;
	@Column(name = "departure_time")
	private LocalTime departureTime;
	@Column(name = "source_name")
	private String sourceName;
	@Column(name = "destination_name")
	private String destinationName;
	
	@JsonIgnore
	@OneToMany(mappedBy = "substationRoute", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Substation> substations = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "selectedRoute", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Train> trains = new ArrayList<>();

	public Route() {
		super();
	}

	public Route(LocalTime arrivalTime, LocalTime departureTime, String sourceName, String destinationName) {
		super();
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.sourceName = sourceName;
		this.destinationName = destinationName;
	}

	public LocalTime getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(LocalTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public LocalTime getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(LocalTime departureTime) {
		this.departureTime = departureTime;
	}

	public String getSourceName() {
		return sourceName;
	}

	public void setSourceName(String sourceName) {
		this.sourceName = sourceName;
	}

	public String getDestinationName() {
		return destinationName;
	}

	public void setDestinationName(String destinationName) {
		this.destinationName = destinationName;
	}

	public List<Train> getTrains() {
		return trains;
	}

	public void setTrains(List<Train> trains) {
		this.trains = trains;
	}

	public List<Substation> getSubstations() {
		return substations;
	}

	public void setSubstations(List<Substation> substations) {
		this.substations = substations;
	}

	// Helper Methods For Associations.
//
//	public void addSubstation(Substation substation) {
//		this.getSubstations().add(substation);
//		substation.setSubstationRoute(this);
//	}

	public void removeSubstation(Substation substation) {
		this.getSubstations().remove(substation);
		substation.setSubstationRoute(null);
	}

	public void addTrain(Train train) {
		this.getTrains().add(train);
		train.setSelectedRoute(this);
	}

	public void removeTrain(Train train) {
		this.getTrains().remove(train);
		train.setSelectedRoute(null);
	}

	@Override
	public String toString() {
		return "Route [arrivalTime=" + arrivalTime + ", departureTime=" + departureTime + ", sourceName=" + sourceName
				+ ", destinationName=" + destinationName + "]";
	}

}
