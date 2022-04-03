import React, { memo, useCallback, useState, useMemo } from 'react';
import { Link, SelectLang } from 'umi';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import styles from './index.less';

const { Header } = Layout;

const GlobalHeader = ({ dispatch, hideUser, title, userData }) => {
  const menuData = useMemo(() => {
    return [
      {
        label: '印章图鉴',
        value: 'yinzhangtujian',
      },
      {
        label: '印泥试色',
        value: 'yinnishise',
      },
      {
        label: '手账拼贴',
        value: 'shouzhangpintie',
      },
      {
        label: '火漆章图鉴',
        value: 'huoqizhangtujian',
      },
      {
        label: '火漆蜡',
        value: 'huoqila',
      },
    ];
  });
  const renderMenuItem = useCallback(() => {
    return menuData.map((menuItem) => {
      return (
        <Menu.Item key={menuItem.value} className={styles.menuItem}>
          {menuItem.label}
        </Menu.Item>
      );
    });
  });

  return (
    <Header className={styles.header}>
      <Menu mode="horizontal">{renderMenuItem()}</Menu>
    </Header>
  );
};

GlobalHeader.defaultProps = {
  hideUser: false,
};
GlobalHeader.propTypes = {
  hideUser: PropTypes.bool,
};

export default memo(GlobalHeader);
