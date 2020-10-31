import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";
import {
  Form,
  Typography,
  Input,
  Checkbox,
  Button,
  Divider,
  message,
} from "antd";
import useInput from "../../../hooks/useInput";
import { onLogin } from "../../../lib/api/auth";

const { Text } = Typography;

function IndexPage() {
  const router = useRouter();

  const [loginLoading, setLoginLoading] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(async () => {
    setLoginLoading(true);
    const [data, error] = await onLogin(email, password);
    console.log(data, error);
    setLoginLoading(false);
    if (data) {
      message.success("로그인에 성공하였습니다.");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      message.error(error.message);
    }
  }, [email, password]);

  return (
    <Form onFinish={onSubmit}>
      <div>
        <Text>로그인하기</Text>
        <br />
        <Text>본인인증을 위한 인증번호가 발송됩니다.</Text>
      </div>
      <div>
        <label>이메일</label>
        <br />
        <Input type="email" required value={email} onChange={onChangeEmail} />
      </div>
      <div>
        <label>비밀번호</label>
        <br />
        <Input
          type="password"
          required
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div>
        <Checkbox />
        <Text>자동 로그인</Text>
      </div>
      <div>
        <Button htmlType="submit" loading={loginLoading}>
          로그인하기
        </Button>
      </div>
      <div>
        <Text>비밀번호를 잊어버렸나요?</Text>
      </div>
      <Divider plain>소셜 계정으로 로그인하기</Divider>
      <div>
        <Button>Naver</Button>
        <Button>Kakao</Button>
        <Button>Google</Button>
      </div>
    </Form>
  );
}

export default IndexPage;

const FatText = styled.div``;

const SubText = styled.div``;
