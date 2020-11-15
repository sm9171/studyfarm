import React from "react";
import { Input, Button, Form } from 'antd';

function AddInfoTemplate() {

    return (
        <>
            <h1>추가 정보</h1>
            <h2>추가정보를 써주시면 얻는 베네핏 안내</h2>
            <Button type="primary" htmlType="submit" loading={false}>다음</Button>

        </>
    );
}

export default AddInfoTemplate;