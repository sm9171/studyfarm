import { message } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getStudy } from "../../lib/api/study";
import { StudyType } from "../../lib/types/study";

import styled from "styled-components";
import Link from "next/link";

function StudyDeatil() {
  const router = useRouter();
  const { seq } = router.query;
  // state
  const [study, setStudy] = useState<StudyType | null>(null);

  const getData = async () => {
    console.log(seq);
    const [data, error] = await getStudy(Number(seq));
    if (data) {
      if (data.code === 200) {
        setStudy(data.result);
      } else {
        message.error(data.code);
      }
    } else if (error) {
      if (error.code === 400) {
        message.error(error.message);
        router.push("/study");
      }
    }
  };

  useEffect(() => {
    if (seq) {
      getData();
    }
  }, [seq]);

  if (!study) {
    return null;
  }

  return (
    <Container>
      <Link href="/study">
        <a>스터디 리스트</a>
      </Link>
      <Item>{study.title}</Item>
      <Item>{study.contents}</Item>
      <Item>{study.topic_name}</Item>
      <Item>{study.category_name}</Item>
    </Container>
  );
}

export default StudyDeatil;

const Container = styled.div`
  padding: 16px;
`;

const Item = styled.div`
  margin: 8px 0px;
`;
