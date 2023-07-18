const registerButton = document.querySelector('.register');
registerButton.addEventListener('click', () => {
  const main = document.querySelector('main');
  const titleInput = document.querySelector('.titleProduct');
  const fileInput = document.getElementById('file');
  const categorySelect = document.getElementById('category');
  const descriptionInput = document.getElementById('description');
  const precioInput = document.getElementById('precio');

  // Obtener los valores de los campos de entrada
  const title = titleInput.value;
  const category = categorySelect.value;
  const description = descriptionInput.value;
  const precio= precioInput.value;

  // Crear elementos de la tarjeta
  const card = document.createElement('div');
  card.classList.add('card');

  const imgCard = document.createElement('img');
  imgCard.src = fileInput.files[0] ? URL.createObjectURL(fileInput.files[0]) : 'https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600';
  imgCard.alt = 'card-product';

  const titleProduct = document.createElement('h2');
  titleProduct.textContent = title;

  const categoryElement = document.createElement('p');
  categoryElement.textContent = category;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  const precioElement = document.createElement('p');
  precioElement.textContent=precio;
 

  // Asignar nodos hijos
  card.appendChild(imgCard);
  card.appendChild(titleProduct);
  card.appendChild(categoryElement);
  card.appendChild(descriptionElement);
  card.appendChild(precioElement);

  main.appendChild(card);

  // Restablecer los valores de los campos de entrada
  titleInput.value = '';
  fileInput.value = '';
  categorySelect.value = '';
  descriptionInput.value = '';
  precioInput.value=''
});









  
  