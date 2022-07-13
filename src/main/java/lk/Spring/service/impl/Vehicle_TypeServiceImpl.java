package lk.Spring.service.impl;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.Vehicle_TypeDTO;
import lk.Spring.entity.Customer;
import lk.Spring.entity.Vehicle_Type;
import lk.Spring.repo.CustomerRepo;
import lk.Spring.repo.Vehicle_TypeRepo;
import lk.Spring.service.Vehicle_TypeService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class Vehicle_TypeServiceImpl implements Vehicle_TypeService {


    @Autowired
    private Vehicle_TypeRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveVehicleType(Vehicle_TypeDTO Vehicle_typeDTO) {
        if (!repo.existsById(Vehicle_typeDTO.getVehicle_Type_Id())){
            repo.save(mapper.map(Vehicle_typeDTO, Vehicle_Type.class));
        }else {
            throw new RuntimeException("Vehicle Type Already Saved..");
        }
    }

    @Override
    public void deleteVehicleType(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        }else {
            throw new RuntimeException("Delete Failed");
        }
    }

    @Override
    public void updateVehicleType(Vehicle_TypeDTO vehicleTypeDTO) {
        if (repo.existsById(vehicleTypeDTO.getVehicle_Type_Id())) {
            repo.save(mapper.map(vehicleTypeDTO,Vehicle_Type.class));
        }else {
            throw new RuntimeException("Update Failed");
        }
    }

    @Override
    public Vehicle_TypeDTO searchVehicleType(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(),Vehicle_TypeDTO.class);
        }else {
            throw new RuntimeException("Invalid Search");
        }
    }

    @Override
    public List<Vehicle_TypeDTO> getAllVehicleTypes() {
        return mapper.map(repo.findAll(),new TypeToken<List<Vehicle_TypeDTO>>(){
        }.getType());
    }
}
