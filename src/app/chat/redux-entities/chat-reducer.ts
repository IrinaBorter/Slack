import { FluxStandardAction as Action } from 'flux-standard-action';
import { ChatActions } from './chat-actions';

interface IState {}
interface IMessage {}

const defaultChatState = { items:  [] as IMessage[], loading: false, error: false };

export default function chatReducer(state: IState = defaultChatState, action: Action<string, IMessage>) {
    switch (action.type) {
        case ChatActions.LOAD_MESSAGES_STARTED: {
            return { ...state, loading: true };
        }

        case ChatActions.LOAD_MESSAGES_SUCCEEDED: {
            return { ...state, items: action.payload, loading: false };
        }

        case ChatActions.LOAD_MESSAGES_FAILED: {
            return { ...state, error: action.error, loading: false };
        }

        case ChatActions.PUSH_MESSAGE: {
            return {...state, items: action.payload };
        }

        default: {
            return state;
        }
    }
}