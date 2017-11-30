import { ChannelsActions } from '../actions/channels';
// import { Action } from 'redux';

type Action = { type: string, payload: any };
interface IState {}

export default function channelsReducer(state: IState[] = [], action: Action) {
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