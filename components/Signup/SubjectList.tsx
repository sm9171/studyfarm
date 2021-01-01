import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import { Input, Button, Row, Col, List } from 'antd';
import Router, { withRouter } from "next/router";
const { Search } = Input;
function SubjectList() {
    const onSearch = (value: String) => console.log(value);
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];


    return (
        <>
            <Search placeholder="관심 스터디를 검색해보세요." onSearch={onSearch} enterButton />
            <Row>
                <Col span={9}>
                    <List
                        header={<div>종류</div>}
                        bordered
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                {item.title}
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={15}>
                    <List
                        header={<div>과목</div>}
                        bordered
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                {item.title}
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
            <h2>지역 정보는 다른 사람들에게 공유되지 않습니다.</h2>

            <h3>지역</h3>

            <h3>관심 스터디</h3>
        </>
    );
}

export default SubjectList;