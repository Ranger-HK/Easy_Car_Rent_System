package lk.Spring.repo;

import lk.Spring.entity.Rent_Detail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentDetailsRepo extends JpaRepository<Rent_Detail,String> {
}
