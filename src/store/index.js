import {createStore} from 'vuex'

export default createStore({
    state: {
        chatProducts: [
            {id: 1, title: 'ITMO.cat.Family', text: 'Кот-стьюдент: Привет! Мы скучаем:)', img: 'Heart_Icon.svg'},
            {id: 2, title: 'Кот-стьюдент', text: 'Хочешь пройти квест? Приглашаю!', img: 'Cat_Student_Icon.png'}
        ],

        user: {id: 1, coins: 999, level: 1, exp: 400, rank: 'Новичок', name: 'Sunset_MT'},

        users: [
            {id: 1, coins: 999, level: 1, exp: 400, rank: 'Новичок', name: 'agatikc'},
            {id: 2, coins: 649, level: 1, exp: 800, rank: 'Новичок', name: 'Cmexxx'},
            {id: 3, coins: 329, level: 1, exp: 620, rank: 'Новичок', name: 'DailBladeMail'},
            {id: 4, coins: 129, level: 1, exp: 120, rank: 'Новичок', name: 'sad'},
            {id: 5, coins: 0, level: 1, exp: 0, rank: 'Новичок', name: 'bga'},
        ]
    },
    getters: {
        CHAT_PRODUCTS(state) {
            return state.chatProducts
        },
        USER(state) {
            return state.user
        },
        USERS(state) {
            return state.users.sort(function (a, b){
                return a.coins - b.coins
            }).reverse().slice(0,3)
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
