CREATE TABLE A01064647_user (
  StudentID VARCHAR(50),
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
  "A01064647", 'jhutchinson', 'jayden', 'hutchinson', 'jhutchinson23@my.bcit.ca', "12345"
  );

CREATE TABLE A01064647_user_timeline (
  PostID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (PostID),
  StudentID VARCHAR(50),
  FOREIGN KEY (StudentID) REFERENCES A01064647_user(StudentID),
  post_date VARCHAR(50),
  post_text VARCHAR(255),
  post_time VARCHAR(50),
  post_views int
);


INSERT INTO A01064647_user_timeline (
  PostID, StudentID, post_date, post_text, post_time, post_views
) 
VALUES (
  1, "A01064647", '03/10/24', "I'm just about to start coding for assignment 5, let's hope I can get this thing working.", "4:50pm", 50
);

INSERT INTO A01064647_user_timeline (
  PostID, StudentID, post_date, post_text, post_time, post_views
) 
VALUES (
  2, "A01064647", '03/10/24', "I was able to get the Node server to contact the mysql database. It's a good day!", "6:00pm", 170
);

INSERT INTO A01064647_user_timeline (
  PostID, StudentID, post_date, post_text, post_time, post_views
) 
VALUES (
  3, "A01064647", '03/10/24', "Just finished up the post layout. Now to import this data into the html page with javascript", "7:17pm", 316
);

INSERT INTO A01064647_user_timeline (
  PostID, StudentID, post_date, post_text, post_time, post_views
) 
VALUES (
  4, "A01064647", '03/11/24', "I just got the mysql data to display onto the html web page. Now I just need to add in the rest of the data to the other buttons", "2:56pm", 546
);

INSERT INTO A01064647_user_timeline (
  PostID, StudentID, post_date, post_text, post_time, post_views
) 
VALUES (
  5, "A01064647", '03/11/24', "Just got all the buttons working and integrating the mysql with the html. Just about done.", "2:59pm", 803
);