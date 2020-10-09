import {CHANGE_THEME, DEC, DISABLE_BUTTONS, ENABLE_BUTTONS, INC} from "./types";

export const increment = () => {
    return {
        type: INC
    }
}

export const decrement = () => {
    return {
        type: DEC
    }
}

export const enableButtons = () => {
    return {
        type: ENABLE_BUTTONS
    }
}

export const disableButton = () => {
    return {
        type: DISABLE_BUTTONS
    }
}

export const changeTheme = (newTheme) => {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export const asyncIncrement = () => {
    return dispatch => {
        dispatch(disableButton())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enableButtons())
        }, 1500)
    }
}
