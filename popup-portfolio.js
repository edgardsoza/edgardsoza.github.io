const projects = [
  {
    id: 'popup-project-1',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/project-javascript-html.jpg',
    imageportfolio: 'images/project-javascript-html.jpg',
    title: 'Using Javascript to populate HTML.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    techsdesktop: ['HTML', 'CSS', 'Javascript'],
    content: 'This project is about populating data based on click events on user side. Javascript was used to populate the popup windows and to handle the onclick events to open and close the popup',
    seelive: 'See Live',
    seesource: 'See Source',
    sourcelink: 'https://github.com/edgardsoza/capstone-Project',
    livelink: 'https://extraordinary-zabaione-0dc518.netlify.app/',
  },

  {
    id: 'popup-project-2',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/math_magicians_project_reactjs.JPG',
    imageportfolio: 'images/math_magicians_project_reactjs.JPG',
    title: 'React.js and APIs to create a calculator and show quotes.',
    techs: ['HTML', 'CSS', 'JavaScript', 'React.js', 'APIs'],
    techsdesktop: ['HTML', 'CSS', 'JavaScript', 'React.js', 'APIs'],
    content: 'Math Magicians project has the objective to understand how to use medium-fidelity wireframes to create a UI. I will start using React to create a SPA that allow users to make simple calculations and read a random math-related quote.',
    seelive: 'See Live',
    seesource: 'See Source',
    sourcelink: 'https://github.com/edgardsoza/math-magicians',
    livelink: 'https://math-magicians-edgardsoza.onrender.com/',
  },

  {
    id: 'popup-project-3',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/portfolioimg.png',
    imageportfolio: 'images/imageportfolio.png',
    title: 'Financial company information',
    techs: ['Ruby on Rails', 'css', 'JavaScript'],
    techsdesktop: ['Ruby on Rails', 'CSS', 'JavaScript', ],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    seelive: 'See Live',
    seesource: 'See Source',
    sourcelink: 'https://github.com/edgardsoza/stocks-react-capstone-project',
    livelink: 'https://warm-clafoutis-f8deb6.netlify.app/',
  },

  {
    id: 'popup-project-4',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/space_traveler_react.JPG',
    imageportfolio: 'images/space_traveler_react.JPG',
    title: 'Using React and Redux to manage different states in an app.',
    techs: ['CSS', 'JavaScript', 'React', 'Redux', 'API', 'HTML'], 
    techsdesktop: ['CSS', 'JavaScript', 'React', 'Redux', 'API', 'HTML'], 
    content: 'This is a web application that allows users to view information about rockets, missions, and dragons from SpaceX. Users can join missions and reserve rockets and dragons.',
    seelive: 'See Live',
    seesource: 'See Source',
    sourcelink: 'https://github.com/edgardsoza/space-traveler-hub',
    livelink: 'https://edgardsoza.github.io/space-traveler-hub/',
  },

  {
    id: 'popup-project-5',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/stocks_react_redux.JPG',
    imageportfolio: 'images/stocks_react_redux.JPG',
    title: 'Financial company information',
    techs: ['CSS', 'JavaScript', 'React', 'Redux', 'API', 'HTML'], 
    techsdesktop: ['CSS', 'JavaScript', 'React', 'Redux', 'API', 'HTML'], 
    content: 'This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that I will create making use of React and Redux.',
    seelive: 'See Live',
    seesource: 'See Source',
    sourcelink: 'https://github.com/edgardsoza/OOP-school-library',
    livelink: 'No-link',
  },

  {
    id: 'popup-project-6',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/personal-billing-ruby-app.JPG',
    imageportfolio: 'images/personal-billing-ruby-app.JPG',
    title: 'Using Ruby on Rails and PSQL to create transaction records.',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'PSQL'],
    techsdesktop: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'PSQL'],
    content: 'This RoR capstone project is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    seelive: 'See Live',
    seesource: 'See Source',
    sourcelink: 'https://github.com/edgardsoza/personal-billing',
    livelink: 'https://personal-billing.onrender.com/splash',
  },
];

const popupArray = [];

for (let i = 0; i < projects.length; i += 1) {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {
    const popup = document.createElement('div');
    popup.classList.add('closingpopup');
    popup.classList.add('popuppt');

    const projectcard = document.createElement('div');
    projectcard.classList.add('projectcard');
    popup.appendChild(projectcard);

    const projectimage = document.createElement('img');
    projectimage.src = projects[i].image;
    projectimage.classList.add('imagepopup');

    const closeButton = document.createElement('img');
    closeButton.src = projects[i].closeBut;
    closeButton.classList.add('closingbutton');

    const imageandclosing = document.createElement('div');
    imageandclosing.classList.add('imageandclosing');
    imageandclosing.append(closeButton, projectimage);

    projectcard.append(imageandclosing);

    const title = document.createElement('h3');
    title.textContent = projects[i].title;
    title.classList.add('titleproject');

    projectcard.append(title);

    const techs = document.createElement('ul');
    techs.classList.add('techs');

    for (let j = 0; j < projects[i].techs.length; j += 1) {
      const li = document.createElement('li');
      li.textContent = projects[i].techs[j];
      li.classList.add('liproject');
      techs.append(li);
    }

    const leftblock = document.createElement('div');
    leftblock.classList.add('leftblock');

    const paragraph = document.createElement('p');
    paragraph.textContent = projects[i].content;
    paragraph.classList.add('paragraph');
    paragraph.style.width = 'auto';

    leftblock.append(techs, paragraph);

    projectcard.append(leftblock);

    const bottomblock = document.createElement('div');
    bottomblock.style.display = 'flex';
    bottomblock.style.flexDirection = 'row';
    projectcard.append(bottomblock);
    bottomblock.classList.add('bottomblock');

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const liveimage = document.createElement('img');
    liveimage.src = 'images/seelive.png';
    const livebutton = document.createElement('button');
    const aelement2 = document.createElement('a');
    aelement2.setAttribute('href', projects[i].livelink);
    livebutton.append(aelement2, liveimage);
    aelement2.textContent = projects[i].seelive;
    livebutton.setAttribute('type','button');
    aelement2.classList.add('aelement');
    livebutton.classList.add('livebuttonport');
    buttons.append(livebutton);

    const seesourceimage = document.createElement('img');
    seesourceimage.src = 'images/seesource.png';
    const sourcebutton = document.createElement('button');
    const aelement = document.createElement('a');
    aelement.textContent = projects[i].seesource;
    aelement.setAttribute('href', projects[i].sourcelink);
    sourcebutton.append(aelement, seesourceimage);
    sourcebutton.setAttribute('type', 'button');
    aelement.classList.add('aelement');
    sourcebutton.classList.add('sourcebuttonport');
    buttons.append(sourcebutton);

    bottomblock.append(buttons);

    popupArray.push(popup);

    document.querySelector('body').appendChild(popup);

    closeButton.addEventListener('click', () => { popupArray[i].classList.remove('openPopup'); popupArray[i].classList.add('closingpopup'); });
    const projectbutton = document.querySelectorAll('.projectbutton');
    projectbutton[i].addEventListener('click', () => { popupArray[i].classList.remove('closingpopup'); popupArray[i].classList.add('openPopup'); });
  } else {
    const popup = document.createElement('div');
    popup.classList.add('closingpopup');
    popup.classList.add('popuppt');

    const projectcard = document.createElement('div');
    projectcard.classList.add('projectcard');
    popup.appendChild(projectcard);

    const closeButton = document.createElement('img');
    closeButton.src = projects[i].closedesktop;
    closeButton.classList.add('closingbutton');
    projectcard.append(closeButton);

    const projectimage = document.createElement('img');
    projectimage.src = projects[i].imageportfolio;
    projectimage.classList.add('imagepopup');
    
    const imageandclosing = document.createElement('div');
    imageandclosing.classList.add('imageandclosing');
    imageandclosing.append( closeButton, projectimage);

    projectcard.append(imageandclosing);

    const title = document.createElement('h3');
    title.textContent = projects[i].title;
    title.classList.add('titleproject');

    const rightblock = document.createElement('div');
    rightblock.style.display = 'flex';
    rightblock.style.flexDirection = 'row';
    projectcard.append(rightblock);
    rightblock.classList.add('rightblock');

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const liveimage = document.createElement('img');
    liveimage.src = 'images/seelive.png';
    const livebutton = document.createElement('button');
    const aelement2 = document.createElement('a');
    aelement2.setAttribute('href', projects[i].livelink);
    livebutton.setAttribute('type', 'button');
    aelement2.classList.add('aelement');
    aelement2.textContent = projects[i].seelive;
    livebutton.append(aelement2, liveimage);
    livebutton.classList.add('livebuttonport');
    buttons.append(livebutton);

    const seesourceimage = document.createElement('img');
    seesourceimage.src = 'images/seesource.png';
    const sourcebutton = document.createElement('button');
    sourcebutton.append(seesourceimage);
    const aelement = document.createElement('a');
    aelement.setAttribute('href', projects[i].sourcelink);
    sourcebutton.append(aelement, seesourceimage);
    sourcebutton.setAttribute('type', 'button');
    aelement.textContent = projects[i].seesource;
    aelement.classList.add('aelement');
    sourcebutton.classList.add('sourcebuttonport');
    buttons.append(sourcebutton);
    rightblock.append(buttons);

    const bigblock = document.createElement('div');
    bigblock.append(title, rightblock);
    bigblock.classList.add('bigblock');

    projectcard.append(bigblock);

    const techs = document.createElement('ul');
    techs.classList.add('techs');

    for (let j = 0; j < projects[i].techsdesktop.length; j += 1) {
      const li = document.createElement('li');
      li.textContent = projects[i].techsdesktop[j];
      li.classList.add('liproject');
      techs.append(li);
    }

    const leftblock = document.createElement('div');
    leftblock.classList.add('leftblock');

    const paragraph = document.createElement('p');
    paragraph.textContent = projects[i].content;
    paragraph.classList.add('paragraph');
    paragraph.style.width = 'auto';

    leftblock.append(techs, paragraph);
    
    projectcard.append(leftblock);

    popupArray.push(popup);

    document.querySelector('body').appendChild(popup);

    closeButton.addEventListener('click', () => { popupArray[i].classList.remove('openPopup'); popupArray[i].classList.add('closingpopup'); });
    const projectbutton = document.querySelectorAll('.projectbutton');
    projectbutton[i].addEventListener('click', () => { popupArray[i].classList.remove('closingpopup'); popupArray[i].classList.add('openPopup'); });
  }
}