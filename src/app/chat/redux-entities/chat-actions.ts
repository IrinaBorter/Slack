import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

interface IChannel {}
interface IMessage {}

@Injectable()
export class ChatActions {
    static FETCH_MESSAGES: string = 'FETCH_MESSAGES';
    static LOAD_MESSAGES_STARTED: string = 'LOAD_MESSAGES_STARTED';
    static LOAD_MESSAGES_SUCCEEDED: string = 'LOAD_MESSAGES_SUCCEEDED';
    static LOAD_MESSAGES_FAILED: string = 'LOAD_MESSAGES_FAILED';
    static PUSH_MESSAGE: string = 'PUSH_MESSAGE';

    @dispatch()
    fetchMessages = (channel: IChannel) => ({
        type: ChatActions.FETCH_MESSAGES,
        payload: channel,
    })

    loadMessagesStarted = () => ({
        type: ChatActions.LOAD_MESSAGES_STARTED,
        payload: [] as IMessage[],
    })

    loadMessagesSucceeded = (messages: IMessage[]) => ({
        type: ChatActions.LOAD_MESSAGES_SUCCEEDED,
        payload: messages,
    })

    loadMessagesFailed = (error: boolean) => ({
        type: ChatActions.LOAD_MESSAGES_FAILED,
        payload: [] as IMessage[],
        error,
    })

    @dispatch()
    pushMessage = (message: IMessage) => ({
        type: ChatActions.PUSH_MESSAGE,
        payload: message,
    })
}