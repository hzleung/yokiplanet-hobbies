import React, { useCallback, useMemo } from 'react';
import { Carousel } from 'antd';
import styles from './index.less';
import slide1 from '@/asset/images/home/slide_1.jpg';
import slide2 from '@/asset/images/home/slide_2.jpg';
import slide3 from '@/asset/images/home/slide_3.jpg';
import slide4 from '@/asset/images/home/slide_4.jpg';
import slide5 from '@/asset/images/home/slide_5.jpg';
import slide6 from '@/asset/images/home/slide_6.jpg';
import slide7 from '@/asset/images/home/slide_7.jpg';

const Home = () => {
  const onChange = useCallback((value) => {
    console.log('value', value);
  });
  const slideData = useMemo(() => {
    return [
      {
        key: 'slide_3',
        imgSrc: slide3,
      },
      {
        key: 'slide_4',
        imgSrc: slide4,
      },
      {
        key: 'slide_5',
        imgSrc: slide5,
      },
      {
        key: 'slide_6',
        imgSrc: slide6,
      },
      {
        key: 'slide_7',
        imgSrc: slide7,
      },
      {
        key: 'slide_1',
        imgSrc: slide1,
      },
      {
        key: 'slide_2',
        imgSrc: slide2,
      },
    ];
  });
  return (
    <div className={styles.home}>
      <div className={styles.homeBottom}>
        <Carousel afterChange={onChange}>
          {slideData.map((slideItem) => {
            return (
              <div className={styles.slideItem} key={slideItem.key}>
                <img
                  className={styles.slideImg}
                  src={slideItem.imgSrc}
                  alt={slideItem.key}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className={styles.homeTop}>
        <div className={styles.ourTime}></div>
      </div>
    </div>
  );
};
export default Home;
