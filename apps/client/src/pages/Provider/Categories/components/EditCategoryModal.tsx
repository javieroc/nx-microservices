import { useEffect } from "react";
import { useQueryClient } from 'react-query';
import { Form, Input, Modal } from "antd";
import { Category } from "../../../../types";
import { useNotification } from '../../../../hooks';
import { QUERY_KEYS } from '../../../../constants';
import { useUpdateCategory } from "../../hooks";

interface Props {
  category: Category;
  visible: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

function EditCategoryModal({ category, visible, onSubmit, onCancel }: Props): JSX.Element {
  const [form] = Form.useForm<Category>();
  const queryClient = useQueryClient();
  const notification = useNotification();

  const { mutate: updateCategory } = useUpdateCategory({
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CATEGORIES]);
      notification('success', 'Categories', 'Category was updated successfully!');
    }
  });

  function handleSubmit(values) {
    updateCategory({ id: category.id, ...values });
    onSubmit();
    form.resetFields();
  }

  function handleCancel() {
    form.resetFields();
    onCancel();
  }

  useEffect(() => {
    form.setFieldsValue(category ?? {})
   }, [form, category]);

  return (
    <Modal onOk={form.submit} onCancel={handleCancel} visible={visible} forceRender>
      <h2>{`Edit Category ${category?.name}`}</h2>
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

export { EditCategoryModal };
