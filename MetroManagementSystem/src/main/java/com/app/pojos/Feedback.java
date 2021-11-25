package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "feedback")
public class Feedback extends BaseEntity {
	
	@Column(length = 25)
	private String name;
	@Column(length = 25)
	private String email;
	@Column
	private String subject;
	@Column
	private String message;
	
	public Feedback() {
		super();
	}

	public Feedback(String name, String email, String subject, String message) {
		super();
		this.name = name;
		this.email = email;
		this.subject = subject;
		this.message = message;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Feedback [name=" + name + ", email=" + email + ", subject=" + subject + ", message=" + message + "]";
	}
}
