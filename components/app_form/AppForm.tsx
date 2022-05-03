import React from 'react';
import {NextPage} from "next";

interface appFormProps{
    isPresenting: boolean
    stopPresentation: Function
}

const AppForm:NextPage<appFormProps> = ({isPresenting,stopPresentation}) => {
    return (
        <div onClick={() => stopPresentation()} className={isPresenting ? 'app_form visible' : "app_form"}>
            <span></span>
        </div>
    );
};

export default AppForm;