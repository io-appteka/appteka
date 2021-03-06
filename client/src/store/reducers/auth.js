import * as actionTypes from '../actions/actionTypes';
import * as utilities from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
};

const authStart = (state, action) => utilities.updateObject(state, {error: null, loading: true});
const authSuccess = (state, action) => utilities.updateObject(state, {
    token: action.tokenId,
    userId: action.userId,
    error: null,
    loading: false,
});
const authFail = (state, action) => utilities.updateObject(state, {error: action.error, loading: false});

const authLogout = (state, action) => utilities.updateObject(state, { token: null, userId: null });

const setAuthRedirectPath = (state, action) => utilities.updateObject(state, { authRedirectPath: action.path });

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        default:
            return state;
    }
};

export default reducer;