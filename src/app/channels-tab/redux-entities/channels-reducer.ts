import { ChannelsActions } from './channels-actions';
import { FluxStandardAction as Action } from 'flux-standard-action';

interface IState {}
interface IChannel {}

const defaultChannelState = { items:  [] as IChannel[], loading: false, error: false };

export default function channelsReducer(state: IState = defaultChannelState, action: Action<string, IChannel>) {
    switch (action.type) {
        case ChannelsActions.LOAD_CHANNELS_STARTED: {
            return { ...state, loading: true };
        }

        case ChannelsActions.LOAD_CHANNELS_SUCCEEDED: {
            return { ...state, items: action.payload, loading: false };
        }

        case ChannelsActions.LOAD_CHANNELS_FAILED: {
            return { ...state, error: action.error, loading: false };
        }

        case ChannelsActions.PUT_MESSAGE: {
            return {...state, items: action.payload };
        }

        case ChannelsActions.CREATE_CHANNEL: {
            return { ...state, items: action.payload };
        }

        case ChannelsActions.INCLUDE_MEMBER_TO_CHANNEL: {
            return { ...state, items: action.payload };
        }

        case ChannelsActions.EXCLUDE_MEMBER_FROM_CHANNEL: {
            return { ...state, items: action.payload };
        }

        default: {
            return state;
        }
    }
}