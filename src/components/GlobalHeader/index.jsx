import React, { memo, useCallback, useState, useMemo } from 'react';
import { Link, SelectLang } from 'umi';
import PropTypes from 'prop-types';
import { Layout, Menu, Dropdown, Icon, Spin, Input, Badge, Avatar } from 'antd';
import HeaderLogo from '@/components/HeaderLogo';
import styles from './index.less';
import { ShoppingOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout;

const GlobalHeader = ({ dispatch, hideUser, title, userData, loginUrl }) => {
  const [useInfo] = useState(() => {
    return JSON.parse(localStorage.getItem("userInfo"));
  });
  const [loginText] = useState('Log In');
  const onMenuClick = () => {
    localStorage.removeItem("userInfo");
    location.reload();
  };

  const menuData = useMemo(() => {
    return [
      {
        id: 'stationery-apothecary',
        name: 'Stationery Apothecary',
        drowDownList: [
          {
            id: 'shop-all-stationery',
            name: 'Shop all stationery',
          },
          {
            id: 'remedy-bar',
            name: 'Remedy Bar',
          },
        ],
      },
      {
        id: 'about-us',
        name: 'About us',
      },
      {
        id: 'one-the-desk',
        name: 'One the desk',
        drowDownList: [
          {
            id: 'aykasa-storage',
            name: 'Aykasa Storage',
          },
        ],
      },
      {
        id: 'more',
        name: 'More...',
        drowDownList: [
          {
            id: 'brands',
            name: 'Brands',
          },
          {
            id: 'raw-market-shop',
            name: 'Raw Market Shop',
          },
          {
            id: 'appre',
            name: 'Appre',
          },
          {
            id: 'classiky',
            name: 'Classiky',
          },
          {
            id: 'mu-craft',
            name: 'MU Craft',
          },
        ],
      },
    ];
  });
  const renderMenuItem = useCallback(() => {
    return menuData.map((menuItem) => {
      if (menuItem.drowDownList) {
        return (
          <Menu.SubMenu key={menuItem.id} title={menuItem.name}>
            {menuItem.drowDownList.length &&
              menuItem.drowDownList.map((dropDownItem) => {
                return (
                  <Menu.Item key={dropDownItem.id}>
                    {dropDownItem.name}
                  </Menu.Item>
                );
              })}
          </Menu.SubMenu>
        );
      }
      return <Menu.Item key={menuItem.id}>{menuItem.name}</Menu.Item>;
    });
  });
  const onSearch = useCallback((value) => {
    console.log('value', value);
  });

  return (
    <Header className={styles.header}>
      <div className={styles.headerLeft}>
        <Menu mode="horizontal">{renderMenuItem()}</Menu>
      </div>
      <div className={styles.headerCenter}>
        <HeaderLogo />
      </div>
      <div className={styles.headerRight}>
        <Input.Search
          placeholder="Search..."
          onSearch={onSearch}
          style={{ width: 200 }}
          allowClear
          bordered={false}
        />
        <div className={styles.shopCart}>
          <Badge count={0} showZero color="#000000">
            <ShoppingOutlined style={{ fontSize: 24 }} />
          </Badge>
        </div>
        <div className={styles.login}>
          {useInfo?.name 
          ? <span className={styles.userInfo}>
              <Dropdown
              overlay={
                <Menu className={styles.userMenu} onClick={onMenuClick}>
                  <Link to={'/'}>
                    <Menu.Item key="logout">
                      <LogoutOutlined />
                      退出登录
                    </Menu.Item>
                  </Link>
                </Menu>
              }
            >
              <span className={styles.account}>  
                <Avatar size="small" className={styles.avatar} src={useInfo.avatar} alt="avatar" />
                <span className={`${styles.name} anticon`}>{useInfo.name}</span>
              </span>
            </Dropdown>
            </span>
          : <Link to={'/login'}>{loginText}</Link>}
          <SelectLang className={styles.action} />
        </div>
      </div>
    </Header>
  );
};

GlobalHeader.defaultProps = {
  hideUser: false,
  loginUrl: '/login'
};
GlobalHeader.propTypes = {
  hideUser: PropTypes.bool,
  loginUrl: PropTypes.string
};

export default memo(GlobalHeader);
