package com.independantProject.independant.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;

//@Component
public class DataLoader implements CommandLineRunner {

    @Profile("production")
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Hello bitchees");
    }

//    @Bean
//    CommandLineRunner commandLineRunner(IndependentRepository repository) {
//        return args -> {
//            System.out.println("creating stuff");
//            Independent init = new Independent(null,
//                    "Juozas",
//                    "gmail@juozas",
//                    "123456",
//                    LocalDateTime.now().toString()
//                    );
//
//            repository.save(init);
//        };
//    }
}
