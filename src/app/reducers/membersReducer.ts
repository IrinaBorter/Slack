import { MembersActions } from '../actions/memebrs';
import { FluxStandardAction as Action } from 'flux-standard-action';

interface IState {}
interface IMember {}

export default function membersReducer(state: IState[] = [], action: Action<string, IMember>) {
    switch (action.type) {
        case MembersActions.REGISTER_NEW_MEMBER: {
            return [action.payload];
        }

        default: {
            return state;
        }
    }
}