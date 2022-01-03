import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        curtainList: [
            {
                firm: 'Фірма',
                material: "Матеріал",
                width_length: "Ширина та довжина",
                price:"Ціна"
            },
            {
                firm: 'RUNN',
                material: 'Мікрофібра (100% поліестер)',
                width_length: "140x300 см",
                price: 350
            },
            {
                firm: 'LUPIN ',
                material: '100% поліестер',
                width_length: '140x300 см',
                price: 500
            },
        ],
    },
    getters: {
        getCurtainList: ({ curtainList }) => curtainList,
    },
    mutations: {
        NewCurtain(state, dataObj) {
            state.curtainList.push({
                ...dataObj
            })
        },
    },
    actions: {
        curtain({commit}, data) {
            commit('NewCurtain', data)
        }
    }
})

export default store