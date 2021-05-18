import { useQueryClient } from 'react-query';
import { Form, Input, Modal, Select } from "antd";
import { useNotification } from '../../../../hooks';
import { QUERY_KEYS } from '../../../../constants';
import { MiscUtils } from '../../../../utils';
import { useCategories } from '../../Categories/hooks';
import { Category } from '../../Categories/types';
import { useAddProduct } from '../hooks/useAddProduct';

interface Props {
  visible: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

function CreateProductModal({ visible, onSubmit, onCancel }: Props): JSX.Element {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const notification = useNotification();
  const { data: categories, isLoading: isLoadingCategories } = useCategories();

  const { mutate: createProduct } = useAddProduct({
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
      notification('success', 'Products', 'Product was added successfully!');
      onSubmit();
      form.resetFields();
    },
    onError: (err) => {
      const validationErrors = MiscUtils.getErrors(err);
      form.setFields(validationErrors.validations.map((validationError) => ({
        name: validationError.field.split('.').pop(),
        errors: [validationError.message]
      })));
    }
  });


  function handleSubmit(values) {
    createProduct(values);
  }

  function handleCancel() {
    form.resetFields();
    onCancel();
  }

  return (
    <Modal onOk={form.submit} onCancel={handleCancel} visible={visible} forceRender>
      <h2>Add new Product</h2>
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item name="name">
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item name="description">
          <Input.TextArea placeholder="This is a description" rows={3} />
        </Form.Item>

        <Form.Item name="price">
          <Input placeholder="Price" type="number" />
        </Form.Item>

        <Form.Item name="amount">
          <Input placeholder="Amount" type="number" />
        </Form.Item>

        <Form.Item name="role">
          <Select placeholder="Select Role" loading={isLoadingCategories}>
            {categories && categories.map((category: Category) => (
              <Select.Option value={category.id}>{category.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export { CreateProductModal };
