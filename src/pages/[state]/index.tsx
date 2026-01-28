import styles from '../../styles/pages/[state]/StatePage.module.scss'

import { useRouter } from 'next/router'

export default function StatePage() {
    const router = useRouter()
    const { state } = router.query;




    return (
        <div className={styles.container}>
            <span>{state}</span>
        </div>
    )
}