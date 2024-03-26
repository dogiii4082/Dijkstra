package hanyang.shortcut.backend.Controller;

import hanyang.shortcut.backend.Entity.MongoDBTestModel;
import hanyang.shortcut.backend.Service.MongoDBTestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloController {

    MongoDBTestService mongoDBTestService;

    public HelloController(MongoDBTestService mongoDBTestService) {
        this.mongoDBTestService = mongoDBTestService;
    }

    @GetMapping("/api")
    public List<MongoDBTestModel> index() {
        System.out.println("@@@");
//        return "aa";
        return mongoDBTestService.getAllMongoDBTestModel();
    }
}
