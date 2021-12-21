import store from '../store'

function loadMenuData() {
    fetch('http://localhost:3000/menus', {
        headers: {'Content-type': 'application/json'},
    }).then(res => res.json()).then((response) => {
        store.commit('setMenus', response)
    }).catch((error) => {
        console.log('Looks like there was a problem: \n', error);
        store.commit('setMenus', [])
    });
}

function loadCarousel() {
    fetch('http://localhost:3000/sliders', {
        headers: {'Content-type': 'application/json'},
    }).then(res => res.json()).then((response) => {
        store.commit('setCarousel', response)
    }).catch((error) => {
        console.log('Looks like there was a problem: \n', error);
        store.commit('setCarousel', [])
    });
}

function loadProductsData() {
    fetch('http://localhost:3000/products', {
        headers: {'Content-type': 'application/json'},
    }).then(res => res.json()).then((response) => {
        console.log(response)
        store.commit('setProducts', response)
    }).catch((error) => {
        console.log('Looks like there was a problem: \n', error);
        store.commit('setProducts', [])
    });
}

export {loadMenuData, loadCarousel, loadProductsData}