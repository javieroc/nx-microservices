import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Form, Input, Modal, Select } from "antd";
import { useNotification } from '../../../../hooks';
import { QUERY_KEYS } from '../../../../constants';
import { MiscUtils } from '../../../../utils';
import { useCategories } from '../../Categories/hooks';
import { Category } from '../../Categories/types';
import { Product } from '../types';
import { useUpdateProduct } from '../hooks';

interface Props {
  visible: boolean;
  product: Product;
  onSubmit: () => void;
  onCancel: () => void;
}

function EditProductModal({ visible, product, onSubmit, onCancel }: Props): JSX.Element {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const notification = useNotification();
  const { data: categories, isLoading: isLoadingCategories } = useCategories();

  const { mutate: updateProduct } = useUpdateProduct({
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
      notification('success', 'Products', 'Product was updated successfully!');
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
    updateProduct({ id: product.id, ...values });
    onSubmit();
    form.resetFields();
  }

  function handleCancel() {
    form.resetFields();
    onCancel();
  }

  useEffect(() => {
    form.setFieldsValue(product ?? {})
   }, [form, product, visible]);

  return (
    <Modal onOk={form.submit} onCancel={handleCancel} visible={visible} forceRender>
      <h2>Edit Product</h2>
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

        <Form.Item name="categoryId">
          <Select placeholder="Select Category" loading={isLoadingCategories}>
            {categories && categories.map((category: Category) => (
              <Select.Option key={category.id} value={category.id}>{category.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export { EditProductModal };
