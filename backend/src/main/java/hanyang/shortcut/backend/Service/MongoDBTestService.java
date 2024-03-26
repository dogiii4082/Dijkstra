package hanyang.shortcut.backend.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import hanyang.shortcut.backend.Entity.MongoDBTestModel;
import hanyang.shortcut.backend.Repository.MongoDBTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MongoDBTestService {

    MongoDBTestRepository mongoDBTestRepository;

    public MongoDBTestService(MongoDBTestRepository mongoDBTestRepository) {
        this.mongoDBTestRepository = mongoDBTestRepository;
    }

    public List<MongoDBTestModel> getAllMongoDBTestModel() {
        return mongoDBTestRepository.findAll();
    }
}
