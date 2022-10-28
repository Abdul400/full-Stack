import React from 'react';
import style from '../styles/contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const contact = () => {
  return (
    <div className={style.container}>
      <div className={style.contact}>
        <div className={style.top}>
          <div className={style.top_section}>
            <div className={style.circle}></div>
          </div>
          <div className={style.bottom_section}></div>
        </div>
        <div className={style.bottom}>
          <h3>Abdihafid Adan Guyo</h3>
          <p>@abdulhafidh2022</p>
          <div className={style.brands}>
            <Link href="">
              <a href="https://www.facebook.com/abdulbreaker/" target="_blank">
                <FontAwesomeIcon className={style.icon1} icon={faFacebookF} />
              </a>
            </Link>
            <Link href="">
              <a href="https://twitter.com/AbdulhafidhA" target="_blank">
                <FontAwesomeIcon className={style.icon1} icon={faTwitter} />
              </a>
            </Link>
            <Link href="">
              <a
                href="https://www.instagram.com/abdulhafidh400/"
                target="_blank"
              >
                <FontAwesomeIcon className={style.icon1} icon={faInstagram} />
              </a>
            </Link>
            <Link href="">
              <a
                href="https://www.linkedin.com/in/abdihafidh-adan-a32847107/"
                target="_blank"
              >
                <FontAwesomeIcon className={style.icon1} icon={faLinkedin} />
              </a>
            </Link>
          </div>
          <p>Email: abdulhafidhadan400@gmail.com</p>
          <p>contacts: +254701811299</p>
        </div>
      </div>
    </div>
  );
};

export default contact;
