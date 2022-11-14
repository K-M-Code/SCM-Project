package fi.vamk.scm.server.entities;

import java.io.Serializable;
import javax.persistence.*;

import org.hibernate.annotations.DynamicUpdate;

import lombok.*;

/**
 * The persistent class for the location database table.
 * 
 */
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@DynamicUpdate
@Table (name = "location")
@NamedQuery(name="Location.findAll", query="SELECT l FROM Location l")
public class Location implements Serializable {
	private static final long serialVersionUID = 1L;


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
	private Integer id;
	
	@Column(name="latitude")
	private Double latitude;

	@Column(name="longitude")
	private Double longitude;

	@Column(name="max_hr_cap")
	private Double maxHrCap;
	

    @Column(name="name")
	private String name;
    

    @Column(name="no")
	private Integer no;

	@Column(name="processing_cost")
	private Double processingCost;


    @Column(name="sla")
	private Double sla;


//	public Location() {
//	}
//
//	public Integer getId() {
//		return this.id;
//	}
////
//	public void setId(Integer id) {
//		this.id = id;
//	}

//	public double getLatitude() {
//		return this.latitude;
//	}
//
//	public void setLatitude(double latitude) {
//		this.latitude = latitude;
//	}
//
//	public double getLongitude() {
//		return this.longitude;
//	}
//
//	public void setLongitude(double longitude) {
//		this.longitude = longitude;
//	}
//
//	public double getMaxHrCap() {
//		return this.maxHrCap;
//	}
//
//	public void setMaxHrCap(double maxHrCap) {
//		this.maxHrCap = maxHrCap;
//	}
//
//	public String getName() {
//		return this.name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public int getNo() {
//		return this.no;
//	}
//
//	public void setNo(int no) {
//		this.no = no;
//	}
//
//	public double getProcessingCost() {
//		return this.processingCost;
//	}
//
//	public void setProcessingCost(double processingCost) {
//		this.processingCost = processingCost;
//	}
//
//	public double getSla() {
//		return this.sla;
//	}
//
//	public void setSla(double sla) {
//		this.sla = sla;
//	}

}