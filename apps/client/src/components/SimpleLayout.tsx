import React from 'react';
import { css } from '@emotion/css';
import { Layout } from 'antd';

interface Props {
  children: React.ReactNode;
}

const layoutCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

function SimpleLayout({ children }: Props): JSX.Element {
  return (
    <Layout className={layoutCss}>{children}</Layout>
  );
}

export { SimpleLayout };
