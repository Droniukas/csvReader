package com.independantProject.independant.model;

import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.annotation.Id;

import java.sql.Timestamp;
import java.time.LocalDateTime;


public record Independent(
        @Id
        Integer id,
        String name,
        String email,
        String phoneNum,
        String dateCreated

) {
}
