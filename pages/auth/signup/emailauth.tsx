import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import { Input, Button, Form, message } from 'antd';
import useInput from '../../../hooks/useInput';
import { authNickname, authEmail } from '../../../lib/api/auth';
import Router, { withRouter } from "next/router";

function EmailAuthPage() {

    return (
        <>
            <h1>인증메일을 발송했습니다.</h1>
            <h2>메일</h2>
            <Button type="primary" htmlType="submit" loading={false}>가입하기</Button>
            <Button type="primary" htmlType="submit" loading={false}>다른 이메일로 인증하기</Button>
            <Button type="primary" htmlType="submit" loading={false}>문의하기</Button>
        </>
    );
}

export default EmailAuthPage;