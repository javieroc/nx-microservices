import { useQueryClient } from 'react-query';
import { Modal } from "antd";
import { useNotification } from '../../../../hooks';
import { QUERY_KEYS } from '../../../../constants';
import { useDeleteProduct } from "../hooks";
import { Product } from "../types";

interface Props {
  product: Product;
  visible: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

function DeleteProductModal({ product, visible, onSubmit, onCancel }: Props): JSX.Element {
  const queryClient = useQueryClient();
  const notification = useNotification();

  const { mutate: deleteProduct } = useDeleteProduct({
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
      notification('success', 'Products', 'Product was delete!');
    },
    onError: () => {
      notification('error', 'Products', 'Product cannot be deleted!');
    }
  });

  function handleDelete() {
    deleteProduct(product.id);
    onSubmit();
  }

  function handleCancel() {
    onCancel();
  }

  return (
    <Modal onOk={handleDelete} onCancel={handleCancel} visible={visible} forceRender>
      <h3>{`Are sure want to delete ${product?.name} product`}</h3>
    </Modal>
  );
}

export { DeleteProductModal };
