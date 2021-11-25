package com.app.pojos;

import java.time.LocalTime;

public class JourneyDetailsDTO{

	private String sourceName;
	private LocalTime sourceArrivalTime;
	private LocalTime sourceDepartureTime;
	private String destinationName;
	private LocalTime destinationArrivalTime;
	private LocalTime destinationDepartureTime;
	private int trainNumber;
	private String trainName;

	private int fares;

	public JourneyDetailsDTO() {

	}

	public JourneyDetailsDTO(String sourceName, LocalTime sourceArrivalTime, LocalTime sourceDepartureTime,
			String destinationName, LocalTime destinationArrivalTime, LocalTime destinationDepartureTime,
			int trainNumber, String trainName, int fares) {
		super();
		this.sourceName = sourceName;
		this.sourceArrivalTime = sourceArrivalTime;
		this.sourceDepartureTime = sourceDepartureTime;
		this.destinationName = destinationName;
		this.destinationArrivalTime = destinationArrivalTime;
		this.destinationDepartureTime = destinationDepartureTime;
		this.trainNumber = trainNumber;
		this.trainName = trainName;
		this.fares = fares;
	}

	public String getSourceName() {
		return sourceName;
	}

	public void setSourceName(String sourceName) {
		this.sourceName = sourceName;
	}

	public LocalTime getSourceArrivalTime() {
		return sourceArrivalTime;
	}

	public void setSourceArrivalTime(LocalTime sourceArrivalTime) {
		this.sourceArrivalTime = sourceArrivalTime;
	}

	public LocalTime getSourceDepartureTime() {
		return sourceDepartureTime;
	}

	public void setSourceDepartureTime(LocalTime sourceDepartureTime) {
		this.sourceDepartureTime = sourceDepartureTime;
	}

	public String getDestinationName() {
		return destinationName;
	}

	public void setDestinationName(String destinationName) {
		this.destinationName = destinationName;
	}

	public LocalTime getDestinationArrivalTime() {
		return destinationArrivalTime;
	}

	public void setDestinationArrivalTime(LocalTime destinationArrivalTime) {
		this.destinationArrivalTime = destinationArrivalTime;
	}

	public LocalTime getDestinationDepartureTime() {
		return destinationDepartureTime;
	}

	public void setDestinationDepartureTime(LocalTime destinationDepartureTime) {
		this.destinationDepartureTime = destinationDepartureTime;
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

	public int getFares() {
		return fares;
	}

	public void setFares(int fares) {
		this.fares = fares;
	}

	@Override
	public String toString() {
		return "JourneyDetails [sourceName=" + sourceName + ", sourceArrivalTime=" + sourceArrivalTime
				+ ", sourceDepartureTime=" + sourceDepartureTime + ", destinationName=" + destinationName
				+ ", destinationArrivalTime=" + destinationArrivalTime + ", destinationDepartureTime="
				+ destinationDepartureTime + ", trainNumber=" + trainNumber + ", trainName=" + trainName + ", fares="
				+ fares + "]";
	}

}
