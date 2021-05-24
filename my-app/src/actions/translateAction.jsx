import { Actions }  from '../constans/TranslateActions'


export function createProperty(params) {
    console.log("🚀 ~ file: translateAction.jsx ~ line 5 ~ createProperty ~ params", params)
    return  dispatch => {
        dispatch({
            type: Actions.TRANSLATE ,
            params: params,
        });
    };
}