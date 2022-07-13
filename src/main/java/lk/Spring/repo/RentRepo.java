package lk.Spring.repo;

import lk.Spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepo extends JpaRepository<Rent,String> {
}
