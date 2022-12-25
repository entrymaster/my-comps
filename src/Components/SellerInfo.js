import styles from './SellerInfo.module.css'; 

export const SellerInfo = ({profilePic, name, memeberSince}) => {
  return (
    <div className={styles.container}>
        <p className={styles.heading}>Seller Description</p>
        <div className={styles.profileContainer}>
            <img className={styles.profileImg} src={profilePic} alt='profile pic' />
            <div className={styles.itemContainer}>
                <p className={styles.profileText}>{name}</p>
                <p className={styles.dateText}>Memeber Since {memeberSince}</p>
            </div>
        </div>
    </div>
  )
}