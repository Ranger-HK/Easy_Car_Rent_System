package lk.Spring.service;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.StaffDTO;

import java.util.List;

public interface StaffService {

    void saveStaff (StaffDTO staffDTO);
    void deleteStaff (String id);
    void updateStaff (StaffDTO staffDTO);
    StaffDTO searchStaff(String id);
    List<StaffDTO> getAllStaff();

}
