import React from "react";
import Fields from "./fields";
import InputForm from "./inputForm";
import TextareaForm from "./textareaForm";
import LabelForm from "./labelForm";

export default function Form() {
    return (
        <section className="formContact">
            <form id="contact">
                <Fields>
                    <LabelForm for={"firstName"}>First name</LabelForm>
                    <InputForm type="text" id={"firstName"} name={"firstName"} placeholder={"Your First Name"} />
                </Fields>
                <Fields>
                    <LabelForm for={"lastName"}>Name</LabelForm>
                    <InputForm type="text" id={"lastName"} name={"lastName"} placeholder={"Your Last Name"} />
                </Fields>
                <Fields>
                    <LabelForm for={"msg"}>Message</LabelForm>
                    <TextareaForm id={"msg"} name={"message"} placeholder={"Your message..."} />
                </Fields>
                <Fields>
                    <InputForm type="submit" class={"subBtn"} value={"Submit"} />
                </Fields>
            </form>
        </section>
    )
}