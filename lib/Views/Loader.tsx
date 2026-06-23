import Styles from "./loader.scss";

export const Loader = () => {
  return (
    <div
      className={Styles.loaderUi}
      style={{
        backgroundColor: "#282D32"
      }}
    >
      <img
        src="images/de-africa-logo.svg"
        alt="Digital Earth Africa"
        className={Styles.loaderLogo}
      />
      <p className={Styles.loaderTagline}>
        Unlocking the promise of tomorrow from patterns of the past
      </p>
    </div>
  );
};
