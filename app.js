
const cerrarAnuncio= anuncio => {
  document.getElementById(anuncio).style.display = "none";
}



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


precioElement.classList.add('price')
 

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
  precioInput.value='';

 
});
const formatRegister =document.getElementById('registrationForm');
formatRegister.addEventListener('click', () => {
  const formulario= document.getElementById('anuncio');
  formulario.style.display = 'block';
  registrationFormButton.addEventListener('click', () => {
    if (incomeDiv.style.display === 'none') {
      incomeDiv.style.display = 'block';
    } else {
      incomeDiv.style.display = 'none';
    }
  });
});



    const getProducts = 'https://fakestoreapi.com/products';

    const getData = async (URL) => {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    }
    
    const createProductCard = (product) => {
      const card = document.createElement('div');
      card.classList.add('card');
    
      const title = document.createElement('h2');
      title.textContent = product.title;
      card.appendChild(title);
    
      const price = document.createElement('p');
      price.textContent = `$${product.price}`;
      card.appendChild(price);
    
      const category = document.createElement('p');
      category.textContent = `Category: ${product.category}`;
      card.appendChild(category);
    
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.title;
      image.style.width = '80%';
      card.appendChild(image);
    
      return card;
    }
    
    window.addEventListener('DOMContentLoaded', async () => {
      const products = await getData(getProducts);
      const listProducts = document.getElementById('list-products');
    
      products.forEach(product => {
        const card = createProductCard(product);
        listProducts.appendChild(card);
      });
    });









  
  