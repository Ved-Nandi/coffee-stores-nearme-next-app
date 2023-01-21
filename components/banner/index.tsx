import React, { FC } from 'react'
import styles from './banner.module.css';

type Props = {
  buttonText: string;
  handleOnclick: () => void;
}

const Banner: FC<Props> = ({ buttonText, handleOnclick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>
          Coffee{' '}
        </span>
        <span className={styles.title2}>
          Connoisseur
        </span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shop</p>
      <div className={styles.buttonWrapper}>
        <button onClick={handleOnclick} className={styles.button} type="button">{buttonText}</button>
      </div>
    </div>
  )
}

export default Banner;
