package lk.Spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriverDTO {

    private String driverId;
    private String name;
    private String address;
    private String mobileNo;
    private String email;
    private String password;
    private String status;

}
