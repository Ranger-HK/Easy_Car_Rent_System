package lk.Spring.dto;


import lk.Spring.entity.Rates;
import lk.Spring.entity.Vehicle_Type;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class VehicleDTO {

    private String registration_Number;
    private String colour;
    private int no_Of_Passengers;
    private String transmission_Type;
    private String brand;
    private String status;
    private String fuel_Type;
    private double running_Km;
    private Rates rates;
    private Vehicle_Type vehicleType;

}
