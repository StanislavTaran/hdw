import React from 'react';
import Paragraph from '../common/Paragraph/Paragraph';
import styles from './MyProfile.module.scss';
import photo from '../../images/user.jpg';

export default function MyProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.mainInfoBlock}>
        <img className={styles.myPhoto} src={photo} alt="my_photo" />
        <Paragraph title="Full Name : ">Stanislav Taran</Paragraph>
        <Paragraph title="Date of Birth : ">31.01.1996</Paragraph>
        <Paragraph title="Location : ">Dnipro, UA</Paragraph>
      </div>
      <div className={styles.mainInfoBlock}>
        <Paragraph title="Contacts : " />
        <Paragraph title="Phone : ">097-028-90-54</Paragraph>
        <Paragraph title="Linkedin : ">
          <a href="https://www.linkedin.com/in/stanislavtaran/" title="Linkedin">
            Stanislav Taran
          </a>
        </Paragraph>
        <Paragraph title="GitHub : ">
          <a href="https://github.com/StanislavTaran" title="GitHub">
            Stanislav Taran
          </a>
        </Paragraph>
      </div>
      <div className={styles.mainInfoBlock}>
        <Paragraph title="Education : ">
          Kharkiv National University of Internal Affairs. <br /> 2013-2017
        </Paragraph>
        <Paragraph title="Additional Education : " />

        <Paragraph title="GOIT ">
          Course Fullstack Javascript Developer.
          <br /> 2019-2020
        </Paragraph>
        <Paragraph title="IMT ">
          Course HTML/CSS coder.
          <br /> 2019
        </Paragraph>
      </div>
    </div>
  );
}
