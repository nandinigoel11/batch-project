
import Avatar from "./Avatar";
import "../../index.css";

export default {
    title : "Avatar",
    component: Avatar,
    argTypes:{
        status:{
            control:{type: "select"},
        },
    },
};

export const Main = (args:any) => <Avatar {...args}></Avatar>

Main.args = {
    className: " ",
};

