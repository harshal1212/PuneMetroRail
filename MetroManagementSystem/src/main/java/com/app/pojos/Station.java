package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "station")
public class Station extends BaseEntity {

	@Column(name = "station_name", length = 20)
	private String stationName;
	@Column(nullable = false, unique = true)
	private double latitude;
	@Column(nullable = false, unique = true)
	private double longitude;

	public Station() {

	}
	
	public Station(String stationName, double latitude, double longitude) {
		this.stationName = stationName;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public String getStationName() {
		return stationName;
	}

	public void setStationName(String stationName) {
		this.stationName = stationName;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	@Override
	public String toString() {
		return "Station [stationName=" + stationName + ", latitude=" + latitude + ", longitude=" + longitude + "]";
	}

}
