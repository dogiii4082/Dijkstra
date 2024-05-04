package hanyang.shortcut.backend.Controller;

import hanyang.shortcut.backend.Entity.Building;
import hanyang.shortcut.backend.Entity.MongoDBTestModel;
import hanyang.shortcut.backend.Repository.MongoDBTestRepository;
import hanyang.shortcut.backend.Service.MongoDBTestService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {

    private MongoDBTestService mongoDBTestService;

    public HelloController(MongoDBTestService mongoDBTestService) {
        this.mongoDBTestService = mongoDBTestService;
    }

    @GetMapping("/api")
    public List<Building> index() {
        return mongoDBTestService.getAllMongoDBTestModel();
    }

    @GetMapping("/api/building_list")
    public List<String> getBuildingList() {
        System.out.println("@@@@@@");
        return mongoDBTestService.getBuildingList();
    }

    @GetMapping("/")
    public String test() {
        return "QQQ";
    }
}
