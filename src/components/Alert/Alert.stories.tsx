
import Alert from "./Alert";
import "../../index.css";
import { IoMdClose } from "react-icons/io";

const icons = {IoMdClose}

export default {
    title : "Alert",
    component: Alert,
    argTypes: {
        theme: {
            control: {type: "select"},
        },
        Icon: {
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: "select",
                labels: {
                    IoMdClose: "IoMdClose",
                },
            },
        },
    },
};

export const Main = (args:any) => <Alert {...args}></Alert>

Main.args = {
    children: "this is alert box",
    classsName: "",
};

