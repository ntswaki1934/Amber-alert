Amber Alert Web Application
This is a web application designed to facilitate the reporting and viewing of missing persons, contact local police stations, and manage user authentication. The application features pages for reporting missing persons, contacting police, viewing missing persons by location, user registration, login, and password reset.

Table of Contents
Project Overview
Features
Installation
Usage
File Structure
Deployment
Contributing
License
Project Overview
The Amber Alert Web Application is built to assist in the timely reporting and dissemination of information regarding missing persons. It includes functionalities for users to report missing persons, contact local authorities, and view reports by location. User authentication features such as registration, login, and password reset are also implemented.

Features
Report Missing Persons: Users can fill out a form to report missing persons, including uploading a picture and providing details.
Contact Local Police: Users can contact local police stations by providing their details and selecting a location.
View Missing Persons: Users can view reported missing persons by location.
User Authentication: Users can sign up, log in, and reset their passwords.
Responsive Design: The application is designed to be responsive and accessible on various devices.
Installation
To set up the project locally, follow these steps:

Clone the repository:


git clone https://github.com/ntswaki1934/amber-alert-web-app.git
Navigate to the project directory:


cd amber-alert-web-app
Open the index.html file in your web browser to view the application.

Usage
Reporting a Missing Person
Navigate to the Report Missing Person page.
Fill out the form with the person's name, last seen location, description, and upload a picture.
Submit the form.
Contacting Local Police
Navigate to the Contact Local Police Station page.
Fill out the contact form with your details and select the location.
Submit the form.
Viewing Missing Persons
Navigate to the View Missing Persons by Location page.
Select the desired location to view the list of missing persons.
User Authentication
Sign Up: Navigate to the Sign-Up page, fill out the registration form, and submit.
Log In: Navigate to the Log In page, enter your username and password, and submit.
Reset Password: Navigate to the Reset Password page, enter your email to receive an OTP, and reset your password.
File Structure
perl
Copy code
amber-alert-web-app/
│
├── index.html
├── report-missing.html
├── contact-police.html
├── view-missing.html
├── about-us.html
├── sign-up.html
├── log-in.html
├── reset-password.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── script.js
│   ├── login-script.js
│   └── reset-password-script.js
│
├── images/
│   ├── child-pulled-from-river.jpg
│   └── ...
│
└── README.md

