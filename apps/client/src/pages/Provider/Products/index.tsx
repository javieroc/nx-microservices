import { useState } from 'react';
import { Spin, Table, Button } from 'antd';
import { css } from '@emotion/css';
import { DeleteOutlined, EditOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useProducts } from './hooks';
import { Product } from './types';
import { CreateProductModal, DeleteProductModal, EditProductModal } from './components';

const headerCss = css({
  display: 'flex',
  justifyContent: 'space-between',
});

function Products(): JSX.Element {
  const { data: products, isLoading: isLoadingProducts } = useProducts();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product>();
  const [productToDelete, setProductToDelete] = useState<Product>();

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
      title: 'Category',
      dataIndex: ['category', 'name'],
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Actions',
      align: 'center' as const,
      render: (_: string, product: Product) => {
        return (
          <>
            <Button type="link" shape="circle" icon={<EditOutlined />} onClick={() => {
              setProductToEdit(product);
              setShowEditModal(true);
            }} />
            <Button type="link" shape="circle" icon={<DeleteOutlined />} onClick={() => {
              setProductToDelete(product);
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
        <h1>Products</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="small"
          onClick={() => setShowCreateModal(true)}
        >
          Add Product
        </Button>
      </div>
      {isLoadingProducts
        ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        : products
          ? <Table dataSource={products} columns={columns} rowKey="id" size="small" />
          : <h1>No Data</h1>
      }
      <CreateProductModal
        visible={showCreateModal}
        onSubmit={() => setShowCreateModal(false)}
        onCancel={() => setShowCreateModal(false)}
      />
      <EditProductModal
        visible={showEditModal}
        onSubmit={() => setShowEditModal(false)}
        onCancel={() => setShowEditModal(false)}
        product={productToEdit}
      />
      <DeleteProductModal
        visible={showDeleteModal}
        onSubmit={() => setShowDeleteModal(false)}
        onCancel={() => setShowDeleteModal(false)}
        product={productToDelete}
      />
    </div>
  );
}

export { Products };
