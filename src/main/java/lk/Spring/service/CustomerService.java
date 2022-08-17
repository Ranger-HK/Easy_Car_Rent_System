package lk.Spring.service;

import lk.Spring.dto.CustomerDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CustomerService {

    void saveCustomer(CustomerDTO customerDTO);

    void deleteCustomer(String id);

    void updateCustomer(CustomerDTO customerDTO);

    CustomerDTO searchCustomer(String id);

    List<CustomerDTO> getAllCustomer();

    long countUsers();

    void saveCustomerWithImg(String customer, MultipartFile file);

}
