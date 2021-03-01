import React, { ReactNode } from "react";
import Link from "next/link";
import { Menu, Input } from "antd";
import PropTypes from "prop-types";

interface FooterProps {
    children: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">
                        <a>스터디팜</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: "middle" }} />
                </Menu.Item>
            </Menu>
            {children}
        </div>
    );
};
Footer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Footer;
