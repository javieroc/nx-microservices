import { useQueryClient } from 'react-query';
import { Form, Input, Modal } from "antd";
import { Category } from "../../../../types";
import { useNotification } from '../../../../hooks';
import { QUERY_KEYS } from '../../../../constants';
import { useAddCategory } from "../../hooks";

interface Props {
  visible: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

function CreateCategoryModal({ visible, onSubmit, onCancel }: Props): JSX.Element {
  const [form] = Form.useForm<Category>();
  const queryClient = useQueryClient();
  const notification = useNotification();

  const { mutate: createCategory } = useAddCategory({
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CATEGORIES]);
      notification('success', 'Categories', 'Category was added successfully!');
    }
  });

  function handleSubmit(values) {
    createCategory(values);
    onSubmit();
    form.resetFields();
  }

  function handleCancel() {
    form.resetFields();
    onCancel();
  }

  return (
    <Modal onOk={form.submit} onCancel={handleCancel} visible={visible} forceRender>
      <h2>Add new Category</h2>
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item name="name">
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item name="description">
          <Input.TextArea placeholder="This is a description" rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export { CreateCategoryModal };
