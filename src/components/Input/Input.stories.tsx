import Input from "./Input";
import "../../index.css";
import { HiUser, HiLockClosed } from "react-icons/hi";

const icons = { HiUser, HiLockClosed };

export default {
    title: "Input",
    component: Input,
    argTypes: {
        theme: {
            control: { type: "select" },
        },
        Icon: {
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: "select",
                labels: {
                    HiUser: "HiUser",
                    HiLockClosed: "HiLockClosed",
                },
            },
        },
    },
};

export const Main = (args: any) => <Input {...args}></Input>;

Main.args = {
    touched: false,
    error: " ",
    placeholder: " ",
    Icon: HiUser,
};