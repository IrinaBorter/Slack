import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

interface IMessage {}

@Injectable()
export class MessagesActions {
    static DELETE_MESSAGE: string = 'DELETE_MESSAGE';
    static EDIT_MESSAGE: string = 'EDIT_MESSAGE';

    @dispatch()
    deleteMessage = (message: IMessage) => ({
        type: MessagesActions.DELETE_MESSAGE,
        payload: message,
    })

    @dispatch()
    editMessage = (message: IMessage) => ({
        type: MessagesActions.EDIT_MESSAGE,
        payload: message,
    })
}