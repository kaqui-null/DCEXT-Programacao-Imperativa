import styles from './Container.module.css'

function Container(props){
  const containerClasses = `${styles.container} ${props.customClasse && styles[props.customClasse]}`;
  return(
    <div className={containerClasses}>{props.children}</div>
    // Classes dinâmicas, facilitam na organização e especificidade necessária
    // quando se envolve outros componentes em um (pai e filho), precisa se um a sintaxe especial de props
  )
}

export default Container