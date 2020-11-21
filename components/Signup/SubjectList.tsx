import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import { Input, Button } from 'antd';
import useInput from '../../../hooks/useInput';
import Router, { withRouter } from "next/router";
const { Search } = Input;
function SubjectList() {
    const onSearch = (value: String) => console.log(value);
    return (
        <>
            <h1>어떤 스터디를 찾고 있나요?</h1>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
            <h2>지역 정보는 다른 사람들에게 공유되지 않습니다.</h2>

            <h3>지역</h3>

            <h3>관심 스터디</h3>
        </>
    );
}

export default SubjectList;