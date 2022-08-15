const products = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');

products.forEach ((product) => {
    product.addEventListener('click', (event) => {
        let divPlus = product.querySelector('.product__quantity-control_inc');
        let divMinus = product.querySelector('.product__quantity-control_dec');
        let divQuantity = product.querySelector('.product__quantity-value');
        let divProductAdd = product.querySelector('.product__add');
        let productImage = product.querySelector('.product__image');
        
        if (event.target === divPlus) {
            divQuantity.textContent = Number(divQuantity.textContent) + 1;
        } else if (event.target === divMinus) {
            if ( Number(divQuantity.textContent) > 1 ) {
                divQuantity.textContent = Number(divQuantity.textContent) - 1;
            }
        } else if (event.target === divProductAdd) {
            addToCart ( product.dataset.id, productImage.src, Number(divQuantity.textContent) );
        } else {
            console.log('======');
        }
    });
});

function addToCart ( id, image ,quantity) {
            
    // Поиск товара в корзине
    let divCount;
    let count = 0;
    let productsInCart = Array.from(cartProducts.querySelectorAll('.cart__product'));

    productsInCart.forEach ( (item) => {
        if ( item.dataset.id === id ) {
            divCount = item.querySelector('.cart__product-count');
            count = Number(divCount.textContent);
        }
    });

    if ( count != 0 ) {
        divCount.textContent = count + quantity;
    } else {
        let cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = id;
        
        let ProductImage = document.createElement('img');
        ProductImage.classList.add('cart__product-image');
        ProductImage.src = image;
        cartProduct.insertAdjacentElement('afterbegin', ProductImage);

        let ProductCount = document.createElement('div');
        ProductCount.classList.add('cart__product-count');
        ProductCount.textContent = quantity;
        cartProduct.insertAdjacentElement('beforeend', ProductCount);
        
        cartProducts.insertAdjacentElement('beforeend', cartProduct);
    }

}

