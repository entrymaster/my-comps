import styles from "./App.module.css";
import { Form } from "./Components/Form";
import { ProductMain } from './Components/ProductMain'
import { ProductSide } from "./Components/ProductSide";
import { SellerInfo } from "./Components/SellerInfo";
import {LINKS, STRINGS} from './data.js'

export default function App() {
  return (
    <div className={styles.App}>
      {true ? 
      <div style={{display: 'flex', justifyContent:'center'}}>
        <Form />
      </div>
      :
      <div className={styles.container}>
      <div className={styles.productMain}>
      <ProductMain 
        imgLink={LINKS.imgLink}
        brand={'Toyota'}
        descText={STRINGS.descText}
        status='FEATURED'
      />
      </div>
      <div className={styles.productSide}>
      <ProductSide
        price='₹ 6,000'
        description='Pixel 3 | Pixel 4 | Pixel 3xl | Pixel 4xl - 64GB - 6 Month Warranty'
        location='Tagore Garden, Delhi, Delhi'
        date='26 Nov'
      />
      <SellerInfo
        profilePic={LINKS.profileImg}
        name='Ayush Srivastava'
        memeberSince='Sep 2020'
      />
      </div>
      </div>}
    </div>
  );
}
