package lk.Spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String id;
    private String name;
    private String address;
    private String mobile_Number;
    private String driving_License_Number;
    private String nIC_Number;
    private String email;
    private String password;
    private List<License_or_NIC_IMGDTO> imgs;
}
