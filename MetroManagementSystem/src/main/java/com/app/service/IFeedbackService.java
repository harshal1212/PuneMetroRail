package com.app.service;

import java.util.List;

import com.app.pojos.Feedback;

public interface IFeedbackService {
	
	public void saveFeedback(Feedback feedback);
	public List<Feedback> fetchFeedback();
	
}	
