import React from 'react';
import style from './GraphCards.module.scss'
import { Card } from 'antd';
import Female from '../../svgs/Female';
import Male from '../../svgs/Male';
import Female2 from '../../svgs/Female';
import Male2 from '../../svgs/Male';

function GraphCards(props) {
    return (
        <div className={style.Cards}>
            <Card
                hoverable
                className={style.cardItem}
                bordered={false}
            >
                <div className={style.cardInfo}>
                    <h3>النسبة بين الذكور والإناث للمواليد</h3>
                    <div className={style.cardDetails}>
                        <div>
                            <span>اناث</span>
                            <Female height={'200px'} percentage={'35%'} color='#D75B97' />
                            <h3>88%</h3>
                        </div>
                        <div>
                            <span>ذكور</span>
                            <Male height={'200px'} percentage={'70%'} color='#479EF5' />
                            <h3>12%</h3>
                        </div>
                    </div>
                </div>
            </Card>
            <div className={style.vert}></div>
            <Card
                hoverable
                className={style.cardItem}
                bordered={false}
            >
                <div className={style.cardInfo}>
                    <h3>النسبة بين الذكور والإناث للمواليد</h3>
                    <div className={style.cardDetails}>
                        <div>
                            <span>اناث</span>
                            <Female2 height={'200px'} percentage={'12%'} color='#7D7D92' />
                            <h3>88%</h3>
                        </div>
                        <div>
                            <span>ذكور</span>
                            <Male2 height={'200px'} percentage={'88%'} color='#7D7D92' />
                            <h3>12%</h3>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default GraphCards;