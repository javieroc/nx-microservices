import React from 'react';
import { Layout } from 'antd';
import { css } from '@emotion/css';

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  children: React.ReactNode;
  menu: React.ReactNode;
}

const layoutCss = css({
  height: '100vh',
});

const logoCss = css({
  height: '32px',
  margin: '16px',
  background: 'rgba(255, 255, 255, 0.2)',
});

function AdminLayout({ children, menu }: Props): JSX.Element {
  return (
    <Layout className={layoutCss}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className={logoCss} />
        {menu}
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: 'white' }} />
        <Content style={{ margin: '24px 16px 0' }}>
          {children}
        </Content>
        <Footer>Developer by Dev&Coffee</Footer>
      </Layout>
    </Layout>
  );
}

export { AdminLayout };
