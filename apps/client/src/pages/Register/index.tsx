import { Form, Input, Button, Select } from 'antd';
import { css } from '@emotion/css';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { SimpleLayout } from '../../components';
import { useRegister } from './hooks/useRegister';

const formCss = css({
  width: '300px',
});

const registerButtonCss = css({
  width: '100%',
});

function Register(): JSX.Element {
  const [form] = Form.useForm();
  const { mutate: register } = useRegister();
  function handleSubmit(values) {
    console.log('form submit', values);
    form.resetFields();
  }
  return (
    <SimpleLayout>
      <Form className={formCss} onFinish={handleSubmit} form={form}>
        <Form.Item name="email">
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item name="firstname">
          <Input prefix={<UserOutlined />} placeholder="firstname" />
        </Form.Item>

        <Form.Item name="lastname">
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

        <Form.Item>
          <Button type="primary" htmlType="submit" className={registerButtonCss}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </SimpleLayout>
  );
}

export { Register };
