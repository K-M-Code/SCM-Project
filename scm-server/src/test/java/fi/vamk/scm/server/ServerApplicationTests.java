package fi.vamk.scm.server;
import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import fi.vamk.scm.server.entities.Location;
import fi.vamk.scm.server.entities.Truck;
import fi.vamk.scm.server.repositories.LocationRepository;
import fi.vamk.scm.server.repositories.TruckRepository;

@SpringBootTest
class ServerApplicationTests {
    
    @Autowired
    private TruckRepository truckRepository; 
    @Autowired
    private LocationRepository locationRepository;
    
    @Test
    void contextLoads() {
    }
    
    @Test
    @Transactional
    public void insertTruckAndCheckValues() {
        Truck truck = new Truck();          
        truck.setLicencePlate("TKA-321");  
        truck.setName("SISU");              
        
        Truck savedTruck = truckRepository.save(truck);
        
        Truck fetchedTruck = truckRepository.getReferenceById(savedTruck.getId()); 
        
        //truck does not have the id, fetchedTruck got it from id
        assertThat(truck.equals(fetchedTruck));
        
    }
    
    @Test
    @Transactional
    public void insertTruckAndRemoveCheckEmpty() {
        Truck truck = new Truck();          
        truck.setLicencePlate("TKA-321");  
        truck.setName("SISU");              
        
        Truck savedTruck = truckRepository.save(truck);
        
        Truck fetchedTruck = truckRepository.getReferenceById(savedTruck.getId()); 
        
        //truck does not have the id, fetchedTruck got it from id
        assertThat(truck.equals(fetchedTruck));
        
        //removing truck
        truckRepository.deleteAll();
        
        assertThat(truckRepository.findAll().size()).isEqualTo(0);
        
    }
    
    
    @Test
    @Transactional
    public void insertLocationAndCheckValues() {
        Location location = new Location();      
        
    
        
        location.setLatitude(12.3);
        location.setLongitude(32.3);
        location.setName("Vaasa");
        location.setMaxHrCap(234.0);
        location.setProcessingCost(123.56);

        
        Location savedLocation = locationRepository.save(location);
        
        Location fetchedLocation = locationRepository.getReferenceById(savedLocation.getId()); 
        
        //truck does not have the id, fetchedTruck got it from id
        assertThat(location.equals(fetchedLocation));
        
    }
}