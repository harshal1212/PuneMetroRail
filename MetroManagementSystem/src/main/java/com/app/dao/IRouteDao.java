package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Route;

public interface IRouteDao extends JpaRepository<Route, Integer> {

}