import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import { Input, Button, Form, message } from 'antd';
import useInput from '../../../hooks/useInput';
import { authNickname, authEmail } from '../../../lib/api/auth';
import Router, { withRouter } from "next/router";

function InfoPage() {

  return (
    <>
      <h1>어떤 스터디를 찾고 있나요?</h1>
      <h2>입력하신 정보로 스터디를 찾을 수 있습니다.</h2>
      <h2>지역 정보는 다른 사람들에게 공유되지 않습니다.</h2>

      <h3>지역</h3>

      <h3>관심 스터디</h3>

      <Button type="primary" htmlType="submit" loading={false}>곧 다왔어요!</Button>
    </>
  );
}

export default InfoPage;