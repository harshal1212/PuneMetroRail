package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "metrocard")
public class MetroCard extends BaseEntity {

	@Column(name = "card_number", length = 16, unique = true, nullable = false)
	private int cardNumber;
	@Column(name = "user_email", length = 25, unique = true)
	private String userEmail;
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password")
	@Column(name = "user_password")
	private String userPassword;
	@Column(name = "DateOfBirth")
	private LocalDate userDateOfBirth;
	private String city;
	@Column(length = 25)
	private String state;
	@Column(length = 25)
	private String country;
	@Column(name = "balance")
	private int balance;	

	
	public MetroCard() {
		// default constr
	}

	public MetroCard(int cardNumber, String userEmail, String userPassword, LocalDate userDateOfBirth, String city,
			String state, String country, int balance) {
		super();
		this.cardNumber = cardNumber;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userDateOfBirth = userDateOfBirth;
		this.city = city;
		this.state = state;
		this.country = country;
		this.balance = balance;
	}

	public int getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(int cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public LocalDate getUserDateOfBirth() {
		return userDateOfBirth;
	}

	public void setUserDateOfBirth(LocalDate userDateOfBirth) {
		this.userDateOfBirth = userDateOfBirth;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}
	@Override
	public String toString() {
		return "MetroCard [cardNumber=" + cardNumber + ", userEmail=" + userEmail + ", userPassword=" + userPassword
				+ ", userDateOfBirth=" + userDateOfBirth + ", city=" + city + ", state=" + state + ", country="
				+ country + ", balance=" + balance + "]";
	}

}
