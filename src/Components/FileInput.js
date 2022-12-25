import styles from './FileInput.module.css'; 

export const FileInput = ({displayComponent, onChange}) => {
  return (
    <div>
        <div className={styles.title}>Upload Photo</div>
            <label htmlFor='productImg'>
                {displayComponent}
            </label>
            <input onChange={onChange} id='productImg' hidden type='file' />
    </div>
  )
}