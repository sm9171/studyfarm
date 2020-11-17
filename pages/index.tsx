import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import StudyList from "../components/Study/StudyList";
import { getStudies } from "../lib/api/study";
import { UserResultType } from "../lib/types/auth";
import { StudyType } from "../lib/types/study";
import { getUser } from "../lib/utils";

const Home = () => {
  const [user, setUser] = useState<UserResultType | null>(null);
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
    setUser(getUser());
  }, []);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`;
  }, [user]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <StudyList studies={studies} />
    </div>
  );
};

export default Home;
