import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

interface IWorkspace {}
interface IChannel {}
interface IMember {}
interface IMessage {}

@Injectable()
export class ChannelsActions {
    static FETCH_CHANNELS: string = 'FETCH_CHANNELS';
    static LOAD_CHANNELS_STARTED: string = 'LOAD_CHANNELS_STARTED';
    static LOAD_CHANNELS_SUCCEEDED: string = 'LOAD_CHANNELS_SUCCEEDED';
    static LOAD_CHANNELS_FAILED: string = 'LOAD_CHANNELS_FAILED';
    static CREATE_CHANNEL: string = 'CREATE_CHANNEL';
    static INCLUDE_MEMBER_TO_CHANNEL: string = 'INCLUDE_MEMBER_TO_CHANNEL';
    static EXCLUDE_MEMBER_FROM_CHANNEL: string = 'EXCLUDE_MEMBER_FROM_CHANNEL';
    static PUT_MESSAGE: string = 'PUT_MESSAGE';

    @dispatch()
    fetchChannels = (workspace: IWorkspace) => ({
        type: ChannelsActions.FETCH_CHANNELS,
        payload: workspace,
    })

    loadChannelsStarted = () => ({
        type: ChannelsActions.LOAD_CHANNELS_STARTED,
        payload: [] as IChannel[],
    })

    loadChannelsSucceeded = (channels: IChannel[]) => ({
        type: ChannelsActions.LOAD_CHANNELS_SUCCEEDED,
        payload: channels,
    })

    loadChannelsFailed = (error: boolean) => ({
        type: ChannelsActions.LOAD_CHANNELS_FAILED,
        payload: [] as IWorkspace[],
        error,
    })

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