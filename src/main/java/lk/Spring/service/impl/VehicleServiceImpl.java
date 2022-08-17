package lk.Spring.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.VehicleDTO;
import lk.Spring.entity.Customer;
import lk.Spring.entity.Vehicle;
import lk.Spring.repo.RatesRepo;
import lk.Spring.repo.VehicleRepo;
import lk.Spring.repo.Vehicle_TypeRepo;
import lk.Spring.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepo repo;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private RatesRepo ratesRepo;

    @Autowired
    private Vehicle_TypeRepo vehicleTypeRepo;



    @Override
    public void saveVehicle(VehicleDTO vehicleDTO) {
        if (!repo.existsById(vehicleDTO.getRegistration_Number())) {
            repo.save(mapper.map(vehicleDTO, Vehicle.class));
        }else {
            throw new RuntimeException("Vehicle Already Saved..");
        }
    }

    @Override
    public void deleteVehicle(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        }else {
            throw new RuntimeException("Delete Failed");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO vehicleDTO) {
        if (repo.existsById(vehicleDTO.getRegistration_Number())) {
            repo.save(mapper.map(vehicleDTO, Vehicle.class));
        }else {
            throw new RuntimeException("Update Failed");
        }
    }

    @Override
    public VehicleDTO searchVehicle(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), VehicleDTO.class);
        }else {
            throw new RuntimeException("Invalid Search");
        }
    }

    @Override
    public List<VehicleDTO> getAllVehiclesByStatus(String status) {
        return mapper.map(repo.searchVehiclesByStatus(status), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public List<VehicleDTO> getAllVehicles() {
        return mapper.map(repo.findAll(),new TypeToken<List<VehicleDTO>>(){
        }.getType());
    }

    @Override
    public long countByStatus(String status) {
        return repo.countVehiclesByStatus(status);
    }

    @Override
    public VehicleDTO vehicleDetails(String regNo) {
        return mapper.map(repo.findById(regNo), VehicleDTO.class);
    }

    @Override
    public void saveVehicleWithImg(String vehicle, MultipartFile file) {
     /*   VehicleDTO vehicleDTO = null;
        String path = null;
        try {
            vehicleDTO = objectMapper.readValue(vehicle, VehicleDTO.class);

            System.out.println(vehicleDTO);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        if (!repo.existsById(vehicleDTO.getRegistrationNumber())) {
            System.out.println("-------------------------");

            System.out.println("-------------------------");
            try {
                String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
                File uploadDir = new File(projectPath + "/uploads");
                uploadDir.mkdir();
                file.transferTo(new File(uploadDir.getAbsolutePath() + "/" +vehicleDTO.getRegistrationNumber()+"_"+  file.getOriginalFilename()));
                path = "uploads/" +vehicleDTO.getRegistrationNumber()+"_"+ file.getOriginalFilename();
            } catch (URISyntaxException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            CarImgDTO imgDTO = new CarImgDTO();
            imgDTO.setPath(path);
            ArrayList<CarImgDTO> carImgDTOS = new ArrayList<CarImgDTO>();
            carImgDTOS.add(imgDTO);
            System.out.println(imgDTO.getPath());
//            }
            vehicleDTO.setImgs(carImgDTOS);
            repo.save(mapper.map(vehicleDTO, Vehicle.class));

        } else {
            throw new RuntimeException("Vehicle Already Exist");
        }*/
    }
}
