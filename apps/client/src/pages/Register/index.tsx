import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Form, Input, Button, Select } from 'antd';
import { css } from '@emotion/css';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { SimpleLayout } from '../../components';
import { MiscUtils } from '../../utils';
import { useRegister } from './hooks/useRegister';

const formCss = css({
  width: '300px',
});

const registerButtonCss = css({
  width: '100%',
});

const loginLinkCss = css({
  textAlign: 'center',
});

function Register(): JSX.Element {
  const [form] = Form.useForm();
  const history = useHistory();
  const { mutate: register } = useRegister({
    onSuccess: () => {
      form.resetFields();
      history.push('/login');
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
    register(values);
  }

  return (
    <SimpleLayout>
      <Form className={formCss} onFinish={handleSubmit} form={form}>
        <Form.Item name="email">
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item name="firstName">
          <Input prefix={<UserOutlined />} placeholder="firstname" />
        </Form.Item>

        <Form.Item name="lastName">
          <Input prefix={<UserOutlined />} placeholder="lastname" />
        </Form.Item>

        <Form.Item name="role">
          <Select placeholder="Select Role">
            <Select.Option value="provider">Provider</Select.Option>
            <Select.Option value="consumer">Consumer</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="password">
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item name="confirmPassword">
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={registerButtonCss}>
            Register
          </Button>
        </Form.Item>

        <Form.Item className={loginLinkCss}>
          <Link to="/login">Log in!</Link>
        </Form.Item>
      </Form>
    </SimpleLayout>
  );
}

export { Register };
