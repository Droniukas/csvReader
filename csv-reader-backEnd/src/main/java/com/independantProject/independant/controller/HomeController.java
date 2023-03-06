package com.independantProject.independant.controller;

import com.independantProject.independant.config.IndependentProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    private final IndependentProperties properties;

    public HomeController(IndependentProperties properties) {
        this.properties = properties;
    }

    @GetMapping("/")
    public IndependentProperties home() {
        return properties;
    }


//    @Value("${cc.greetMessage: Default greetMessage}")
//    private String greetMessage;
//
//    @Value("${cc.about}")
//    private String about;
//
//    @GetMapping("/")
//    public String home() {
//        return null;
////        return Map.of("about", about,"greetMessage", greetMessage);
//    }
}
