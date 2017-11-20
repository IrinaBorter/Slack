import * as express from 'express';
import {
    getMembers,
    getMember,
    registerNewMember,
} from '../member/memberController';

const memberRoutes = express.Router({ mergeParams: true });

memberRoutes.get('/', getMembers);
memberRoutes.get('/:id', getMember);
memberRoutes.post('/', registerNewMember);

export default memberRoutes;