import { useEffect, useState } from 'react'
import styles from './carrousel.module.css'
function Carrousel() {

  const [currentIndex, setCurrentIndex] = useState(0); //index changes on intervals of 3 seconds

  const items = ['https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg', 
  'https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg', 
  'https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg'];

  const carrouselInfiniteScroll = ()=>{ //function called inside interval
    if (currentIndex === items.length-1){
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex+1)
  }

  useEffect(() => {
      const interval = setInterval(() => carrouselInfiniteScroll(), 3000);
      return () => clearInterval(interval); //unsubscribes interval
  });


  return (
    <section className={styles.carrousel}>
        <div className={styles.container}>
          <div className={styles.carouselItem}>
                    <img
                        src={items[currentIndex]}
                        className={styles.image}
                    />
          </div>
        </div>
    </section>
  )
}

export default Carrousel