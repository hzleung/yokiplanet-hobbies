import React, { useState } from 'react';
import { Layout } from 'antd';
import GlobalHeader from '@/components/GlobalHeader';
import MenuContext from './MenuContext';
import styles from './BasicLayout.less';
const { Content } = Layout;

const BasicLayout = (props) => {
  const {
    dispatch,
    children,
    location = {
      pathname: '/',
    },
    global,
    userData,
  } = props;
  console.log('children', children);
  return (
    <Layout className={styles.siteLayout}>
      <GlobalHeader userData={userData} {...props} />
      <Content className={styles.content}>
        <MenuContext.Provider
          value={{ routes: props.route.routes, currentPath: location.pathname }}
        >
          <div
            className={styles.siteLayoutBackground}
            style={{ minHeight: 360 }}
          >
            {children}
          </div>
        </MenuContext.Provider>
      </Content>
    </Layout>
  );
};

export default BasicLayout;
