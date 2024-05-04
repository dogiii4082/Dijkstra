package hanyang.shortcut.backend.Entity;

import java.util.List;

public class Building {

    private String name;
    private List<String> portal;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getPortal() {
        return portal;
    }

    public void setPortal(List<String> portal) {
        this.portal = portal;
    }
}
