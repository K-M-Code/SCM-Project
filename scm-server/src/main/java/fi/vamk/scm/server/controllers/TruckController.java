package fi.vamk.scm.server.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.vamk.scm.server.entities.Truck;
import fi.vamk.scm.server.repositories.TruckRepository;

@RestController
@RequestMapping("/api/truck")
public class TruckController {
	@Autowired TruckRepository truckRepository;
	
	
    //Get All Location
	@GetMapping
	public List<Truck> readAll(){
		return truckRepository.findAll();
	}
	
    
    //Get Location by ID
    @GetMapping("/{id}")
    public Optional<Truck> getTruck(@PathVariable Integer id){
        return truckRepository.findById(id);
    }
    
    
    //Post/Add Location
    @PostMapping
    public ResponseEntity<?> create(@RequestBody Truck truck){
        return ResponseEntity.status(HttpStatus.CREATED).body(truckRepository.save(truck));
    }

}
