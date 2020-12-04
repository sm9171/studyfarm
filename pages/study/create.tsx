import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { createStudy } from "../../lib/api/study";

import styled from "styled-components";
import { message } from "antd";
import { useRouter } from "next/router";

type Inputs = {
  title: string;
  study_limit: number;
  week: string;
  week_type: number;
  state: number;
  city: number;
  contents: string;
  category: number;
  topic: number;
  color: string;
  study_day: number;
};

function create() {
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  const onSubmit = handleSubmit(async (inputs) => {
    const newStudy = {
      title: inputs.title,
      study_limit: Number(inputs.study_limit),
      week: inputs.week,
      week_type: Number(inputs.week_type),
      state: Number(inputs.state),
      city: Number(inputs.city),
      contents: inputs.contents,
      category: Number(inputs.category),
      topic: Number(inputs.topic),
      color: inputs.color,
      study_day: Number(inputs.study_day),
    };
    const [data, error] = await createStudy(newStudy);
    if (data) {
      if (data.code === 200) {
        router.push("/study");
      } else {
        message.error(data.code);
      }
    } else if (error) {
      if (error.code === 400) {
        message.error(error.message);
      }
    }
  });

  return (
    <Container>
      <Link href="/study">
        <a>스터디 리스트</a>
      </Link>
      <Form onSubmit={onSubmit}>
        <Item>
          <label>스터디 제목</label>
          <br />
          <input ref={register({ required: true })} name="title" type="text" />
          {errors.title && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <label>스터디 제한인원</label>
          <br />
          <input
            ref={register({ required: true })}
            name="study_limit"
            type="number"
          />
          {errors.study_limit && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <label>스터디 하는 날</label>
          <br />
          <input ref={register({ required: true })} name="week" type="date" />
          {errors.week && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <label>스터디 하는 날 타입</label>
          <br />
          <input
            ref={register({ required: true })}
            name="week_type"
            type="radio"
            defaultValue={0}
            defaultChecked
          />
          매주
          <br />
          <input
            ref={register({ required: true })}
            name="week_type"
            type="radio"
            defaultValue={1}
          />
          격주
        </Item>
        <Item>
          <label>지역 코드</label>
          <br />
          <input
            ref={register({ required: true })}
            name="state"
            type="number"
            defaultValue={1}
          />
          {errors.state && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <label>주소 코드</label>
          <br />
          <input
            ref={register({ required: true })}
            name="city"
            type="number"
            defaultValue={1}
          />
          {errors.city && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <label>스터디 내용</label>
          <br />
          <textarea ref={register({ required: true })} name="contents" />
          {errors.contents && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <label>대분류</label>
          <br />
          <input
            ref={register({ required: true })}
            name="category"
            type="number"
            defaultValue={1}
          />
          {errors.category && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <label>소분류</label>
          <br />
          <input
            ref={register({ required: true })}
            name="topic"
            type="number"
            defaultValue={1}
          />
          {errors.topic && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <label>색상</label>
          <br />
          <input ref={register({ required: true })} name="color" type="color" />
          {errors.color && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <label>스터디 진행 일수</label>
          <br />
          <input
            ref={register({ required: true })}
            name="study_day"
            type="number"
          />
          {errors.study_day && <div>필수 입력 입니다!</div>}
        </Item>
        <Item>
          <input type="submit" defaultValue="생성" />
        </Item>
      </Form>
    </Container>
  );
}

export default create;

const Container = styled.div`
  padding: 16px;
`;

const Form = styled.form``;

const Item = styled.div`
  margin: 8px 0px;
`;
