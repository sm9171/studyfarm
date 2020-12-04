import { message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import StudyList from "../../components/Study/StudyList";
import { getStudies } from "../../lib/api/study";
import { UserResultType } from "../../lib/types/auth";
import { StudyType } from "../../lib/types/study";
import { getUser } from "../../lib/utils";

import styled from "styled-components";

const Home = () => {
  const [user, setUser] = useState<UserResultType | null>(null);
  const [studies, setStudies] = useState<StudyType[]>([]);

  const getData = async () => {
    const [data, error] = await getStudies();
    if (data) {
      if (data.code === 200) {
        const sortStudy = data.result.study.sort(
          (a, b) => b.study_seq - a.study_seq
        );
        setStudies(data.result.study as StudyType[]);
      } else {
        message.error(data.code);
      }
    } else if (error) {
      if (error.code === 400) {
        message.error(error.message);
      }
    }
  };

  useEffect(() => {
    setUser(getUser());
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Link href="/study/create">
        <a>스터디 생성하기</a>
      </Link>
      <StudyList studies={studies} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 16px;
`;
