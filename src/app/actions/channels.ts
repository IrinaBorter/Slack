import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

interface IChannel {}
interface IMember {}
interface IMessage {}

@Injectable()
export class ChannelsActions {
    static CREATE_CHANNEL: string = 'CREATE_CHANNEL';
    static INCLUDE_MEMBER_TO_CHANNEL: string = 'INCLUDE_MEMBER_TO_CHANNEL';
    static EXCLUDE_MEMBER_FROM_CHANNEL: string = 'EXCLUDE_MEMBER_FROM_CHANNEL';
    static PUT_MESSAGE: string = 'PUT_MESSAGE';

    @dispatch()
    createChannel = (channel: IChannel) => ({
        type: ChannelsActions.CREATE_CHANNEL,
        payload: channel,
    })

    @dispatch()
    includeMemberToChannel = (member: IMember) => ({
        type: ChannelsActions.INCLUDE_MEMBER_TO_CHANNEL,
        payload: member,
    })

    @dispatch()
    excludeMemberFromChannel = (member: IMember) => ({
        type: ChannelsActions.EXCLUDE_MEMBER_FROM_CHANNEL,
        payload: member,
    })

    @dispatch()
    putMessage = (message: IMessage) => ({
        type: ChannelsActions.PUT_MESSAGE,
        payload: message,
    })
}