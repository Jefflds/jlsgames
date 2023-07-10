import Image from 'next/image'
import Styles from '../logo/Logo.module.css'

export default function Logo(){
    return (
        <div className={Styles.Logo}>
            <Image src="/logo.svg" width={60} height={60}/>
            <h1>JLS Games</h1>
        </div>
    )
}
