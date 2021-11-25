package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "train")
public class Train extends BaseEntity {

	@Column(name = "train_number")
	private int trainNumber;
	@Column(name = "train_name")
	private String trainName;
	@Column(name = "seating_capacity")
	private int seatingCapacity;

	@ManyToOne()
	@JoinColumn(name = "route_id", nullable = false)
	private Route selectedRoute;

	public Train() {
		super();
	}

	public Train(int trainNumber, String trainName, int seatingCapacity) {

		this.trainNumber = trainNumber;
		this.trainName = trainName;
		this.seatingCapacity = seatingCapacity;
	}

	public int getTrainNumber() {
		return trainNumber;
	}

	public void setTrainNumber(int trainNumber) {
		this.trainNumber = trainNumber;
	}

	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	public int getSeatingCapacity() {
		return seatingCapacity;
	}

	public void setSeatingCapacity(int seatingCapacity) {
		this.seatingCapacity = seatingCapacity;
	}

	public Route getSelectedRoute() {
		return selectedRoute;
	}

	public void setSelectedRoute(Route selectedRoute) {
		this.selectedRoute = selectedRoute;
	}

	@Override
	public String toString() {
		return "Train [trainNumber=" + trainNumber + ", trainName=" + trainName + ", seatingCapacity=" + seatingCapacity
				+ "]";
	}

}
