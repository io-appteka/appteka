import React from 'react';
import styles from './AddOpinion.css';
import { Button } from 'antd';
import { Modal } from '../../UI/Modal/Modal';
import { Rate, Input } from 'antd';

const { TextArea } = Input;

export const AddOpinion = ({modal, onCancelHandler, onOkHandler}) => (
    <Modal className={styles.AddOpinion}
    title="Dodaj opinię o produkcie"
    visible={modal.show}
    onCancel={onCancelHandler}
    footer={[
        <Button key="back" prefixCls="index__ant-btn" onClick={onCancelHandler}>
          Anuluj
        </Button>,
        <Button key="submit" type="primary" prefixCls="index__ant-btn" loading={modal.loading} onClick={onOkHandler}>
          Opublikuj
        </Button>,
    ]}>
        <Rate className={styles.OpinionRate} prefixCls={'index__ant-rate'} allowHalf/>
        <TextArea rows={6} placeholder={'Podziel się swoimi doświadczeniami'}/>
    </Modal>
)
