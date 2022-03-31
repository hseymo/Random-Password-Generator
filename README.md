# Random-Password-Generator
LICENSE: [GNU Public License](./LICENSE)

INSTALLATION: Fork this repository and clone it to your local source using git cline commands. 

PACKAGES: None.

DESCRIPTION: 
This is a project that uses JavaScript to build a password generator. I built off some HTML, CSS, and Javascript that was provided through the University of Washington Web Development Bootcamp. I solely modified and contributed to the Javascript file. 

The goal of this project is to generate a random password based on user preferences. When the user clicks on the "generate password" button, they are first prompted to input the desired password length, with the criteria that it should be a number between 8 and 128. There is a validity check that ensures their input is an integer and within the range mentioned above. 

Next the user is prompted to answer 'yes' or 'no' to if they want to include: numbers, lowercase letters, capital letters, and/or special characters. There is a validity check to ensure they selected at least one of these options to ensure there is content to build the password from.

After all prompts are answered, the generator builds a character bank based on the desired type(s) of characters. It then randomizes an array from the bank in the length desired by the user. It then validates each criteria that the user provided; if it fails any criteria it re-randomizes and re-checks the criteria. Once criteria are met, it joins together it's parts and converts it to a string. Finally it displays the password as an alert to the webpage. 

Please check out this project by clicking [here](page url).

APPLICATION SCREENSHOTS:
Prompt for character length:
![Screenshot](local URL)

One example of a prompt for character types to include:
![Screenshot](local URL)

Error Alerts:
![Screenshot](local URL)
![Screenshot](local URL)

Example final password generation: 
![Screenshot](local URL)

ACKNOWLEDGMENTS: Thank you to University of Washington Web Development Bootcamp for teaching me the skills to create this project as well as providing the starter code. 

QUESTIONS: If you have any questions, please contact me on Github at [hseymo](https://githup.com/hseymo) or by [email](mailto:fake@gmail.com).