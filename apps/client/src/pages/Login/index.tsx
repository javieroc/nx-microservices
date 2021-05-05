import { Form, Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { css } from '@emotion/css';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { SimpleLayout } from '../../components';
import { MiscUtils } from '../../utils';
import { useAuth } from '../../hooks';
import { useLogin } from './hooks/useLogin';

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
  const [form] = Form.useForm();
  const history = useHistory();
  const { setAuth } = useAuth();
  const { mutate: login } = useLogin({
    onSuccess: (data) => {
      setAuth(data);
      form.resetFields();
      history.push(data.user.role === 'consumer' ? '/consumer' : '/provider');
    },
    onError: (err) => {
      const validationErrors = MiscUtils.getErrors(err);
      form.setFields(validationErrors.validations.map((validationError) => ({
        name: validationError.field,
        errors: [validationError.message]
      })));
    }
  });

  function handleSubmit(values) {
    login(values);
  }

  return (
    <SimpleLayout>
      <Form className={formCss} onFinish={handleSubmit} form={form}>
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
