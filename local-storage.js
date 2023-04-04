const namefield = document.getElementById('name');
const emailfield = document.getElementById('email');
const messagefield = document.getElementById('message');
const form = document.getElementById('contactform');
const savedata = localStorage.getItem('savedinformation');

let object = {
  name: '',
  email: '',
  message: '',
};

form.addEventListener('input', () => {
  object.name = namefield.value;
  object.email = emailfield.value;
  object.message = messagefield.value;
  localStorage.setItem('savedinformation', JSON.stringify(object));
});

if (savedata) {
  object = JSON.parse(savedata);
  namefield.value = object.name;
  emailfield.value = object.email;
  messagefield.value = object.message;
}
