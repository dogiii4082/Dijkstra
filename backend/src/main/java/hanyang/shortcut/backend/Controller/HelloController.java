package hanyang.shortcut.backend.Controller;

import hanyang.shortcut.backend.Entity.Building;
import hanyang.shortcut.backend.Service.MongoDBTestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {

    private final MongoDBTestService mongoDBTestService;

    public HelloController(MongoDBTestService mongoDBTestService) {
        this.mongoDBTestService = mongoDBTestService;
    }

    @GetMapping("/api")
    public List<Building> index() {
        return mongoDBTestService.getAllMongoDBTestModel();
    }

    @GetMapping("/api/building_list")
    public List<String> getBuildingList() {
        return mongoDBTestService.getBuildingList();
    }

    @PostMapping("/api/form")
    public ResponseEntity form(@RequestBody Building building) {
        mongoDBTestService.form(building);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/api/portal")
    public List<Building> getPortal(@RequestParam("name") String name) {
        return mongoDBTestService.findPortal(name);
    }
}
