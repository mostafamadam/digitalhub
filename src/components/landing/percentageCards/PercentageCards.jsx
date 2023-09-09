import React from 'react';
import style from './PercentageCards.module.scss'
import greenCircle from '../../../imgs/circleGreen.svg'
import circle from '../../../imgs/circle.svg'
import history from '../../../imgs/history.svg'
import { Card } from 'antd';

function PercentageCards(props) {
    return (
        <div className={style.Cards}>
            <Card
                className={style.cardItem}
            >
                <div className={style.cardInfo}>
                    <img src={greenCircle} alt="" />
                    <div className={style.cardDetails}>
                        <h1>10,918</h1>
                        <span>عدد المواليد المدخلين</span>
                    </div>
                </div>
            </Card>
            <Card
                className={style.cardItem}
                bordered={false}
            >
                <div className={style.cardInfo}>
                    <img src={circle} alt="" />
                    <div className={style.cardDetails}>
                        <h1>20</h1>
                        <span>عدد الوفيات المدخلين</span>
                    </div>
                </div>
            </Card>
            <Card
                className={style.cardItem}
                bordered={false}
            >
                <div className={style.cardInfo}>
                    <img src={history} alt="" />
                    <div className={style.cardDetails}>
                        <h1>400</h1>
                        <span>طلبات تعديل مقدمة</span>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default PercentageCards;