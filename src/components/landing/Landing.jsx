import React, { useState } from 'react';
import style from './Landing.module.scss'
import { Layout, DatePicker, Radio } from 'antd';
import arrow from '../../imgs/leftArrow.svg';
import all from '../../imgs/all.svg';
import trusted from '../../imgs/trusted.svg';
import untrusted from '../../imgs/untrusted.svg';
import PercentageCards from './percentageCards/PercentageCards';
import GraphCards from './graphCards/GraphCards';
const { RangePicker } = DatePicker;
const { Content } = Layout;
const dateFormat = 'DD/MM/YYYY';


function Landing(props) {
    const [certificate, SetCertificate] = useState('all');

    const certificateChange = (e) => {
        SetCertificate(e.target.value);
    };

    return (
        <>
            <Content className={style.landingContainer}>
                <div className={style.filterContainer}>
                    <RangePicker
                        placeholder={['من', 'الي']}
                        format={dateFormat}
                        size="large" className={style.datepicker}
                        separator={<img className={style.dateArrow} src={arrow} />}
                    />
                    <Radio.Group size="large" value={certificate} onChange={certificateChange}>
                        <Radio.Button value="all"><img src={all}></img> الكل</Radio.Button>
                        <Radio.Button value="untrusted"><img src={trusted}></img> غير موثق</Radio.Button>
                        <Radio.Button value="trusted"><img src={untrusted}></img> موثق</Radio.Button>
                    </Radio.Group>
                </div>
                <PercentageCards />
                <GraphCards />
            </Content>
        </>
    );
}

export default Landing;