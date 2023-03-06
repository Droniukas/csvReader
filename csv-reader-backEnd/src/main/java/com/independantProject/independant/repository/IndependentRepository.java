package com.independantProject.independant.repository;

import com.independantProject.independant.model.Independent;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IndependentRepository extends ListCrudRepository<Independent, Integer> {

    List<Independent> findAllByNameContains(String name);

    @Query("""
            SELECT * FROM independent
            WHERE name = 'juozas'
            """)
    List<Independent> findBySpecificName(@Param("name") String name);
}
