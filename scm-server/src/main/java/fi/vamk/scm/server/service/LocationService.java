package fi.vamk.scm.server.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fi.vamk.scm.server.entities.Location;
import fi.vamk.scm.server.repositories.LocationRepository;

@Service
@Component
public class LocationService {
    
    LocationRepository locationRepository;
    
    @Autowired
    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }
    
    
    public ResponseEntity<List<Location>> getAllLocations() {
        return ResponseEntity.status(HttpStatus.OK).body(locationRepository.findAll());
    }

    
    public ResponseEntity<Location> getLocationById(Integer id) {
        Optional<Location> location = locationRepository.findById(id);
        return location
                .map(value -> ResponseEntity.status(HttpStatus.OK).body(value))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
    }
    

    public ResponseEntity<Location> createNewLocation(Location location) {
            return ResponseEntity.status(HttpStatus.CREATED).body(locationRepository.save(location));
    }

    public ResponseEntity<Location> deleteLocationById(Integer id){
        locationRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
    

    @Transactional(readOnly = true)
    public Optional<Location> findById(Integer id) {
        return locationRepository.findById(id);
    }
    

    @Transactional
    public Location saveLocation(Location location) {
        return locationRepository.save(location);
    }


    public ResponseEntity<Location> updateLocationById(Location locationDetails, Integer id){
        Optional<Location> thisLocation = findById(id);
        if(!thisLocation.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        if (locationDetails.getName() != null) {
            thisLocation.get().setName(locationDetails.getName());
        } else {
            locationDetails.setName(thisLocation.get().getName());
        }
    
        if (locationDetails.getLatitude() != null) {
            thisLocation.get().setLatitude(locationDetails.getLatitude());
        } else {
            locationDetails.setLatitude(thisLocation.get().getLatitude());
        }
    
        if (locationDetails.getLongitude() != null) {
            thisLocation.get().setLongitude(locationDetails.getLongitude());
        } else {
            locationDetails.setLongitude(thisLocation.get().getLongitude());
        }
    
        if (locationDetails.getNo() != null) {
            thisLocation.get().setNo(locationDetails.getNo());
        } else {
            locationDetails.setNo(thisLocation.get().getNo());
        }
    
        if (locationDetails.getMaxHrCap() != null) {
            thisLocation.get().setMaxHrCap(locationDetails.getMaxHrCap());
        } else {
            locationDetails.setMaxHrCap(thisLocation.get().getMaxHrCap());
        }
    
        if (locationDetails.getProcessingCost() != null) {
            thisLocation.get().setProcessingCost(locationDetails.getProcessingCost());
        } else {
            locationDetails.setProcessingCost(thisLocation.get().getProcessingCost());
        }
    
        if (locationDetails.getSla() != null) {
            thisLocation.get().setSla(locationDetails.getSla());
        } else {
            locationDetails.setSla(thisLocation.get().getSla());
        }
    
        return ResponseEntity.status(HttpStatus.CREATED).body(saveLocation(thisLocation.get()));
    }


}
