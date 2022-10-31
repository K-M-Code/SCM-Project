package fi.vamk.scm.server.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.vamk.scm.server.entities.Location;
import fi.vamk.scm.server.repositories.LocationRepository;

@RestController
@RequestMapping("/api/location")
public class LocationController {
    @Autowired private LocationRepository locationRepository;
    

    
    //Get All Location
    @GetMapping
    public List<Location> readAll(){
        return locationRepository.findAll();
    }
    

    
    //Get Location by ID
    @GetMapping("/{id}")
    public Optional<Location> getLocation(@PathVariable Integer id){
        return locationRepository.findById(id);
    }

    
    //Post/Add Location
    @PostMapping
    public ResponseEntity<?> create(@RequestBody Location location){
        return ResponseEntity.status(HttpStatus.CREATED).body(locationRepository.save(location));
    }
    
    //Delete Location    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable(value = "id") Integer id) {
        Optional<Location> delLocation = locationRepository.findById(id);
        if(!delLocation.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        locationRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    //Update Location
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Location locationDetails, @PathVariable(value = "id") Integer id){
        Optional<Location> updateLocation = locationRepository.findById(id);
        if(!updateLocation.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        updateLocation.get().setId(locationDetails.getId());
        updateLocation.get().setNo(locationDetails.getNo());
        updateLocation.get().setName(locationDetails.getName());
        updateLocation.get().setLat(locationDetails.getLat());
        updateLocation.get().setLong_(locationDetails.getLong_());
        updateLocation.get().setProcessingCost(locationDetails.getProcessingCost());
        updateLocation.get().setMaxHrCap(locationDetails.getMaxHrCap());
        updateLocation.get().setSla(locationDetails.getSla());

        return ResponseEntity.status(HttpStatus.CREATED).body(locationRepository.save(updateLocation.get()));
    }

    
//    @PostMapping
//    public ResponseEntity<?> createLocation(@RequestBody Location Location) throws URISyntaxException {
//        Location savedLocation = repository.save(Location);
//        return ResponseEntity.created(new URI("/location/" + savedLocation.getId())).body(savedLocation);
//    }
//    
//    @PostMapping
//    public ResponseEntity<?> createLocation(@RequestBody Location item) throws URISyntaxException {
//        Location savedLocation = locationRepository.save(item);
//        return ResponseEntity.created(new URI("/location/" + savedLocation.getId())).body(item);
//    }
    
//    @PutMapping("/{id}")
//    public ResponseEntity<?> updateLocation(@PathVariable Integer id, @RequestBody Location item) {
//        Location currentLocation = locationRepository.findById(id).orElseThrow(RuntimeException::new);
//        currentLocation.setName(item.getName());
//        currentLocation = locationRepository.save(item);
//
//        return ResponseEntity.ok(currentLocation);
//    }
    
//    @PostMapping
//    @Transactional
//    public ResponseEntity<?> create(@RequestBody Location item){
//        return ResponseEntity.status(HttpStatus.CREATED).body(locationRepository.save(item));
//    }
    
//    @PutMapping("/{id}")
//    public ResponseEntity updateLocation(@PathVariable in id, @RequestBody Location item) {
//        
//    }


}

