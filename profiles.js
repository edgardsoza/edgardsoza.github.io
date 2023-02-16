const profiles = [
  {
    id: 'artist1',
    nodalimage: 'images/nodal.jpg',
    title: 'Christian Nodal',
    type: 'Mexican Artist',
    description: 'Christian Nodal is a singer, songwriter, and multi-instrumentalist from Mexico.',
  },

  {
    id: 'artist2',
    nodalimage: 'images/geramx.jpg',
    title: 'Gera MX',
    type: 'Mexican Artist',
    description: 'Gera Mx is an artist born in Monterrey, and is the most listened rap singer on Spotify Mexico.',
  },

  {
    id: 'artist3',
    nodalimage: 'images/grupofirme.jpg',
    title: 'Grupo Firme',
    type: 'Mexican Artist',
    description: 'Grupo Firme is a Regional Mexican band based in Tijuana, Baja California, founded in 2014.',
  },

  {
    id: 'artist4',
    nodalimage: 'images/bandams.jpg',
    title: 'Banda MS',
    type: 'Mexican Artist',
    description: 'Banda Sinaloense MS de Sergio Lizárraga, also known as Banda MS, is a Mexican Banda.',
  },

  {
    id: 'artist5',
    nodalimage: 'images/santafe.jpg',
    title: 'Santa Fe Klan',
    type: 'Mexican Artist',
    description: 'Angel Jair Quezada Jasso (November 29, 1999), better known artistically as Santa Fe Klan.',
  },

  {
    id: 'artist6',
    nodalimage: 'images/piso21.jpg',
    title: 'Piso 21',
    type: 'Mexican Artist',
    description: 'Piso 21 is a Latin pop group. Their singles "Me Llamas", "Besándote" and "Déjala Que Vuelva" are awesome.',
  },
];

for (let i = 0; i < profiles.length; i += 1) {
  const artist = document.createElement('div');
  artist.classList.add('artist-card');

  const imagediv = document.createElement('div');
  imagediv.classList.add('imagediv');

  const artistimage = document.createElement('img');
  artistimage.src = profiles[i].nodalimage;
  artistimage.classList.add('artistimage');
  imagediv.append(artistimage);

  const textdiv = document.createElement('div');
  textdiv.classList.add('textdiv');

  const artistname = document.createElement('h3');
  artistname.textContent = profiles[i].title;
  artistname.classList.add('artistname');

  const artistype = document.createElement('p');
  artistype.textContent = profiles[i].type;
  artistype.classList.add('artistype');

  const breakline = document.createElement('hr');
  breakline.classList.add('breakspeaker');

  const artistdescription = document.createElement('p');
  artistdescription.textContent = profiles[i].description;
  artistdescription.classList.add('artistdescription');
  textdiv.append(artistname, artistype, breakline, artistdescription);
  artist.append(imagediv, textdiv);

  document.querySelector('.speakers-container').appendChild(artist);
}