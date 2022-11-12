package fi.vamk.scm.server.entities;

import java.io.Serializable;
import javax.persistence.*;

import org.hibernate.annotations.DynamicUpdate;

import lombok.*;


/**
 * The persistent class for the truck database table.
 * 
 */
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@DynamicUpdate
@Table (name = "truck")
@NamedQuery(name="Truck.findAll", query="SELECT t FROM Truck t")
public class Truck implements Serializable {
	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
	private int id;

	@Column(name="licence_plate")
	private String licencePlate;

	@Column(name="name")
	private String name;


}