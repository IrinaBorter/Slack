import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

interface IMember {}

@Injectable()
export class MembersActions {
    static REGISTER_NEW_MEMBER: string = 'REGISTER_NEW_MEMBER';

    @dispatch()
    registerNewMember = (member: IMember) => ({
        type: MembersActions.REGISTER_NEW_MEMBER,
        payload: member,
    })
}