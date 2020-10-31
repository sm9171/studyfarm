import React, { useCallback } from "react";
import styled from 'styled-components';
import { Input, Button, Form } from 'antd';
import useInput from '../../../hooks/useInput';
import axios from 'axios';
import { APIResponse } from "../../../lib/types/api";


function IndexPage() {
  const [email, onChangeEmail] = useInput('');
  const onSubmitForm = useCallback(async (email: string) => {
    try {
      const data = {
        email
      };
      const res = await axios.post<APIResponse>(`/auth/signup`, data, {
        headers: {
          'Content-Type': `application/hal+json`,
        },
      });
      console.log(res.data);


    } catch (e) {
      console.error(e);
    }
  }, [email]);

  return (
    <>
      <Form onFinish={onSubmitForm} style={{ padding: '10px' }}>
        <h1>메일 주소를 입력해주세요</h1>
        <h2>본인인증을 위한 인증번호가 전송됩니다.</h2>
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} />
        <Button type="primary" htmlType="submit" loading={false}>다음</Button>
      </Form>
    </>
  );
}

export default IndexPage;
