const Constant = {
    LOGIN: "login",
    LOGIN_SUCCESS: "login_s",
    LOGIN_FAILED: "login_f",
    LOGOUT: "logout",
}

const user = localStorage.getItem('user');
const initialState = user
    ? {isAuthenticated: true, user}
    : {isAuthenticated: false, user: null};

// isAuthenticated: false,
// user: {
//    name: "",
//    token: "",
//    preferences:{
//      ..
//    }
// },

export const auth = {
    state: initialState,
    actions: {
        [Constant.LOGIN]: (store, payload) => {
            console.log("ACTION LOGIN: ", store, payload);
            setTimeout(() => {
                store.commit(Constant.LOGIN_SUCCESS, payload);
            }, 1000);

        },
        [Constant.LOGOUT]: (store, payload) => {
            store.commit(Constant.LOGOUT, payload);
        },
    },
    mutations: {
        [Constant.LOGIN_SUCCESS]: (state, payload) => {
            console.log("ACTION MUTATION: ", state, payload)
            state.isAuthenticated = true;
            state.user = {name: "Mr Spock", token: "wertrdsw343wer5atwy8duyewuw", preferences: {}};
            console.log("new user: ", state.user);
            localStorage.setItem("user", state.user)
        },
        /*[Constant.LOGIN_FAILED]: (state, payload) => {
            // state.todolist.push({...payload.todoitem, id: 1, done: false});
            // state.todoitem = {id: "", desc: "", done: false};
        },*/
        [Constant.LOGOUT]: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem("user");
        },
    },
}
