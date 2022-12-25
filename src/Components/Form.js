import React from 'react';
import { FileInput } from './FileInput';
import styles from './Form.module.css'; 
import { TbCameraPlus } from "react-icons/tb";
import { RxCrossCircled } from "react-icons/rx";
import { TextInput } from './TextInput';

export const Form = () => {
    const [image, setImage] = React.useState()
    console.log(image)
    console.log('first')
  return (
    <div className={styles.mainContainer}>
        <p className={styles.heading}>POST YOUR AD</p>
        <div className={styles.container}>
            <div className={styles.subHeading}>INCLUDE SOME DETAILS</div>
            <TextInput
                title='Name*'
                type='text'
                onChange={()=>{}}
            />
            <TextInput
                title='Category*'
                type='text'
                onChange={()=>{}}
            />
            <TextInput
                title='Price*'
                type='number'
                onChange={()=>{}}
            />
            <TextInput
                title='Phone No*'
                type='number'
                onChange={()=>{}}
            />
            <div className={styles.title}>Details</div>
            <textarea className={styles.textArea}  />
            {
                image ?
                <div className={styles.imageContainer}>
                    <div className={styles.title}>Uploaded Photo</div>
                    <img className={styles.productPic} src={URL.createObjectURL(image)} alt='product pic' />
                    <RxCrossCircled onClick={()=>setImage()} size={20} className={styles.crossIcon} />
                </div>
                :
                <FileInput
                    onChange={(e)=>setImage(e.target.files[0])}
                    displayComponent={<TbCameraPlus color='#5A5A5A' size={50} className={styles.cameraIcon}/>}
                />
            }
            
            <button className={styles.button}>
                POST NOW
            </button>
        </div>
    </div>
  )
}