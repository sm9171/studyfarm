import { message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import StudyList from "../components/Study/StudyList";
import { getStudies } from "../lib/api/study";
import { StudyType } from "../lib/types/study";

const Home = () => {
  const [studies, setStudies] = useState<StudyType[]>([]);

  const getData = async () => {
    const [data, error] = await getStudies();
    if (data) {
      if (data.code === 200) {
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
    getData();
  }, []);

  return (
    <div>
      <Link href="/study/create">
        <a>스터디 생성하기</a>
      </Link>
      <StudyList studies={studies} />
    </div>
  );
};

export default Home;
