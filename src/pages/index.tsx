import Head from "next/head";
import styles from "../styles/pages/home/Home.module.scss"

import { states } from "../data/States"

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  function handleStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const state = e.target.value
    if (!state) return
    router.push(`/${state}`)
  }

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
          <h2 className={styles.State_Selector_Header}>Welcome to Listly</h2>
          <select className={styles.State_Selector} onChange={handleStateChange} defaultValue="">
            <option value="" disabled>Select your state</option>
            {states.map((state, index) => (
              <option className={styles.State_Option} value={state} key={index}>{state}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
