# Random Team Picker
This is the technical challenge and final project for the DevelopMe_ Fellowship coding bootcamp. 

## Table of contents
* [Brief](#brief)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Future Improvements](#future-improvements)

## Brief
The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5).
It's up to each student how they implement this, with JavaScript, PHP, as a web page, or as an app.

Optional advanced features might include:
* support for n-a-side, where a list of any length can be split into two teams
* support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly

## Screenshots
![Example screenshot](./images/screenshot.png)

## Technologies
* HTML5
* CSS / SASS / SASS-MQ
* JavaScript
* Git

## Setup
I chose to create the challenge as a website, so no setup is necessary - simply download the repository and open index.html in your browser.

## Features
The website features:
* A responsive design layout that has been optimised for four different device widths: mobile, tablet, desktop and wide desktop
* A textarea in which you can enter the names of your players
* A JavaScript Event Listener that fires when the first button is clicked
* JavaScript code blocks that take the value of the text area, picks a random index from the array, slices the array into two separate arrays, removes child nodes from the array to avoid duplications if the button is clicked twice, and a loop that uses insertAdjacentHTML to create new HTML tags to insert each name back into the HTML
* A second button that clears the contents of the text area

## Future Improvements
For the sake of ensuring I had a functional MVP within the time limit, I opted for simplicity to give myself enough time to complete the challenge. However, there are several things I would like to do to improve the product:
* Convert the website to a ReactJS app
* Create an API that would save the team names to a database, and a function that would let the user name their teams, and retrieve the teams from the database at any time
* Create support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly
* Create additional pages, for example a log in page where the user can save and retrieve their saved teams, create new teams and share them with friends