import { useState } from 'react';
import { Spin, Table, Button } from 'antd';
import { css } from '@emotion/css';
import { DeleteOutlined, EditOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { CreateCategoryModal, DeleteCategoryModal, EditCategoryModal } from './components';
import { useCategories } from "./hooks";
import { Category } from './types';

const headerCss = css({
  display: 'flex',
  justifyContent: 'space-between',
});

function Categories(): JSX.Element {

  const { data: categories, isLoading: isLoadingCategories } = useCategories();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState<Category>();
  const [categoryToDelete, setCategoryToDelete] = useState<Category>();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Actions',
      align: 'center' as const,
      render: (_: string, category: Category) => {
        return (
          <>
            <Button type="link" shape="circle" icon={<EditOutlined />} onClick={() => {
              setCategoryToEdit(category);
              setShowEditModal(true);
            }} />
            <Button type="link" shape="circle" icon={<DeleteOutlined />} onClick={() => {
              setCategoryToDelete(category);
              setShowDeleteModal(true);
            }} />
          </>
        )
      }
    }
  ];

  return (
    <div>
      <div className={headerCss}>
        <h1>Categories</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="small"
          onClick={() => setShowCreateModal(true)}
        >
          Add Category
        </Button>
      </div>
      {isLoadingCategories
        ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        : categories
          ? <Table dataSource={categories} columns={columns} rowKey="id" size="small" />
          : <h1>No Data</h1>
      }
      <CreateCategoryModal
        visible={showCreateModal}
        onSubmit={() => setShowCreateModal(false)}
        onCancel={() => setShowCreateModal(false)}
      />
      <EditCategoryModal
        visible={showEditModal}
        onSubmit={() => setShowEditModal(false)}
        onCancel={() => setShowEditModal(false)}
        category={categoryToEdit}
      />
      <DeleteCategoryModal
        visible={showDeleteModal}
        onSubmit={() => setShowDeleteModal(false)}
        onCancel={() => setShowDeleteModal(false)}
        category={categoryToDelete}
      />
    </div>
  );
}

export { Categories };
