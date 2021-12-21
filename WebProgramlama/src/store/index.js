import {createStore} from 'vuex'

export default createStore({
    state: {
        menus: [],
        carousel: [],
        products: [],
        basket: [],
        userInfo: null,
        users: []
    },
    mutations: {
        setMenus(state, menus) {
            state.menus = menus;
        },
        setCarousel(state, data) {
            state.carousel = data;
        },
        setProducts(state, data) {
            state.products = data;
        },
        setuserInfo(state, data) {
            state.userInfo = data;
        },
        setbasket(state, data) {
            if (!Array.isArray(data))
                state.basket.push(data);
            else
                data.forEach(x => {
                    state.basket.push(x);
                })
        },
        setUsers(state, data) {
            state.users.push(data);
        },
        clearBasket(state) {
            state.users = [];
        }
    },
    actions: {
        setMenus(vuex) {
            fetch('http://localhost:3000/menus', {
                headers: {'Content-type': 'application/json'},
            }).then(res => res.json()).then((response) => {
                vuex.commit('setMenus', response)
            }).catch((error) => {
                console.log('Looks like there was a problem: \n', error);
                vuex.commit('setMenus', [])
            });
        }
    },
    modules: {},
    getters: {
        getMenus(state) {
            return state.menus;
        },
        getCarousel(state) {
            return state.carousel;
        },
        getProducts(state) {
            return state.products;
        },
        getBasket(state) {
            return state.basket;
        },
        getUserInfo(state) {
            return state.userInfo;
        },
        getUsers(state) {
            return state.users;
        }
    }
})
