package lk.Spring.service;

import lk.Spring.dto.RatesDTO;

import java.util.List;

public interface RatesService {

    void saveRate (RatesDTO ratesDTO);
    void deleteRate (String id);
    void updateRate (RatesDTO ratesDTO);
    RatesDTO searchRate(String id);
    List<RatesDTO> getAllRates();

}
