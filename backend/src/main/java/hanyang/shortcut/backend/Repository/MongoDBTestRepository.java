package hanyang.shortcut.backend.Repository;

import hanyang.shortcut.backend.Entity.MongoDBTestModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

@Repository
public interface MongoDBTestRepository extends MongoRepository<MongoDBTestModel, String > {
}
