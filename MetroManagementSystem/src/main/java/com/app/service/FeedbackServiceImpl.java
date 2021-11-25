package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IFeedbackDao;
import com.app.pojos.Feedback;

@Service
@Transactional
public class FeedbackServiceImpl implements IFeedbackService {

	@Autowired
	IFeedbackDao feedbackDao;

	@Override
	public void saveFeedback(Feedback feedback) {
		feedbackDao.save(feedback);
	}

	@Override
	public List<Feedback> fetchFeedback() {
		return feedbackDao.findAll();
	}

}
