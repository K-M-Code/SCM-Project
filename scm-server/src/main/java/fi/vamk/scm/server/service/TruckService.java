package fi.vamk.scm.server.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fi.vamk.scm.server.entities.Truck;
import fi.vamk.scm.server.repositories.TruckRepository;

@Service
@Component
public class TruckService {
    
    TruckRepository truckRepository;
    
    @Autowired
    public TruckService(TruckRepository truckRepository) {
        this.truckRepository = truckRepository;
    }
    
    
    public ResponseEntity<List<Truck>> getAllTrucks() {
        return ResponseEntity.status(HttpStatus.OK).body(truckRepository.findAll());
    }
    

    public ResponseEntity<Truck> getTruckById(Integer id) {
        Optional<Truck> truck = truckRepository.findById(id);
        return truck
                .map(value -> ResponseEntity.status(HttpStatus.OK).body(value))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
    }    


    public ResponseEntity<Truck> createNewTruck(Truck truck) {
            return ResponseEntity.status(HttpStatus.CREATED).body(truckRepository.save(truck));
    }
    

    public ResponseEntity<Truck> deleteTruckById(Integer id){
        truckRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    
    @Transactional(readOnly = true)
    public Optional<Truck> findById(Integer id) {
        return truckRepository.findById(id);
    }

    
    @Transactional
    public Truck saveTruck(Truck truck) {
        return truckRepository.save(truck);
    }    


    public ResponseEntity<Truck> updateTruckById(Truck truckDetails, Integer id){
        Optional<Truck> thisTruck = findById(id);
        if(!thisTruck.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        if (truckDetails.getName() != null) {
            thisTruck.get().setName(truckDetails.getName());
        } else {
            truckDetails.setName(thisTruck.get().getName());
        }
    
        if (truckDetails.getLicencePlate() != null) {
            thisTruck.get().setLicencePlate(truckDetails.getLicencePlate());
        } else {
            truckDetails.setLicencePlate(thisTruck.get().getLicencePlate());
        }
    
        return ResponseEntity.status(HttpStatus.CREATED).body(saveTruck(thisTruck.get()));
    } 
    
}
