let state = {
    timeArr:[],
    methodsArr:[]
};
//The only place where warehouse data can be modified is [Worker]
let mutations = {

    TIME(state, data) {
        state.timeArr.push(data);
    },
    METHODS(state,data){
        state.methodsArr.push(data);
    }
};
//Can handle business logic [if, asynchronous statements, etc.]
let actions = {};
//Warehouse computed properties
let getters = {};

//Small warehouse exposed to the outside world
export default {
    state,
    mutations,
    actions,
    getters
}



