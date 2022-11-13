package fi.vamk.scm.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.vamk.scm.server.entities.Truck;
import fi.vamk.scm.server.service.TruckService;

@RestController
@RequestMapping("/api/truck")


public class TruckController {

    
    @Autowired
    public TruckService truckService;
    
    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<Truck>> getAllTrucks(){
        return truckService.getAllTrucks();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Truck> getTruckById(@PathVariable(value = "id") Integer id){
        return truckService.getTruckById(id);
    }

    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<Truck> createNewTruck(@RequestBody Truck truck){
        return truckService.createNewTruck(truck);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Truck> updateTruckById(@PathVariable(value = "id") Integer id, @RequestBody Truck truck){
        return truckService.updateTruckById(truck, id);
    }


    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Truck> deleteTruckById(@PathVariable(value = "id") Integer id){
        return truckService.deleteTruckById(id);
    }

}


//@Autowired TruckRepository truckRepository;
//
//
////Get All Truck
//@GetMapping
//public List<Truck> getAllTrucks(){
//  return truckRepository.findAll();
//}
//
//
////Get Truck by ID
//@GetMapping("/{id}")
//public Optional<Truck> getTruck(@PathVariable int id){
//    return truckRepository.findById(id);
//}
//
//
////Post/Add Truck
//@PostMapping
//public ResponseEntity<?> createTruck(@RequestBody Truck truck){
//    return ResponseEntity.status(HttpStatus.CREATED).body(truckRepository.save(truck));
//}
//
//
//// Update Truck by ID or Post new Truck
//@PutMapping("/{id}")
//public ResponseEntity<?> updateTruck(@RequestBody Truck truckDetails, @PathVariable int id){
//    return truckRepository.findById(id)
//    .map(Truck -> {
//    Truck.setName(truckDetails.getName());
//    Truck.setLicencePlate(truckDetails.getLicencePlate());
//    return ResponseEntity.status(HttpStatus.OK).body(truckRepository.save(Truck));
//    })
//    .orElseGet(() -> {
//        truckDetails.setId(id);
//    return ResponseEntity.status(HttpStatus.OK).body(truckRepository.save(truckDetails));
//    });
//}
//
//
//
////Delete Truck
//@DeleteMapping("/{id}")
//public ResponseEntity<?> deleteTruck(@PathVariable int id){
//    if(!truckRepository.findById(id).isPresent())
//        return ResponseEntity.notFound().build();
//    truckRepository.deleteById(id);
//    return ResponseEntity.ok().build();
//}
