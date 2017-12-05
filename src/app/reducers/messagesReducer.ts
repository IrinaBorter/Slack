import { MessagesActions } from '../actions/messages';
import { FluxStandardAction as Action } from 'flux-standard-action';

interface IState {}
interface IMessage {}

export default function messagesReducer(state: IState[] = [], action: Action<string, IMessage>) {
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