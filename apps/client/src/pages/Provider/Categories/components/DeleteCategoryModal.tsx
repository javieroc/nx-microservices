import { useQueryClient } from 'react-query';
import { Modal } from "antd";
import { Category } from "../../../../types";
import { useNotification } from '../../../../hooks';
import { QUERY_KEYS } from '../../../../constants';
import { useDeleteCategory } from "../../hooks";

interface Props {
  category: Category;
  visible: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

function DeleteCategoryModal({ category, visible, onSubmit, onCancel }: Props): JSX.Element {
  const queryClient = useQueryClient();
  const notification = useNotification();

  const { mutate: deleteCategory } = useDeleteCategory({
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CATEGORIES]);
      notification('success', 'Categories', 'Category was delete!');
    }
  });

  function handleDelete() {
    deleteCategory(category.id);
    onSubmit();
  }

  function handleCancel() {
    onCancel();
  }

  return (
    <Modal onOk={handleDelete} onCancel={handleCancel} visible={visible} forceRender>
      <h2>{`Are sure want delete category ${category?.name}`}</h2>
    </Modal>
  );
}

export { DeleteCategoryModal };
