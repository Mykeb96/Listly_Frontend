import styles from '../../../styles/pages/[listing]/ListingPage.module.scss'
import { useRouter } from 'next/router'

export default function ListingPage() {
    const router = useRouter()
    const { listing } = router.query

    return (
        <div className={styles.container}>
            {listing}
        </div>
    )
}