package hanyang.shortcut.backend.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api")
    public String index() {
        System.out.println("@@@");
        return "aaaaaaaaaaaaaa";
    }
}
