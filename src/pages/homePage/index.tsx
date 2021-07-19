import Image from 'next/image'

import { faceCompanyLogo } from 'app-images'
import { Typography } from 'app-components'

import styles from './homePage.module.scss'

const HomePage: React.FC = () => {
  return (
    <section className={styles.homePage}>
      <div className={styles.homePage__banner}>
        <Image width={100} height={100} src={faceCompanyLogo} />
        <Typography variant="h1">Face Company</Typography>
        <Typography>share news with your co-workers</Typography>
      </div>
    </section>
  )
}

export default HomePage
