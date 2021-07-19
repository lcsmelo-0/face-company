import styles from './homePage.module.scss'
import Image from 'next/image'
import { faceCompanyLogo } from 'app-images'

const HomePage: React.FC = () => {
  return (
    <section className={styles.homePage}>
      <div className={styles.homePage__banner}>
        <Image width={100} height={100} src={faceCompanyLogo} />
        Face company
      </div>
    </section>
  )
}

export default HomePage
