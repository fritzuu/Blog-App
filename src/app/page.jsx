import Image from 'next/image'
import Hero from 'public/hero.png'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>Your Favourite Information Website</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repudiandae! Reprehenderit placeat tenetur commodi veritatis ut inventore, adipisci sequi obcaecati non!</p>
      <Button url="/portfolio
          " text="See More?" />
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="" className={styles.img}/>
      </div>
    </div>
  )
}
