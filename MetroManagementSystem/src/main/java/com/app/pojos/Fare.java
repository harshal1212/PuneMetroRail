package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Fare extends BaseEntity{

	@Column(name = "fares_per_km")
	private int fares;
	
	public Fare() {
		// TODO Auto-generated constructor stub
	}
	
	public Fare(int fares) {
		super();
		this.fares = fares;
	}

	public int getFares() {
		return fares;
	}

	public void setFares(int fares) {
		this.fares = fares;
	}
}
