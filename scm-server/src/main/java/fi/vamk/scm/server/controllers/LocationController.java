package fi.vamk.scm.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import fi.vamk.scm.server.service.LocationService;

@RestController
@RequestMapping("/api/location")
public class LocationController {
    
    @Autowired
    public LocationService locationService;
    
    @GetMapping("")
    public ResponseEntity<List<Location>> getAllLocations(){
        return locationService.getAllLocations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable(value = "id") Integer id){
        return locationService.getLocationById(id);
    }

    @PostMapping("")
    public ResponseEntity<Location> createNewLocation(@RequestBody Location location){
        return locationService.createNewLocation(location);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Location> updateLocationById(@PathVariable(value = "id") Integer id, @RequestBody Location location){
        return locationService.updateLocationById(location, id);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Location> deleteLocationById(@PathVariable(value = "id") Integer id){
        return locationService.deleteLocationById(id);
    }


}






    //Get All Location
//    @GetMapping
//    public List<Location> readAll(){
//        return locationRepository.findAll();
//    }
//    
//
//    
//    //Get Location by ID
//    @GetMapping("/{id}")
//    public Optional<Location> getLocation(@PathVariable int id){
//        return locationRepository.findById(id);
//    }
//
//    
//    //Post/Add Location
//    @PostMapping
//    public ResponseEntity<?> create(@RequestBody Location location){
//        return ResponseEntity.status(HttpStatus.CREATED).body(locationRepository.save(location));
//    }

    
    // Update Location by ID or Post new Location
    // @PutMapping("/{id}")
    // public ResponseEntity<?> update(@RequestBody Location locationDetails, @PathVariable int id){
    //     return locationRepository.findById(id)
    //     .map(Location -> {
    //     Location.setName(locationDetails.getName());
    //     Location.setLatitude(locationDetails.getLatitude());
    //     Location.setLongitude(locationDetails.getLongitude());
    //     Location.setMaxHrCap(locationDetails.getMaxHrCap());
    //     Location.setNo(locationDetails.getNo());
    //     Location.setProcessingCost(locationDetails.getProcessingCost());
    //     Location.setSla(locationDetails.getSla());
    //     return ResponseEntity.status(HttpStatus.OK).body(locationRepository.save(Location));
    //     })
    //     .orElseGet(() -> {
    //         locationDetails.setId(id);
    //         return ResponseEntity.status(HttpStatus.OK).body(locationRepository.save(locationDetails));
    //     });
    // }

    // Partially Update Location by ID or Post new Location including checking if a double is null
//    @PutMapping("/{id}")
//    public ResponseEntity<?> update(@RequestBody Location locationDetails, @PathVariable int id){
//        return locationRepository.findById(id)
//        .map(Location -> {
//        if(locationDetails.getName() != null){
//            Location.setName(locationDetails.getName());
//        }
//        if (Double.valueOf(locationDetails.getLatitude()) != null){
//            Location.setLatitude(locationDetails.getLatitude());
//        }
//        if (Double.valueOf(locationDetails.getLongitude()) != null){
//            Location.setLongitude(locationDetails.getLongitude());
//        }
//        if (Double.valueOf(locationDetails.getMaxHrCap()) != null){
//            Location.setMaxHrCap(locationDetails.getMaxHrCap());
//        }
//        if (Integer.valueOf(locationDetails.getNo()) != null){
//            Location.setNo(locationDetails.getNo());
//        }
//        if (Double.valueOf(locationDetails.getProcessingCost()) != null){
//            Location.setProcessingCost(locationDetails.getProcessingCost());
//        }
//        if (Double.valueOf(locationDetails.getSla()) != null){
//            Location.setSla(locationDetails.getSla());
//        }
//        return ResponseEntity.status(HttpStatus.OK).body(locationRepository.save(Location));
//        })
//        .orElseGet(() -> {
//            locationDetails.setId(id);
//            return ResponseEntity.status(HttpStatus.OK).body(locationRepository.save(locationDetails));
//        });
//    }

    // Create Patch method for updating Location
    
    //Delete Location by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> delete(@PathVariable int id){
//        return locationRepository.findById(id)
//        .map(Location -> {
//            locationRepository.deleteById(id);
//            return ResponseEntity.ok().build();
//        })
//        .orElseGet(() -> ResponseEntity.notFound().build());
//    }




    // Partially Update Location by ID or Post new Location including checking if a double is null

    
//     //Delete Location by ID
//     @DeleteMapping("/{id}")
//     public ResponseEntity<?> delete(@PathVariable int id){
//         if(!locationRepository.existsById(id)){
//             return ResponseEntity.notFound().build();
//         }
//         locationRepository.deleteById(id);
//         return ResponseEntity.ok().build();
//     }
// }
//     @PutMapping("/{id}")
//     public ResponseEntity<?> update(@RequestBody Location locationDetails, @PathVariable int id){
//         return locationRepository.findById(id)
//         .map(Location -> {
//         if(locationDetails.getName() != null) Location.setName(locationDetails.getName());
//         if(locationDetails.getLatitude() != null) Location.setLatitude(locationDetails.getLatitude());
//         if(locationDetails.getLongitude() != null) Location.setLongitude(locationDetails.getLongitude());
//         if(locationDetails.getMaxHrCap() != null) Location.setMaxHrCap(locationDetails.getMaxHrCap());
//         if(locationDetails.getNo() != null) Location.setNo(locationDetails.getNo());
//         if(locationDetails.getProcessingCost() != null) Location.setProcessingCost(locationDetails.getProcessingCost());
//         if(locationDetails.getSla() != null) Location.setSla(locationDetails.getSla());
//         return ResponseEntity.status(HttpStatus.OK).body(locationRepository.save(Location));
//         })
//         .orElseGet(() -> {
//             locationDetails.setId(id);
//             return ResponseEntity.status(HttpStatus.OK).body(locationRepository.save(locationDetails));
//         });
//     }

    // @PutMapping("/{id}")
    // public ResponseEntity<?> update(@RequestBody Location locationDetails, @PathVariable int id){
    //     return locationRepository.findById(id)
    //     .map(Location -> {
    //     if(locationDetails.getName() != null)
    //         Location.setName(locationDetails.getName());
    //     if(locationDetails.getLatitude() != null)
    //         Location.setLatitude(locationDetails.getLatitude());
    //     if(locationDetails.getLongitude() != null)
    //         Location.setLongitude(locationDetails.getLongitude());
    //     if(locationDetails.getMaxHrCap() != null)
    //         Location.setMaxHrCap(locationDetails.getMaxHrCap());
    //     if(locationDetails.getNo() != null)
    //         Location.setNo(locationDetails.getNo());
    //     if(locationDetails.getProcessingCost() != null)
    //         Location.setProcessingCost(locationDetails.getProcessingCost());
    //     if(locationDetails.getSla() != null)
    //         Location.setSla(locationDetails.getSla());
    //     return ResponseEntity.status(HttpStatus.OK).body(locationRepository.save(Location));
    //     })
    //     .orElseGet(() -> {
    //         locationDetails.setId(id);
    //         return ResponseEntity.status(HttpStatus.OK).body(locationRepository.save(locationDetails));
    //     });
    // }

    
    //Delete Location by ID
    // @DeleteMapping("/{id}")
    // public ResponseEntity<?> delete(@PathVariable int id){
    //     if(!locationRepository.existsById(id))
    //         return ResponseEntity.notFound().build();
    //     locationRepository.deleteById(id);
    //     return ResponseEntity.ok().build();
    // }

    
    
    
    //Delete Location    
    // @DeleteMapping("/{id}")
    // public ResponseEntity<?> delete(@PathVariable(value = "id") Integer id) {
    //     Optional<Location> delLocation = locationRepository.findById(id);
    //     if(!delLocation.isPresent()) {
    //         return ResponseEntity.notFound().build();
    //     }

    //     locationRepository.deleteById(id);
    //     return ResponseEntity.ok().build();
    // }


    // Partial Data Update With Spring Data after checking ID

        
