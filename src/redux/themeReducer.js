import {CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS} from "./types";

const initialStateTheme = {
    value: 'light',
    disabled: false
}

export const themeReducer = (state = initialStateTheme, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload}
        case ENABLE_BUTTONS:
            return {...state, disabled: false}
        case DISABLE_BUTTONS:
            return {...state, disabled: true}
        default: return state;
    }
}