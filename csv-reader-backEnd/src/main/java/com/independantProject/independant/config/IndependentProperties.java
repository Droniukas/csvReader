package com.independantProject.independant.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(value = "cc")
public record IndependentProperties(String greetMessage, String about) {
}
