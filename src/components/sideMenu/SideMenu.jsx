import React from 'react';
import style from './SideMenu.module.scss'
import birthIcon from '../../imgs/birthes.svg'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

function SideMenu(props) {

    const menuItems = [
        {
            key: `item1`,
            icon: <img className={style.birthIcon} src={birthIcon} />,
            label: `المواليد`,
            children: [
                {
                    key: `subItem1`,
                    icon: '',
                    label: `تسجيل واقعة ميلاد`
                },
                {
                    key: `subItem2`,
                    icon: '',
                    label: `تسجيل ساقط قيد ميلاد`
                },
                {
                    key: `subItem3`,
                    icon: '',
                    label: `تسجيل ميلاد (معثور عليه)`
                },
                {
                    key: `subItem4`,
                    icon: '',
                    label: `تسجيل ميلاد (ساقط قيد معثور عليه)`
                },
                {
                    key: `subItem5`,
                    icon: '',
                    label: `استعلام - تعديل واقعة الميلاد`
                },
                {
                    key: `subItem6`,
                    icon: '',
                    label: `طلب تعديل واقعة ميلاد`
                },
            ]
        }
    ]

    return (
        <>
            <Sider
                breakpoint="md"
                collapsedWidth="0"
                width={'280px'}
                className={style.siderMenu}>
                <Menu
                    mode="inline"
                    defaultOpenKeys={['item1']}
                    className={style.menu}
                    items={menuItems}
                />
            </Sider>
        </>
    );
}

export default SideMenu;