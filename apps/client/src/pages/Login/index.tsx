import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { SimpleLayout } from '../../components';

const formCss = css({
  width: '300px',
});

const loginButtonCss = css({
  width: '100%',
});

const registerLinkCss = css({
  textAlign: 'center',
});

function Login(): JSX.Element {
  return (
    <SimpleLayout>
      <Form className={formCss}>
        <Form.Item name="email">
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item name="password">
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={loginButtonCss}>
            Log in
          </Button>
        </Form.Item>

        <Form.Item className={registerLinkCss}>
          <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </SimpleLayout>
  );
}

export { Login };
