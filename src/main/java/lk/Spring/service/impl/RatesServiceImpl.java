package lk.Spring.service.impl;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.RatesDTO;
import lk.Spring.entity.Customer;
import lk.Spring.entity.Rates;
import lk.Spring.repo.RatesRepo;
import lk.Spring.service.RatesService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RatesServiceImpl implements RatesService {

    @Autowired
    private RatesRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveRate(RatesDTO ratesDTO) {
        if (!repo.existsById(ratesDTO.getRate_Id())){
            repo.save(mapper.map(ratesDTO, Rates.class));
        }else {
            throw new RuntimeException("Rate Already Saved..");
        }
    }

    @Override
    public void deleteRate(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        }else {
            throw new RuntimeException("Delete Failed");
        }
    }

    @Override
    public void updateRate(RatesDTO ratesDTO) {
        if (repo.existsById(ratesDTO.getRate_Id())) {
            repo.save(mapper.map(ratesDTO, Rates.class));
        }else {
            throw new RuntimeException("Update Failed");
        }
    }

    @Override
    public RatesDTO searchRate(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), RatesDTO.class);
        }else {
            throw new RuntimeException("Invalid Search");
        }
    }

    @Override
    public List<RatesDTO> getAllRates() {
        return mapper.map(repo.findAll(),new TypeToken<List<RatesDTO>>(){
        }.getType());
    }
}
