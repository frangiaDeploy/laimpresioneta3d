function showDetails(name, price, details, image, idCategory) {
    const modal = document.getElementById('productModal');
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    const productImage = document.getElementById('productImage');
    const productDescription = document.getElementById('productDescription');
    const category = document.getElementById('textBtn');
    productName.textContent = name;
    productPrice.textContent = '$ ' + price;
    productImage.setAttribute('src', image);
    productImage.setAttribute('alt', name);
    productDescription.innerHTML = '';
    details.split(';').forEach(detail => {
        if(detail != ''){
            const listItem = document.createElement('li');
            listItem.innerHTML = '<span class="mr-1"><i class="ri-arrow-right-double-line text-yellow text-2xl text-deep-purple-accent-400 hover:animate-pulse"></i>'+ detail +'</span>'
            productDescription.appendChild(listItem);
        }else{
            const listItem = document.createElement('li');
            listItem.innerHTML = '<span class="mr-1"><i class="ri-arrow-right-double-line text-yellow text-2xl text-deep-purple-accent-400 hover:animate-pulse"></i>No fueron especificadas</span>'
            productDescription.appendChild(listItem);
        }
    });
    if(idCategory == 2){
        category.textContent = "Sin stock";
        category.classList.replace('bg-yellow', 'bg-red-400');
        category.setAttribute('disabled','');
        category.removeAttribute('href');
    }else{
        category.textContent = "Comprar";
        category.classList.replace('bg-red-400', 'bg-yellow');
        category.removeAttribute('disabled');
        category.setAttribute('href', 'https://api.whatsapp.com/send?phone=3385436246&text=Hola, Quiero el siguiente producto, ' + '*' +name+ '*' + ' !');
    }
    modal.classList.remove('hidden');
    }
      // Función para ocultar el modal
function hideDetails() {
const modal = document.getElementById('productModal');
modal.classList.add('hidden');
}