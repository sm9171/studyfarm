import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, Input, Popover, Button } from "antd";
import PropTypes from "prop-types";


const Header = () => {
    const [visible, setVisible] = useState(false);



    const handleVisibleChange = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">
                        <a>스펀지</a>
                    </Link>
                </Menu.Item>

                <Menu.Item key="search">
                    <Popover
                        content={<a onClick={onClose}>Close</a>}
                        title="Title"
                        trigger="click"
                        visible={visible}
                        onVisibleChange={handleVisibleChange}
                    >
                        <Button type="primary">Click me</Button>
                    </Popover>
                </Menu.Item>
                <Menu.Item key="login">
                    <Link href="/login">
                        <a>로그인</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link href="/signup">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Header;
