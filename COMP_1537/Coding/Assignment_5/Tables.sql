CREATE TABLE A01064647_user (
  StudentID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (StudentID),
  user_name VARCHAR(50),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email_address VARCHAR(50),
  password VARCHAR(50)
);

INSERT INTO A01064647_user (
  StudentID, user_name, first_name, last_name, email_address, password
  ) 
VALUES (
  1, 'jhutchinson', 'jayden', 'hutchinson', 'jhutchinson23@my.bcit.ca', "12345"
  );

CREATE TABLE A01064647_user_timeline (
  PostID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (PostID),
  StudentID int,
  FOREIGN KEY (StudentID) REFERENCES A01064647_user(StudentID),
  post_date VARCHAR(50),
  post_text VARCHAR(255),
  post_time VARCHAR(50),
  post_views VARCHAR(50)
);


INSERT INTO A01064647_user_timeline (
  PostID, StudentID, post_date, post_text, post_time, post_views
) 
VALUES (
  1, 1, '03/10/24', 
)