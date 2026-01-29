import styles from './Header.module.scss'

import { useState } from 'react';
import type React from "react"

import { IoCreateOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function Header() {
    const [userInput, setUserInput] = useState<string>('')

    function handleUserInput(e: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(e.target.value)
    }
    
    return (
        <div className={styles.container}>
            <h1>Listly</h1>
            <div className={styles.headerItems}>
                <input value={userInput} type='text' placeholder='Search for listings' onChange={(e) => handleUserInput(e)}/>
                <IoCreateOutline size={80} className={styles.headerItems_icon}/>
                <HiOutlineUserCircle size={80} className={styles.headerItems_icon}/>
            </div>
        </div>
    )
}