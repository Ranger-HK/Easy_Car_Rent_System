package lk.Spring.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.License_or_NIC_IMGDTO;
import lk.Spring.entity.Customer;
import lk.Spring.repo.CustomerRepo;
import lk.Spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private ObjectMapper objectMapper;


    @Override
    public void saveCustomer(CustomerDTO customerDTO) {
        if (!repo.existsById(customerDTO.getId())) {
            repo.save(mapper.map(customerDTO, Customer.class));
        } else {
            throw new RuntimeException("Customer Already Saved..");
        }
    }


    @Override
    public void deleteCustomer(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Delete Failed");
        }
    }


    @Override
    public void updateCustomer(CustomerDTO customerDTO) {
        if (repo.existsById(customerDTO.getId())) {
            repo.save(mapper.map(customerDTO, Customer.class));
        } else {
            throw new RuntimeException("Update Failed");
        }
    }


    @Override
    public CustomerDTO searchCustomer(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), CustomerDTO.class);
        } else {
            throw new RuntimeException("Invalid Search");
        }
    }


    @Override
    public List<CustomerDTO> getAllCustomer() {
        return mapper.map(repo.findAll(), new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }


    @Override
    public long countUsers() {
        return repo.count();
    }

    @Override
    public void saveCustomerWithImg(String customer, MultipartFile file) {
        CustomerDTO userDTO = null;
        String path = null;
        try {
            userDTO = objectMapper.readValue(customer, CustomerDTO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        if (!repo.existsById(userDTO.getId())) {
            try {
                String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
                File uploadDir = new File(projectPath + "/uploads");
                uploadDir.mkdir();
                file.transferTo(new File(uploadDir.getAbsolutePath() + "/" + userDTO.getId() + "_" + file.getOriginalFilename()));
                path = "uploads/" + userDTO.getId() + "_" + file.getOriginalFilename();
            } catch (URISyntaxException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            License_or_NIC_IMGDTO imgDTO = new License_or_NIC_IMGDTO();
            imgDTO.setDescription(path);
            ArrayList<License_or_NIC_IMGDTO> arrayList = new ArrayList<>();
            arrayList.add(imgDTO);
            System.out.println(imgDTO.getDescription());
            userDTO.setImgs(arrayList);
            repo.save(mapper.map(userDTO, Customer.class));
        } else {
            throw new RuntimeException("Customer Already Exist");
        }
    }

}
