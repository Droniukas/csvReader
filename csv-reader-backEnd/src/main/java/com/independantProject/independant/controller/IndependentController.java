package com.independantProject.independant.controller;

import com.independantProject.independant.model.Independent;
import com.independantProject.independant.repository.IndependentRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@RequestMapping("/api/independent")
@RestController
@CrossOrigin
public class IndependentController {
    private final IndependentRepository repository;

    @Autowired
    public IndependentController(IndependentRepository repository) {
        this.repository = repository;
    }


    @GetMapping("")
    public List<Independent> findAll() {
        return repository.findAll();
    }

    @PostMapping("")
    public void add(@Valid @RequestBody Independent items) {
        Independent newItem = new Independent(null, items.name(), items.email(), items.phoneNum(), LocalDateTime.now().toString());
        repository.save(newItem);
    }

    @GetMapping("/{name}")
    public List<Independent> findByName(@PathVariable String name) {
        return repository.findAllByNameContains(name);
    }

    @GetMapping("/filter/{name}")
    public List<Independent> findBySpecificName(@PathVariable String name) {
        return repository.findBySpecificName(name);
    }

    @PutMapping("/edit/{id}")
    public void editEmailById(@PathVariable Integer id, @Valid @RequestBody Independent newItems) {
        if (repository.existsById(id)) {
            Independent item = repository.findById(id).get();
            Independent newItem = new Independent(null, item.name(), newItems.email(), item.phoneNum(), LocalDateTime.now().toString());
            repository.deleteById(id);
            repository.save(newItem);
        }
        else {
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "No content found");
        }

    }

    @DeleteMapping(value = "/delete/{id}")
    public void delete(@PathVariable Integer id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        }
        else {
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "No content found");
        }
    }



}

