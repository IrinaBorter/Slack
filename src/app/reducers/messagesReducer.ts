import { MessagesActions } from '../actions/messages';
// import { Action } from 'redux';

type Action = { type: string, payload: any };
interface IState {}

export default function messagesReducer(state: IState[] = [], action: Action) {
    switch (action.type) {
        case MessagesActions.DELETE_MESSAGE: {
            return [action.payload];
        }

        case MessagesActions.EDIT_MESSAGE: {
            return [action.payload];
        }

        default: {
            return state;
        }
    }
}