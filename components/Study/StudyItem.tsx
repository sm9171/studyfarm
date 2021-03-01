import { useRouter } from "next/router";
import React from "react";
import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import styled from "styled-components";
import { StudyType } from "../../lib/types/study";

interface StudyItemProps {
  study: StudyType;
}

function StudyItem({ study }: StudyItemProps) {
  const router = useRouter();

  const goStudyDetail = () => {
    router.push(`/study/${study.study_seq}`);
  };

  return (
    <Container onClick={goStudyDetail}>
      <MainInfo>
        <Title>{study.title}</Title>
        <Subtitle>{study.simple_introduce}</Subtitle>
      </MainInfo>
      <SubInfo>
        <Members>
          <AiOutlineUser />
          현재/{study.study_limit}
        </Members>
        <AiOutlineCalendar />
        <StudyTime>협의예정</StudyTime>
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
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 3px 12px rgba(7, 7, 7, 0.23);
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: black;
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: gray;
`;

const Nickname = styled.div`
  margin-right: 8px;
`;

const Members = styled.div`
  position: absolute;
  top: 40px;
  right: 16px;
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.div`
  margin-right: 12px;
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
