
//Initalize variables with associated propoerties for DOM Construction

var experienceSection = document.createElement('div');

var educationSection = document.createElement('div');



var logoAPEGA = document.createElement('img');
logoAPEGA.src = 'img/logoAPEGA.png';
logoAPEGA.className = 'licenseLogo';
logoAPEGA.alt = 'APEGA Logo';

var licenseAPEGA = document.createElement('div');
licenseAPEGA.appendChild(logoAPEGA);

var licenseSection = document.createElement('div');
licenseSection.appendChild(logoAPEGA);

var main = document.querySelector('main');
main.appendChild(licenseSection);

// container.className = 'container';
// var DIKUWLogo = document.createElement('img');
// DIKUWLogo.src = 'img/DIKUW_Logo_B_RGB_1400.png';
// DIKUWLogo.className = 'calcLogo';
// DIKUWLogo.alt = "DIKUW inc. Logo";
// var dsplay = document.createElement('div');
// dsplay.className = 'dsplay';
// var dsply1 = document.createElement('div');
// dsply1.className = 'dsply1';
// dsply1.textContent = '';
// var dsply2 = document.createElement('div');
// dsply2.className = 'dsply2';
// dsply2.textContent = '0';
// var btnContainer = document.createElement('div');
// btnContainer.className = 'buttonContainer';
// var numPad = document.createElement('div');
// numPad.className = 'numPad';
// var numRow1 = document.createElement('div');
// numRow1.ClassName = 'numRow'


// main.append(container, experience, education, license);