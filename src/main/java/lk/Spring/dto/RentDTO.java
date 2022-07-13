package lk.Spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.Spring.entity.Rent_Detail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RentDTO {

    private String rent_Id;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    private String status;
    private String reason;

    private CustomerDTO customer;
    private List<Rent_Detail> rent_details;



}
