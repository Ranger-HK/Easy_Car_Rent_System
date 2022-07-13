package lk.Spring.service;

import lk.Spring.dto.DriverDTO;

import java.util.List;

public interface DriverService {

    void saveDriver (DriverDTO driverDTO);
    void deleteDriver (String id);
    void updateDriver (DriverDTO driverDTO);
    DriverDTO searchDriver(String id);
    List<DriverDTO> getAllDriver();

}
