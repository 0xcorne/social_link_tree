/* 
Created with passion by Corné Adema / 0xcorne
GitHub: https://github.com/0xcorne
*/

let profileName = 'Mo Samuels'; // change this variable if you want to change the profile name
let descriptionText = 'Fitness 🏋️‍♂️ , Lifestyle ✈️  & Nutrition 🌿'; // change this to change the bio
let buttonOneDescription = '🎥 YOUTUBE'; // change button 1 description
let buttonOneLink = 'https://www.youtube.com/c/mofitt/'; // change button 1 link
let buttonTwoDescription = '🎼 SPOTIFY'; // change button 2 description
let buttonTwoLink =
  'https://open.spotify.com/user/mosamuels?si=-dFKr6dOQtCKcNg-MXM9Qg'; // change button 2 link
let buttonThreeDescription = '📸 LIGHTROOM PRESETS'; // change button 3 description
let buttonThreeLink = 'https://mosamuelspresets.com/'; // change button 3 link
let buttonFourDescription = '🧢 HATS & NECKLACES'; // change button 4 description
let buttonFourLink = 'https://www.wobgear.com/'; // change button 4 link
let buttonFiveDescription = '🧠 MOTECH LABS'; // change button 5 description
let buttonFiveLink = 'https://www.motechlabs.co.uk/'; // change button 5 link
let buttonSixDescription = '👕 VANQUISH'; // change button 6 description
let buttonSixLink = 'http://vqfit.com/mo'; // change button 6 link

const nameElement = document.getElementById('title');
const descrElement = document.getElementById('sub_text');

const button1_descr = document.getElementById('button_1_descr');
const button1_link = (document.getElementById('button_1_link').href =
  buttonOneLink);

const button2_descr = document.getElementById('button_2_descr');
const button2_link = (document.getElementById('button_2_link').href =
  buttonTwoLink);

const button3_descr = document.getElementById('button_3_descr');
const button3_link = (document.getElementById('button_3_link').href =
  buttonThreeLink);

const button4_descr = document.getElementById('button_4_descr');
const button4_link = (document.getElementById('button_4_link').href =
  buttonFourLink);

const button5_descr = document.getElementById('button_5_descr');
const button5_link = (document.getElementById('button_5_link').href =
  buttonFiveLink);

const button6_descr = document.getElementById('button_6_descr');
const button6_link = (document.getElementById('button_6_link').href =
  buttonSixLink);

nameElement.innerHTML = profileName;
descrElement.innerHTML = descriptionText;
button1_descr.innerHTML = buttonOneDescription;
button2_descr.innerHTML = buttonTwoDescription;
button3_descr.innerHTML = buttonThreeDescription;
button4_descr.innerHTML = buttonFourDescription;
button5_descr.innerHTML = buttonFiveDescription;
button6_descr.innerHTML = buttonSixDescription;
