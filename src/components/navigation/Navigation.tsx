import styles from './Navigation.module.scss'

import { navItems } from "./navItems"

export default function Navigation() {


    return (
        <div className={styles.container}>
            <nav>
                <ul>
                    {navItems.map((item, index) => <li>{item.name}</li>)}
                </ul>
            </nav>

        </div>
    )
}