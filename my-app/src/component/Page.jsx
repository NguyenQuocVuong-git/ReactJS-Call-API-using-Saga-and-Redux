import React, { useState, useEffect } from "react";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import { createProperty } from '../actions/translateAction';

const { Search } = Input;


function Page(props) {

    const dispatch = useDispatch();
    const onSearch = (value) => {
        console.log(value);
        dispatch(createProperty(value));
    }
    
    const [data , setData] = useState();

    return (
        <section id='header'>
            <div className="container">
             <h1>TRANSLATE FAKES</h1>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />

            </div>
        </section>
    );
}

export default Page;