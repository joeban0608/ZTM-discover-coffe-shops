import styles from "./Styles.module.scss";

export type BannerProps = {
  handleOnClick: () => void;
  buttonText: string;
};
const Banner = (props: BannerProps) => {
  const { handleOnClick, buttonText } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <p className={styles.title1}>Coffee</p>
        <p className={styles.title2}>Connoisseur</p>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee stores!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleOnClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
