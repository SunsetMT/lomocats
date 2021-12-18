import {createStore} from 'vuex'

export default createStore({
    state: {
        chatProducts: [
            {id: 1, title: 'ITMO.cat.Family', text: 'Кот-стьюдент: Привет! Мы скучаем:)', img: 'Heart_Icon.svg'},
            {id: 2, title: 'Кот-стьюдент', text: 'Хочешь пройти квест? Приглашаю!', img: 'Cat_Student_Icon.png'}
        ],

        user: {id: 1, coins: 999, level: 1, exp: 400, rank: 'Новичок'},

        users: [
            {id: 1, coins: 999, level: 1, exp: 400, rank: 'Новичок'},
            {id: 2, coins: 649, level: 1, exp: 800, rank: 'Новичок'},
            {id: 3, coins: 329, level: 1, exp: 620, rank: 'Новичок'},
            {id: 4, coins: 129, level: 1, exp: 120, rank: 'Новичок'},
            {id: 5, coins: 0, level: 1, exp: 0, rank: 'Новичок'},
        ]
    },
    getters: {
        CHAT_PRODUCTS(state) {
            return state.chatProducts
        },
        USER(state) {
            return state.user
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
