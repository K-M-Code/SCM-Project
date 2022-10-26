package fi.vamk.scm.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fi.vamk.scm.server.entities.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {

}
