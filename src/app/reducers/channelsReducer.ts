import { ChannelsActions } from '../actions/channels';
import { FluxStandardAction as Action } from 'flux-standard-action';

interface IState {}
interface IChannel {}

export default function channelsReducer(state: IState[] = [], action: Action<string, IChannel>) {
    switch (action.type) {
        case ChannelsActions.CREATE_CHANNEL: {
            return [action.payload];
        }

        case ChannelsActions.INCLUDE_MEMBER_TO_CHANNEL: {
            return [action.payload];
        }

        case ChannelsActions.EXCLUDE_MEMBER_FROM_CHANNEL: {
            return [action.payload];
        }

        case ChannelsActions.PUT_MESSAGE: {
            const newMessage = action.payload;

            return [...state, newMessage];
        }

        default: {
            return state;
        }
    }
}