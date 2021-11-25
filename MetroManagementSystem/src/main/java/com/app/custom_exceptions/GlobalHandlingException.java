package com.app.custom_exceptions;

@SuppressWarnings("serial")
public class GlobalHandlingException extends RuntimeException {
	public GlobalHandlingException(String mesg) {
		super(mesg);
	}
}
