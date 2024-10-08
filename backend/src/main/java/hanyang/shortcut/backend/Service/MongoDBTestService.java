package hanyang.shortcut.backend.Service;

import hanyang.shortcut.backend.Entity.Building;
import hanyang.shortcut.backend.Repository.MongoDBTestRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MongoDBTestService {

    private final MongoDBTestRepository mongoDBTestRepository;

    public MongoDBTestService(MongoDBTestRepository mongoDBTestRepository) {
        this.mongoDBTestRepository = mongoDBTestRepository;
    }
//
//    public List<Building> getAllMongoDBTestModel() {
//        return mongoDBTestRepository.findAll();
//    }
//
//    public List<String> getBuildingList() {
//        List<Building> buildings = mongoDBTestRepository.findAll();
//        List<String> names = buildings.stream().map(Building::getName).distinct().sorted().collect(Collectors.toList());
//        return names;
//    }
//
//    public void form(Building building) {
//        mongoDBTestRepository.save(building);
//    }
//
//    public List<Building> findPortal(String name) {
//        List<Building> buildings = mongoDBTestRepository.findByName(name);
//        return buildings;
//    }

    @Cacheable(value = "buildingsCache")
    public List<Building> getAllMongoDBTestModel() {
        return mongoDBTestRepository.findAll();
    }

    // 건물 이름 목록 가져오기 - 캐시 활용
    @Cacheable(value = "buildingNamesCache")
    public List<String> getBuildingList() {
        List<Building> buildings = mongoDBTestRepository.findAll();
        return buildings.stream().map(Building::getName).distinct().sorted().collect(Collectors.toList());
    }

    // 새로운 빌딩 정보 저장 시 캐시 삭제
    @CacheEvict(value = "buildingsCache", allEntries = true)
    public void form(Building building) {
        mongoDBTestRepository.save(building);
    }

    // 특정 이름의 건물 조회 - 캐시 활용
    @Cacheable(value = "buildingPortalCache", key = "#name")
    public List<Building> findPortal(String name) {
        return mongoDBTestRepository.findByName(name);
    }
}
