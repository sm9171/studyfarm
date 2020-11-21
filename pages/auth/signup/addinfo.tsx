import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import { Input, Button, Form, message } from 'antd';
import useInput from '../../../hooks/useInput';
import { authNickname, authEmail } from '../../../lib/api/auth';
import Router, { withRouter } from "next/router";

function AddInfoPage() {

    return (
        <>
            <h1>추가 정보</h1>
            <h2>추가정보를 써주시면 얻는 베네핏 안내</h2>
            <Button type="primary" htmlType="submit" loading={false}>시작하기</Button>
        </>
    );
}

export default AddInfoPage;