import React from 'react'
import PropTypes from 'prop-types'
// import Logo from '@/assets/header-logo.svg'

import styles from './index.less'

const HeaderLogo = ({ isLogin, title }) => (
  <div className={styles.logo}>
    <span
      className={styles.text}
      style={{
        fontSize: isLogin ? '24px' : '20px',
      }}
    >
      {title}
    </span>
  </div>
)

HeaderLogo.defaultProps = {
  isLogin: false,
  title: 'YokiPlanet Raw',
}
HeaderLogo.propTypes = {
  isLogin: PropTypes.bool,
  title: PropTypes.string,
}

export default HeaderLogo
