import { Spin, Table, Button } from 'antd';
import { css } from '@emotion/css';
import { DeleteOutlined, EditOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Category } from '../../../types';


const headerCss = css({
  display: 'flex',
  justifyContent: 'space-between',
});

function Products(): JSX.Element {

  //const { data: categories, isLoading: isLoadingCategories } = useCategories();

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
            <Button type="link" shape="circle" icon={<EditOutlined />} />
            <Button type="link" shape="circle" icon={<DeleteOutlined />} />
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
        >
          Add Product
        </Button>
      </div>
      {/* {isLoadingCategories
        ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        : categories
          ? <Table dataSource={categories} columns={columns} rowKey="id" size="small" />
          : <h1>No Data</h1>
      } */}
    </div>
  );
}

export { Products };
