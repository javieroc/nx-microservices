import { Redirect } from "react-router";
import { Link, Route, Switch as RouterSwitch } from 'react-router-dom';
import { Menu } from 'antd';
import { ApartmentOutlined, ShopOutlined } from '@ant-design/icons';
import { AdminLayout } from "../../components";
import { useAuth } from "../../hooks";
import { Categories } from './Categories';
import { Products } from './Products';

function Provider(): JSX.Element {
  const { auth } = useAuth();

  if (auth.user.role !== 'provider') {
    return <Redirect to="/forbidden" />
  }

  function renderMenu(): React.ReactElement {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['categories']}>
        <Menu.Item key="categories" icon={<ApartmentOutlined />}>
          <Link to="/provider/categories">
            Categories
          </Link>
        </Menu.Item>
        <Menu.Item key="products" icon={<ShopOutlined />}>
          <Link to="/provider/products">
            Products
          </Link>
        </Menu.Item>
      </Menu>
    );
  }

  return (
    <AdminLayout menu={renderMenu()}>
      <RouterSwitch>
        <Route exact path={['/provider', '/provider/categories']} component={Categories} />
        <Route exact path="/provider/products" component={Products} />
      </RouterSwitch>
    </AdminLayout>
  );
}

export { Provider }
