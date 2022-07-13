package lk.Spring.repo;


import lk.Spring.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepo extends JpaRepository<Staff,String> {

}
