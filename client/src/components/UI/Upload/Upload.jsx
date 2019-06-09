import React from 'react';
import styles from './Upload.css';
import { Upload as AntUpload } from 'antd';
import { Tag } from '../Tag/Tag';
const { Dragger } = AntUpload;



export const Upload = ({...other}) => {
    const onChange = (info) => {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
        } else if (status === 'error') {
          alert(`${info.file.name} file upload failed.`);
        }
    }

    return (
            <div className={styles.Upload}>
            <Dragger
            accept='image/*'
            prefixCls={'index__ant-upload'} 
            height={250}
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            onChange={onChange}
            {...other}>
                <div className={styles.draggerInfo}>Upuść plik tutaj<br/>lub<br/><Tag>przeglądaj</Tag></div>
            </Dragger>
        </div>
    )
};