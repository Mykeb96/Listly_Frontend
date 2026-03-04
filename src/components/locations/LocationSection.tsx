import styles from './LocationSection.module.scss'
import { states } from '../../data/States'

import { useRouter } from 'next/router'

export default function LocationSection() {
    const router = useRouter()

    function handleNav(state: string) {
        if (!state) return
        router.push(`/${state}`)
    }


    return (
        <div className={styles.container}>
            <h4 className={styles.Header}>Change your location</h4>
            <ul className={styles.State_List}>
                {states.map((state, index) => <li key={index} className={styles.State} onClick={() => handleNav(state)}>{state}</li>)}
            </ul>
        </div>
    )
}