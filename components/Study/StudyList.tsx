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
        <StudyContainer>
          <StudyItem study={study} />
        </StudyContainer>
      ))}
    </Container>
  );
}

export default StudyList;

const Container = styled.div``;

const StudyContainer = styled.div`
  margin-bottom: 8px;
`;
