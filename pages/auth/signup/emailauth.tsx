import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import { Input, Button, Form, message } from 'antd';
import useInput from '../../../hooks/useInput';
import { getUserInfo } from '../../../lib/api/user';
import Router, { withRouter } from "next/router";

function EmailAuthPage() {
    const handleOk = async () => { //모달 창 ok버튼
        const [data, error] = await getUserInfo(3);
        console.log("유저이메일::" + data?.result.email);
        console.log("유저승인여부::" + data?.result.user_active);
        //if (data) {
        //    Router.push('/auth/signup/info');
        //}
    };
    return (
        <>
            <TITLE>인증메일을 발송했습니다.</TITLE>
            <SUBTITLE>메일함에서 인증 확인 버튼을 눌러주세요.</SUBTITLE>
            <BUTTON1 type="primary" htmlType="submit" loading={false} onClick={handleOk}>가입하기</BUTTON1>
            <BUTTON2 type="primary" htmlType="submit" loading={false} >다른 이메일로 인증하기</BUTTON2>
            <BUTTON3 type="primary" htmlType="submit" loading={false}>문의하기</BUTTON3>
        </>
    );
}

export default EmailAuthPage;

const TITLE = styled.div`
position: absolute;
width: 350px;
height: 36px;
left: 20px;
top: 20px;

font-family: Noto Sans KR;
font-style: normal;
font-weight: bold;
font-size: 26px;
line-height: 36px;
color: #413D3D;
`
const SUBTITLE = styled.div`
position: absolute;
width: 330px;
height: 48px;
left: 20px;
top: 146px;

font-family: Noto Sans KR;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 24px;
color: #999999;
`

const BUTTON1 = styled(Button)`
position: absolute;
width: 355px;
height: 49px;
left: 10px;
top: 539px;

/* Main color */

background: #FF7663;
border-radius: 8px;
`
const BUTTON2 = styled(Button)`
position: absolute;
width: 147px;
height: 24px;
left: 113px;
top: 632px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */


color: #000000;

opacity: 0.5;
`
const BUTTON3 = styled(Button)`
position: absolute;
width: 59px;
height: 24px;
left: 157px;
top: 670px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


color: #000000;

opacity: 0.5;
`