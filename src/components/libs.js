import {useState} from "preact/hooks";

export const useSetState = (initialState) => {
    const [state, setRawState] = useState(initialState);

    const setState = (newState) => {

        setRawState({
            ...state,
            ...newState
        })
    }

    return [state, setState]
}