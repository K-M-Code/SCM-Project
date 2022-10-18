package fi.vamk.scm.server;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

import javax.transaction.Transactional;

import fi.vamk.scm.server.entities.Truck;
import fi.vamk.scm.server.repositories.TruckRepository;

@SpringBootTest
class ServerApplicationTests {

    @Autowired
    private TruckRepository repository;
    
	@Test
	void contextLoads() {
	}
	
	@Test
	@Transactional
	public void insterTruckAndCheckValues() {
	    Truck truck = new Truck();
	    truck.setLicencePlate("AKU-123");
	    truck.setName("Volvo");
	    truck.setType("S");
	    Truck saved = repository.save(truck);
	    Truck found = repository.getReferenceById(saved.getId());
	    // Truck doesnt have the id found got it from database
	    System.out.println(truck.toString());
	    System.out.println(found.toString());
	    assertThat(truck.toString().equals(found.toString()));
	}

}
