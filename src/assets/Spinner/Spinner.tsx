import styles from "../../styles/Spinner.module.scss"

export const Spinner = () => {
  return (
    <div className={styles.LdsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
