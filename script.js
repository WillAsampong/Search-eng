const searchInput = document.querySelector('#search-item');
const productList = document.querySelector('.product-list');
const products = document.querySelectorAll('.product');
const pnames = document.querySelectorAll('h2');

searchInput.addEventListener('input', search);

function search() {
    let filter = searchInput.value.toLowerCase();

    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        let isVisilble = productName.includes(filter);

        if(isVisilble) {
            product.style.display = ''
        } 
        else {
            product.style.display = "none";
        }
    });
}

