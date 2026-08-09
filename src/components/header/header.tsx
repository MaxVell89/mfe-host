import reactLogo from '../../assets/react.svg'
import { Container } from '../container';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <img src={reactLogo} alt="React logo" />
      </Container>
    </header>
  )
}
