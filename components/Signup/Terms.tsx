import React from "react";
import { Checkbox, Divider } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['스터디팜 이용약관 동의[필수]', '개인정보 수집이용 동의[필수]', '개인정보 수집이용 동의[선택]', '마케팅 정보 수신 동의[선택]'];

function Terms() {
    const [checkedList, setCheckedList] = React.useState(['']);
    const [indeterminate, setIndeterminate] = React.useState(false);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = (list: any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);

    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                전체 동의
            </Checkbox>
            <Divider />
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </>
    );
}

export default Terms;