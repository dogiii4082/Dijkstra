package hanyang.shortcut.backend.Service;

import hanyang.shortcut.backend.Entity.Building;
import hanyang.shortcut.backend.Entity.MongoDBTestModel;
import hanyang.shortcut.backend.Repository.MongoDBTestRepository;
import org.springframework.stereotype.Service;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MongoDBTestService {

    private final MongoDBTestRepository mongoDBTestRepository;

    public MongoDBTestService(MongoDBTestRepository mongoDBTestRepository) {
        this.mongoDBTestRepository = mongoDBTestRepository;
    }

    public List<Building> getAllMongoDBTestModel() {
        return mongoDBTestRepository.findAll();
    }

    public List<String> getBuildingList() {
        List<Building> buildings = mongoDBTestRepository.findAll();
        List<String> names = buildings.stream().map(Building::getName).distinct().sorted().collect(Collectors.toList());
//        return names;
        return names;
    }
}
