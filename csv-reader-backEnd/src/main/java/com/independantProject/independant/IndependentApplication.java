package com.independantProject.independant;

import com.independantProject.independant.config.IndependentProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties(IndependentProperties.class)
@SpringBootApplication
public class IndependentApplication {

	public static void main(String[] args) {
		SpringApplication.run(IndependentApplication.class, args);
	}

}
