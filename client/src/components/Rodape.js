import styles from './Rodape.module.css'
function Rodape(){
  return(
    <footer className={styles.rodape}>
      <p>
        <span className={styles.txt}>SCH - Superintendência do Complexo Hospitalar da UPE</span> &copy; 2024
      </p>
    </footer>
  )
}

export default Rodape