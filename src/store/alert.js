const Constant = {
    SHOW_ALERT: "showAlert",
    HIDE_ALERT: "hideAlert",
}

export const alert = {
    state: {
        isOpen: false,
        message: "",
    },
    actions: {
        [Constant.SHOW_ALERT]: (store, payload) => {
            console.log("ACTION LOGIN: ", store, payload);
            store.commit(Constant.SHOW_ALERT, payload);
            setTimeout(() => {
                store.commit(Constant.HIDE_ALERT);
            }, 3000);

        }
    },
    mutations: {
        [Constant.SHOW_ALERT]: (state, payload) => {
            console.log("SHOW ALERT: ", state, payload)
            state.isOpen = true;
            state.message = payload;
        },
        [Constant.HIDE_ALERT]: (state) => {
            state.isOpen = false;
            state.message = "";
        },
    },
}
