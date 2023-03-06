package com.independantProject.independant;

import com.independantProject.independant.config.IndependentProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableConfigurationProperties(IndependentProperties.class)
@SpringBootApplication
public class IndependentApplication {

	public static void main(String[] args) {
		SpringApplication.run(IndependentApplication.class, args);
	}

//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/upload").allowedOrigins("http://localhost:8080");
//			}
//		};
//	}

}
