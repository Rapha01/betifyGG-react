// action - state management
import {  SET_GAME, SET_SOCKET, SET_MEMBER, SET_CHAT,
     SET_PRIVILEGES, SET_BETSPAGE, SET_BETPAGE, SET_MEMBERSPAGE, SET_LOGSPAGE } from './actions';

//-----------------------|| ACCOUNT REDUCER ||-----------------------//

const gameReducer = (state, action) => {
    switch (action.type) {
        case SET_GAME: {
            return {
                ...state,
                game: action.game
            };
        }
        case SET_SOCKET: {
            return {
                ...state,
                socket: action.socket
            };
        }
        case SET_BETSPAGE: {
            return {
                ...state,
                betsPage: action.betsPage
            };
        }
        case SET_BETPAGE: {
            return {
                ...state,
                betPage: action.betPage
            };
        }

        case SET_MEMBERSPAGE: {
            return {
                ...state,
                membersPage: action.membersPage
            };
        }

        case SET_LOGSPAGE: {
            return {
                ...state,
                logsPage: action.logsPage
            };
        }
        
        /*case NEW_MESSAGES: {
            let h;

            if (state.chatHistory)
                h = state.chatHistory.concat(action.messages);
            else
                h = action.messages;
            return {
                ...state,
                chatHistory: h,
                chatInitialized: true
            };
        }*/
        case SET_CHAT: {
            return {
                ...state,
                chat: action.chat
            };
        }
        case SET_MEMBER: {
            return {
                ...state,
                member: action.member
            };
        }
        case SET_PRIVILEGES: {
            return {
                ...state,
                privileges: action.privileges
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default gameReducer;