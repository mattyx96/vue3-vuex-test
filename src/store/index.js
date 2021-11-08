import Vuex from 'vuex';

import { alert } from './alert';
import { auth } from './auth';

export default new Vuex.Store({
    modules: {
        alert,
        auth,
    }
});
