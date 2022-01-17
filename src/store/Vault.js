export default {
    state: {
        selectedMake: ''
    },

    getters: {
        getSelectedMake(state){
            return state.selectedMake
        },
    },

    mutations: {
        SET_SELECTED_MAKE_STATE(state, makeState){
            state.selectedMake = makeState
        }
    },

    actions: {
        changeSelectedMakeState({ commit }, state){
            commit('SET_SELECTED_MAKE_STATE', state)
        },
    }
}