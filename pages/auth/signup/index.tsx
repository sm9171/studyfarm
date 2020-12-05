import React, { useCallback, useState } from "react";
import Router from 'next/router';
import styled from 'styled-components';
import { Input, Button, Form, message, Modal } from 'antd';

import useInput from '../../../hooks/useInput';
import { authNickname, authEmail } from '../../../lib/api/auth';
import Terms from "../../../components/Signup/Terms";

function SignupPage() {

  const [loading, setLoading] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [visible, setVisible] = useState(false);


  const handleOk = () => { //모달 창 ok버튼
    setVisible(false);
    Router.push('/auth/signup/emailauth');
  };

  const handleCancel = () => { //모달 창 cancel버튼
    setVisible(false);
  };

  const onSubmit = useCallback(async () => {

    setLoading(true);
    const [data, error] = await authNickname(nickname); //닉네임중복 검증
    const [data2, error2] = await authEmail(email);     //이메일중복 검증

    console.log(data, error);
    console.log(data2, error2);

    setLoading(false);

    //이메일,패스워드 정규표현식
    const regEmail: RegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regPassword: RegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/i;

    if (!regEmail.test(email)) {
      return message.error("이메일 형식이 올바르지 않습니다.");
    }
    if (!regPassword.test(password)) {
      return message.error("비밀번호는 영문자, 숫자, 특수문자 포함 8자리 이상 15자리 미만입니다.");
    }

    if (nickname == "") {
      return message.error("닉네임은 필수값입니다.");
    }

    if (data && data2) { //닉네임,이메일 중복이 아닐 때
      setVisible(true);
    } else {
      if (data == null) {//닉네임이 중복일 때
        return message.error("이미 사용중인 닉네임 입니다.");
      }
      if (data2 == null) {//이메일이 중복일 때
        return message.error("이미 사용중인 이메일 입니다.");
      }
    }
  }, [nickname, email, password]);

  return (
    <>
      <Form onFinish={onSubmit} style={{ padding: '10px' }}>
        <h1>이메일로 시작하기</h1>
        <h2>입력하신 메일로 본인인증을 위한 인증번호가 전송됩니다.<br />비밀번호는 1번만 입력하니 정확히 입력해주세요.</h2>
        <h3>이메일</h3>
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} />
        <h3>비밀번호</h3>
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} />
        <h3>닉네임</h3>
        <Input name="user-nickname" type="text" value={nickname} onChange={onChangeNickname} />
        <Button type="primary" htmlType="submit" loading={loading}>다음</Button>
        <Modal
          title="약관 동의"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Terms />
        </Modal>
      </Form>
    </>
  );
}

export default SignupPage;
