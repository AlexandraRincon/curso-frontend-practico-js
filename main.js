const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

const toggleDesktopMenu = () => {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

const toggleMobileMenu = () => {
    const isAsideClosed = aside.classList.contains('inactive')
    /* toggle: Es como un switch true o false, active o inactive*/

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

const toggleCarritoAside = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

const productsList = []
productsList.push({
    name: 'Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productsList.push({
    name: 'Dress',
    price: 8.000,
    image: 'https://images.pexels.com/photos/276518/pexels-photo-276518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productsList.push({
    name: 'Bedroom',
    price: 15.200,
    image: 'https://images.pexels.com/photos/276516/pexels-photo-276516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderProducts(productsListArr) {
    for (product of productsListArr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price

        const productName = document.createElement('p')
        productName.innerText = product.name
        //varios = append
        productInfoDiv.append(productPrice, productName)


        const productInfoFigure = document.createElement('figure')
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
        //uno = appendChild
        productInfoFigure.appendChild(imgCard)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productsList)



