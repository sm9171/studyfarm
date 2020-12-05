import React from "react";
import { StudyType } from "../../lib/types/study";

import styled from "styled-components";
import StudyItem from "./StudyItem";

interface StudyListProp {
  studies: StudyType[];
}

function StudyList({ studies }: StudyListProp) {
  return (
    <Container>
      {studies.map((study) => (
        <StudyContainer key={study.study_seq.toString()}>
          <StudyItem study={study} />
        </StudyContainer>
      ))}
    </Container>
  );
}

export default StudyList;

const Container = styled.ul``;

const StudyContainer = styled.li`
  margin: 8px 0px;
`;
