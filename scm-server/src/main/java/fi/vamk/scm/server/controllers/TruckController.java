package fi.vamk.scm.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.vamk.scm.server.entities.Truck;
import fi.vamk.scm.server.repositories.TruckRepository;

@RestController
@RequestMapping("/api/truck")
public class TruckController {
	@Autowired TruckRepository repository;
	
	@GetMapping
	public List<Truck> readAll(){
		return repository.findAll();
	}

}
