import React from 'react';

export default function NKL_Funcdemo(props) {
    return (
        <div>
            <hr />
            <h2>Function component Demo</h2>
            <h3>Sử dụng thuộc tính từ props</h3>
            <p>userName: {props.userName}</p>
            <p>fullName: {props.fullName}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}
