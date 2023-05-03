use kdt;

create table user (
                      id int not null primary key auto_increment,
                      userid varchar(20) not null,
                      name varchar(10) not null,
                      pw varchar(100) not null,
);

-- insert into user (userid, name, pw)
