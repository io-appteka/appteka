import React from 'react';
import styles from './ReportPrice.css';
import { Modal } from '../../../../UI/Modal/Modal';
import { Upload } from '../../../../UI/Upload/Upload';
import { Button } from 'antd';

export const ReportPrice = ({modal, onCancelHandler, onOkHandler, title, price}) => (
    <div onClick={(event) => event.stopPropagation()}>
        <Modal
        className={styles.ReportPrice}
        visible={modal.show}
        onCancel={onCancelHandler}
        title={title}
        footer={[
            <Button key="back" prefixCls="index__ant-btn" onClick={onCancelHandler}>Anuluj</Button>,
            <Button key="submit" type="primary" prefixCls="index__ant-btn" loading={modal.loading} onClick={onOkHandler}>Zatwierdź</Button>,
        ]}
        >
            <div className={styles.reportInfo}>Aktualna cena to {price} zł. Jeśli posiadasz informację o innej cenie, wyślij zdjęcie paragonu i wpisz nową cenę produktu</div>
            <div className={styles.display}><Upload/><input className={styles.inputPrice} type='number' placeholder='nowa cena'/></div>
        </Modal>
    </div>
);