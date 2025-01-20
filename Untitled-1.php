<?php
CREATE TABLE Converts (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   getnum REAL NOT NULL,
   cfrist TEXT NOT NULL,
   csecand REAL NOT NULL,
   result TEXT NOT NULL
 );

CREATE TABLE Users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(255) NOT NULL,
   last_name VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL
);
 Connect to the database
$db = new mysqli('hostname', 'username', 'password', 'database_name');

 Check for errors
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

 Check if the form has been submitted
if (isset($_POST['register'])) {
     Get the form data
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];

     Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
         Insert the data into the database
        $stmt = $db->prepare("INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $first_name, $last_name, $email);
        $stmt->execute();

        if ($stmt->error) {
            echo "Error: " . $stmt->error;
        } else {
            echo "User registered successfully";
        }

      $stmt->close();
    }
}





?>