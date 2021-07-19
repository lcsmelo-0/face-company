import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { faceCompanyLogo } from 'app-images'
import { Button, Input, Typography } from 'app-components'
import { routes } from 'app-consts'
import { useEmailField } from 'app-hooks'

import styles from './homePage.module.scss'

const HomePage: React.FC = () => {
  const router = useRouter()
  const [email, setEmail, validEmail] = useEmailField('')
  const [displayError, setDisplayError] = useState<boolean>(false)

  const _handleAccess = () => {
    if (!validEmail) {
      setDisplayError(true)
      return
    }

    setDisplayError(false)
    router.push(routes.userList)
  }

  return (
    <section className={styles.homePage}>
      <div className={styles.homePage__banner}>
        <Image width={100} height={100} src={faceCompanyLogo} />
        <Typography variant="h1">Face Company</Typography>
        <Typography>share news with your co-workers</Typography>

        <Input value={email} onChange={setEmail} />
        <Button onClick={_handleAccess}>Access</Button>
        <Typography className="error" showError={displayError}>
          Please, enter a valid email to continue
        </Typography>
      </div>
    </section>
  )
}
export default HomePage
