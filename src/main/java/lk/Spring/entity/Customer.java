package lk.Spring.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@ToString
public class Customer {

    @Id
    private String id;
    private String name;
    private String address;
    private String mobile_Number;
    private String driving_License_Number;
    private String  nIC_Number;
    private String email;
    private String password;


    @OneToMany(targetEntity = License_or_NIC_IMG.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "customerID", referencedColumnName = "id")
    private List<License_or_NIC_IMG> imgs;


}
