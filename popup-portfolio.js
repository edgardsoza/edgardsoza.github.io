const projects = [
  {
    id: 'popup-project-1',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/portfolioimg.png',
    imageportfolio: 'images/project1.jpg',
    title: 'Keeping track of hundreds of components',
    techs: ['Ruby on Rails', 'css', 'JavaScript'],
    techsdesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    seelive: 'See Live',
    seesource: 'See Source',
  },

  {
    id: 'popup-project-2',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/portfolioimg.png',
    imageportfolio: 'images/imageportfolio.png',
    title: 'Keeping track of hundreds of components',
    techs: ['Ruby on Rails', 'css', 'JavaScript'],
    techsdesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    seelive: 'See Live',
    seesource: 'See Source',
  },

  {
    id: 'popup-project-3',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/portfolioimg.png',
    imageportfolio: 'images/imageportfolio.png',
    title: 'Keeping track of hundreds of components',
    techs: ['Ruby on Rails', 'css', 'JavaScript'],
    techsdesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    seelive: 'See Live',
    seesource: 'See Source',
  },

  {
    id: 'popup-project-4',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/portfolioimg.png',
    imageportfolio: 'images/imageportfolio.png',
    title: 'Keeping track of hundreds of components',
    techs: ['Ruby on Rails', 'css', 'JavaScript'],
    techsdesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    seelive: 'See Live',
    seesource: 'See Source',
  },

  {
    id: 'popup-project-5',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/portfolioimg.png',
    imageportfolio: 'images/imageportfolio.png',
    title: 'Keeping track of hundreds of components',
    techs: ['Ruby on Rails', 'css', 'JavaScript'],
    techsdesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    seelive: 'See Live',
    seesource: 'See Source',
  },

  {
    id: 'popup-project-6',
    closeBut: 'images/cancelicon.png',
    closedesktop: 'images/closedesktop.png',
    image: 'images/portfolioimg.png',
    imageportfolio: 'images/imageportfolio.png',
    title: 'Keeping track of hundreds of components',
    techs: ['Ruby on Rails', 'css', 'JavaScript'],
    techsdesktop: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    seelive: 'See Live',
    seesource: 'See Source',
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

    projectcard.append(projectimage, closeButton);

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
    leftblock.style.display = 'flex';
    leftblock.style.flexDirection = 'column';
    leftblock.classList.add('leftblock');
    leftblock.append(techs);
    projectcard.append(leftblock);

    const paragraph = document.createElement('p');
    paragraph.textContent = projects[i].content;
    paragraph.classList.add('paragraph');
    paragraph.style.width = 'auto';

    projectcard.append(paragraph);

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
    livebutton.textContent = projects[i].seelive;
    livebutton.append(liveimage);
    livebutton.classList.add('livebuttonport');
    buttons.append(livebutton);

    const seesourceimage = document.createElement('img');
    seesourceimage.src = 'images/seesource.png';
    const sourcebutton = document.createElement('button');
    sourcebutton.textContent = projects[i].seesource;
    const aelement = document.createElement('a');
    aelement.textContent = projects[i].seesource;
    aelement.setAttribute('href', 'https://github.com/edgardsoza/Portfolio-finish-mobile-version');
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
    projectcard.append(projectimage);

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
    livebutton.textContent = projects[i].seelive;
    livebutton.append(liveimage);
    livebutton.classList.add('livebuttonport');
    buttons.append(livebutton);

    const seesourceimage = document.createElement('img');
    seesourceimage.src = 'images/seesource.png';
    const sourcebutton = document.createElement('button');
    sourcebutton.append(seesourceimage);
    const aelement = document.createElement('a');
    aelement.setAttribute('href', 'https://github.com/edgardsoza/Portfolio-finish-mobile-version');
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
    leftblock.style.display = 'flex';
    leftblock.style.flexDirection = 'column';
    leftblock.classList.add('leftblock');
    leftblock.append(techs);
    projectcard.append(leftblock);

    const paragraph = document.createElement('p');
    paragraph.textContent = projects[i].content;
    paragraph.classList.add('paragraph');
    paragraph.style.width = 'auto';

    projectcard.append(paragraph);

    popupArray.push(popup);

    document.querySelector('body').appendChild(popup);

    closeButton.addEventListener('click', () => { popupArray[i].classList.remove('openPopup'); popupArray[i].classList.add('closingpopup'); });
    const projectbutton = document.querySelectorAll('.projectbutton');
    projectbutton[i].addEventListener('click', () => { popupArray[i].classList.remove('closingpopup'); popupArray[i].classList.add('openPopup'); });
  }
}