import React, { useEffect, useState } from "react";
import style from './SearchInput.module.scss';
import serchIcon from '../../imgs/searchIcon.svg'

export default function SearchInput(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        // handle input change event
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (searchTerm) {
            console.log("searching for:", searchTerm);
        }
      }, [searchTerm]);
    

    return (
        <div className={style.searchInputContainer}>
            <div className={style.searchIconContainer}>
                <img src={serchIcon} alt="" />
            </div>
            <input
                type="text"
                placeholder="استعلام عن حالة مواليد او وفاة"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
}