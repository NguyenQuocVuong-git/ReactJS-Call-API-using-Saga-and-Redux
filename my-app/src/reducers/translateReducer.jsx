import immutable from 'immutable';
import { Actions }  from '../constans/TranslateActions'
import get from 'lodash/get';

const defaultMapState = immutable.fromJS({
    list: [],
    total: 0,
    message: '',
    isFetching: true,
    isFailure: false,
    isSuccess: false,
    // item : [] ,
});

export default function PropertyReducers(state = defaultMapState, { type: actionType, ...data }) {
    switch (actionType) {
        case Actions.TRANSLATE_START:
            return state.set('isFetching', true).set('total', 0);
        case Actions.CREATE_PROPERTY_SUCCESS:
            console.log('create-succes', state);
            console.log('data success', data);
            // const list = state.get('list')
            // console.log('list get from state' , list);

            return state
                // .set('list' , state.get('list').push(state.get('item')))
                .set('item', data.list)
                .set('isFetching', false)
                .set('total', data.total);
        case Actions.CREATE_PROPERTY_FAILURE:
            return state
                .set('isFailure', false)
                .set('isFetching', false)
                .set('list', [])
        default:
            return state;
    }
}