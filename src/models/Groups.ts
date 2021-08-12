import { User } from "./User";
import {State} from "./State";
import { Entity } from "./Entity";

export interface Groups extends Entity {
    name:                 string;
    is_private:           boolean;
    description:          string;
    introductory_message?: null | string;
    group_image_url:      null | string;
    join_code:            string;
    created_at:           Date;
    updated_at:           Date;
    chatCount:            number;
    state:                State | null;
    creator:              User;
    issues:               any[];
    invitedMembers:       User[];
    participants:         User[];
    advocatePage:         string;
}