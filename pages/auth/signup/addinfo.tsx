import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import { Input, Button, Form, message } from 'antd';
import useInput from '../../../hooks/useInput';
import { authNickname, authEmail } from '../../../lib/api/auth';
import Router, { withRouter } from "next/router";

function AddInfoPage() {

    return (
        <>
            <h1>기본 정보</h1>
            <h2>스터디팜과 공유할 회원님의 정보를 알려주세요.</h2>
            <Button type="primary" htmlType="submit" loading={false}>다음</Button>
        </>
    );
}

export default AddInfoPage;