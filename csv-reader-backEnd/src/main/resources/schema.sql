CREATE TABLE IF NOT EXISTS Independent (
    id INTEGER AUTO_INCREMENT,
    name varchar(255),
    email varchar(255) NOT NULL,
    phone_num varchar(255) NOT NULL,
    date_created TIMESTAMP,
    primary key (id)
);

--ALTER TABLE Independent
--add constraint table_date default getDate() for dateCreated;

--INSERT INTO Content(title, desc, status, content_type, date_created)
--VALUES ('my first something', 'no desc here', 'IN_PROGRESS', 'ARTICLE', current_timestamp());


--@Id
--Integer id,
--String name,
--String email,
--String phoneNum,
--LocalDateTime dateAdded