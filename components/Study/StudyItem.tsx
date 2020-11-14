import React from "react";
import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import styled from "styled-components";
import { StudyType } from "../../lib/types/study";

interface StudyItemProps {
  study: StudyType;
}

function StudyItem({ study }: StudyItemProps) {
  return (
    <Container>
      <MainInfo>
        <Title>{study.title}</Title>
        <Subtitle>{study.simple_introduce}</Subtitle>
      </MainInfo>
      <SubInfo>
        <AiOutlineUser />
        <Nickname>{study.nickname}</Nickname>
        <Members>
          {study.users.length}/{study.study_limit}
        </Members>
        <AiOutlineCalendar />
        <StudyTime>매주, 토</StudyTime>
      </SubInfo>
      <Tags>
        {study.interesting.map((item) => (
          <Tag>#{item.name}</Tag>
        ))}
      </Tags>
      <CreatedTime>{study.dateFormat}</CreatedTime>
    </Container>
  );
}

export default StudyItem;

const Container = styled.div`
  border: 1px solid black;
  padding: 16px;
  position: relative;
`;

const Title = styled.div`
  font-size: 18px;
  color: black;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: gray;
`;

const Nickname = styled.div`
  font-weight: 600;
  margin-right: 8px;
`;

const Members = styled.div`
  margin-right: 8px;
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.div`
  margin-right: 4px;
`;

const StudyTime = styled.div``;

const MainInfo = styled.div``;

const SubInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CreatedTime = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: lightcoral;
`;
