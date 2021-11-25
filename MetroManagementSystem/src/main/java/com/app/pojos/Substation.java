package com.app.pojos;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "substation")
public class Substation extends BaseEntity {

	@Column(name = "substation_name")
	private String substationName;
	@Column(name = "arrival_time")
	private LocalTime arrivalTime;
	@Column(name = "departure_time")
	private LocalTime departureTime;

	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "route_id", nullable = false)
	private Route substationRoute;

	public Substation() {
		//default constr
	}

	public Substation(String substationName, LocalTime arrivalTime, LocalTime departureTime) {
		super();
		this.substationName = substationName;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
	}

	public String getSubstationName() {
		return substationName;
	}

	public void setSubstationName(String substationName) {
		this.substationName = substationName;
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

	public Route getSubstationRoute() {
		return substationRoute;
	}

	public void setSubstationRoute(Route substationRoute) {
		this.substationRoute = substationRoute;
	}

	@Override
	public String toString() {
		return "Substation [substationName=" + substationName + ", ArrivalTime=" + arrivalTime + ", DepartureTime="
				+ departureTime + "]";
	}

}
