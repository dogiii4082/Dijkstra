package hanyang.shortcut.backend.Repository;

import hanyang.shortcut.backend.Entity.Building;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MongoDBTestRepository extends MongoRepository<Building, String > {
    List<Building> findByName(String name);
}
