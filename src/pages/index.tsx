import Head from "next/head";
import styles from "../styles/pages/home/Home.module.scss"

import { states } from "../data/States"

export default function Home() {
  return (
    <>
      <Head>
        <title>Listly</title>
        <meta name="description" content="Your local marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Container}>
        <div className={styles.State_Selector_Container}>
          <h2 className={styles.State_Selector_Header}>Select Your State</h2>
          <select className={styles.State_Selector}>
            {states.map((state, index) => <option value={state} key={index}>{state}</option>)}
          </select>
        </div>
      </div>
    </>
  );
}
