function showDetails(name, price, details, image) {
    const modal = document.getElementById('productModal');
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    const productImage = document.getElementById('productImage');
    const productDescription = document.getElementById('productDescription');
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
    modal.classList.remove('hidden');
    }
      // Función para ocultar el modal
function hideDetails() {
const modal = document.getElementById('productModal');
modal.classList.add('hidden');
}