import React from 'react';
import EmailBox from '../../EmailBox.jsx/EmailBox';
import NameBox from '../../NameBox/NameBox';
import PathViewer from '../../PathViewer/PathViewer';
import PhoneInput from '../../PhoneInput/PhoneInput';
import SchoolList from '../../SchoolList/SchoolList';

const WorkFlowStudent1 = () => {
    return (
        <>
            
            <PathViewer />
            <NameBox />
            <EmailBox />
            <PhoneInput />
            <SchoolList />
        </>
    )
}

export default WorkFlowStudent1

