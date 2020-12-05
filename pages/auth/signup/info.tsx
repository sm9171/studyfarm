import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import { Input, Button, Modal } from 'antd';
import useInput from '../../../hooks/useInput';
import { authNickname, authEmail } from '../../../lib/api/auth';
import Router, { withRouter } from "next/router";
import { PlusOutlined } from '@ant-design/icons';
import SubjectList from "../../../components/Signup/SubjectList";
function InfoPage() {
  const [visible, setVisible] = useState(false);

  const handleOk = () => { //모달 창 ok버튼
    setVisible(false);
  };

  const handleCancel = () => { //모달 창 cancel버튼
    setVisible(false);
  };

  const regionlist = () => {
    setVisible(true);
  };
  const subjectlist = () => {
    setVisible(true);
  }

  return (
    <>
      <h1>어떤 스터디를 찾고 있나요?</h1>
      <h2>입력하신 정보로 스터디를 찾을 수 있습니다.</h2>
      <h2>지역 정보는 다른 사람들에게 공유되지 않습니다.</h2>

      <h3>지역</h3>
      <Button onClick={regionlist}>추가하기<PlusOutlined /></Button>
      <h3>관심 스터디</h3>
      <Button onClick={subjectlist}>추가하기<PlusOutlined /></Button>
      <Button type="primary" htmlType="submit" loading={false}>곧 다왔어요!</Button>
      <Modal
        title="스터디 관심분야 선택"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <SubjectList />
      </Modal>
    </>
  );
}

export default InfoPage;