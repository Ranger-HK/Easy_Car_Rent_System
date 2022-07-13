package lk.Spring.service.impl;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.RentDTO;
import lk.Spring.entity.Customer;
import lk.Spring.entity.Rent;
import lk.Spring.repo.RentRepo;
import lk.Spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RentServiceImpl implements RentService {

    @Autowired
    private RentRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveRent(RentDTO rentDTO) {
        if (!repo.existsById(rentDTO.getRent_Id())){
            repo.save(mapper.map(rentDTO, Rent.class));
        }else {
            throw new RuntimeException("Rent Already Added..");
        }
    }

    @Override
    public void deleteRent(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        }else {
            throw new RuntimeException("Delete Failed");
        }
    }

    @Override
    public void updateRent(RentDTO rentDTO) {
        if (repo.existsById(rentDTO.getRent_Id())) {
            repo.save(mapper.map(rentDTO, Rent.class));
        }else {
            throw new RuntimeException("Update Failed");
        }
    }

    @Override
    public RentDTO searchRent(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), RentDTO.class);
        }else {
            throw new RuntimeException("Invalid Search");
        }
    }

    @Override
    public List<RentDTO> getAllRent() {
        return mapper.map(repo.findAll(),new TypeToken<List<RentDTO>>(){
        }.getType());
    }


}
