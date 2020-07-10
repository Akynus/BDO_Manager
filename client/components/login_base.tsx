import * as React from "react";
import {Space, Typography, Divider, Button, Form, Row, Col, Input} from "antd";
import {GoogleOutlined, FacebookOutlined, LoginOutlined, UserOutlined, LockOutlined} from "@ant-design/icons";

export default class LoginBase extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    private containerForm(): React.ReactElement {
        const {Item} = Form;

        return <Form layout={"vertical"}>
            <Row gutter={[10, 10]}>
                <Col span={24}>
                    <Item>
                        <Input prefix={<UserOutlined/>} placeholder={'Usuário'}/>
                    </Item>
                </Col>
                <Col span={24}>
                    <Item>
                        <Input prefix={<LockOutlined/>} placeholder={'Senha'}/>
                    </Item>
                </Col>
                <Col span={24}>
                    <Button shape="round" type={"primary"} icon={<LoginOutlined/>} block={true}>Entrar</Button>
                </Col>
            </Row>
        </Form>
    }

    private containerLogin(): React.ReactElement {
        return <div className={'login-base-container'}>
            <Divider orientation={"left"}>
                <Typography.Text className={'login-base-auth-text'}>Login / Autenticação</Typography.Text>
            </Divider>
            {this.containerForm()}
            <Divider orientation={"center"}>
                <Typography.Text className={'login-base-info-text'} type={"secondary"}>
                    usando as redes sociais:
                </Typography.Text>
            </Divider>
            <Space className={'login-base-actions'} align={"center"} size={"large"} direction={"horizontal"}>
                <Button shape="circle" type={"primary"} icon={<GoogleOutlined/>} size={"large"}/>
                <Button shape="circle" type={"primary"} icon={<FacebookOutlined/>} size={"large"}/>
            </Space>
        </div>
    }

    render() {
        return <div className={'login-base'}>
            <div className={'login-base-logo'}/>
            {this.containerLogin()}
        </div>;
    }
}

interface IProps {
}

interface IState {

}