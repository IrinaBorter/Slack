import { MembersActions } from '../actions/memebrs';
// import { Action } from 'redux';

type Action = { type: string, payload: any };
interface IState {}

export default function membersReducer(state: IState[] = [], action: Action) {
    switch (action.type) {
        case MembersActions.REGISTER_NEW_MEMBER: {
            return [action.payload];
        }

        default: {
            return state;
        }
    }
}