
# Password Generator

## Description

This project aims to implement a website that generates a random password base on the following user input:

* Length of the password. Length must be between 8 a 128 characters
* Uppercase selection: Y/N
* Lowercase selection: Y/N
* Numeric selection: Y/N
* Special character selection: Y/N  

The user should select at least one character type. Using the users input a random password is generated and displayed on the webpage.

The website was implemented using JavaScript, HTML and CSS.

<i>-Special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~</i>

<a href="https://www.owasp.org/index.php/Password_special_characters" style="font-size:10px"><i>List of Password Special Characters from the OWASP Foundation </i></a>

## Installation
Source code can be downloaded at https://github.com/danielfloresd/secure-password-generator/archive/refs/heads/main.zip.
Git repository located at git@github.com:danielfloresd/secure-password-generator.git 

## Usage
To view the website, please visit https://danielfloresd.github.io/secure-password-generator/

<img src="./assets/images/website.PNG" width="400" />

## Credits

Started code provided by UofA bootcamp

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


<!-- 
User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page -->
