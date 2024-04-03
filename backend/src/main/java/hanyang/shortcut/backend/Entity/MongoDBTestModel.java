package hanyang.shortcut.backend.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class MongoDBTestModel {

    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
