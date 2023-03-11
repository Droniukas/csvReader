package com.independantProject.independant.controller;

import com.independantProject.independant.model.Independent;
import com.independantProject.independant.repository.IndependentRepository;
import com.univocity.parsers.common.record.Record;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;
import jakarta.validation.Valid;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

    @GetMapping("/{name}")
    public List<Independent> findByName(@PathVariable String name) {
        return repository.findAllByNameContains(name);
    }


    @PutMapping("/edit/{id}")
    public void editById(@PathVariable Integer id, @Valid @RequestBody Independent newItem) {
        if (repository.existsById(id)) {
            Independent oldItem = repository.findById(id).get();
            if (newItem.name() != null && newItem.email() == null && newItem.phoneNum() == null) {
                System.out.println("CHANGING NAME");
                Independent resItem = new Independent(id,
                        newItem.name(),
                        oldItem.email(),
                        oldItem.phoneNum(),
                        LocalDateTime.now().toString());
                repository.save(resItem);
                return;
            }

            if (newItem.name() == null && newItem.email() != null && newItem.phoneNum() == null) {
                System.out.println("CHANGING EMAIL");
                Independent resItem = new Independent(id,
                        oldItem.name(),
                        newItem.email(),
                        oldItem.phoneNum(),
                        LocalDateTime.now().toString());
                repository.save(resItem);
                return;
            }
            if (newItem.name() == null && newItem.email() == null && newItem.phoneNum() != null) {
                System.out.println("CHANGING PHONE NUM");
                Independent resItem = new Independent(id,
                        oldItem.name(),
                        oldItem.email(),
                        newItem.phoneNum(),
                        LocalDateTime.now().toString());
                repository.save(resItem);
                return;
            }
            else {
                System.out.println("ALL VALUES OR MORE THAN ONE NOT NULL, CHANGING ALL");
                Independent resItem = new Independent(id,
                        newItem.name(),
                        newItem.email(),
                        newItem.phoneNum(),
                        LocalDateTime.now().toString());
                repository.save(resItem);
            }
            System.out.println("successful put request");
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

    @DeleteMapping(value = "/deleteAll")
    public void deleteAll() {
        repository.deleteAll();
    }


    @PostMapping("")
    public void add(@Valid @RequestBody Independent items) {
        Independent newItem = new Independent(null, items.name(), items.email(), items.phoneNum(), LocalDateTime.now().toString());
        repository.save(newItem);
        System.out.println("Successful post request");
    }

    @PostMapping("/uploadFile")
    public String uploadData(@RequestPart("file") MultipartFile csvFile) throws Exception {
        InputStream inputStream = csvFile.getInputStream();

        CsvParserSettings setting = new CsvParserSettings();
        CsvParser parser = new CsvParser(setting);

        List<Record> parseAllRecords = parser.parseAllRecords(inputStream);
        convertToModelObj(parseAllRecords);

        return "Success";
    }
    private void convertToModelObj(List<Record> RecordList) {
        RecordList.forEach(record -> {
            Independent item = new Independent(
                    null,
                    record.getString(0),
                    record.getString(1),
                    record.getString(2),
                    LocalDateTime.now().toString());
            repository.save(item);
        });
    }


//    FOR TESTING
//    @PostMapping(value = "/uploadFile")
//    public void testData(@RequestPart("file") MultipartFile csvFile) throws Exception {
//        InputStream inputStream = csvFile.getInputStream();
//        Scanner s = new Scanner(inputStream).useDelimiter("\\A");
//        String result = s.hasNext() ? s.next() : "";
//        System.out.println(result);
//    }




}

