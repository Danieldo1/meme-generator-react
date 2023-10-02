import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import styles from './styles.module.css'
import {useClipboard} from 'use-clipboard-copy';

export const MemeGenerated = () => {

const clipboard = useClipboard()
const navigation = useNavigate()
const location = useLocation()
const [copied, setCopied] = useState(false)

const copyLink = () => {
    clipboard.copy(url)
    setCopied(true)
}


const url = new URLSearchParams(location.search).get('url')    

    return (
        <div className={styles.container}>
            <button onClick={() => navigation('/')} className={styles.home}>Make More Memes</button>
            

            {
                url && <img src={url} alt='meme' /> 
                
            }
        <button className={styles.copy} onClick={copyLink}  >
            {copied ? 'Link Copied !' : 'Copy Link'}
        </button>
        </div>
    )
}