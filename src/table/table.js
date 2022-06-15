import React, { useState } from "react";


const Table = (props) => {

    const sortData = (field) => {
        console.log(field)

        const copyData = props.contactData.concat() //копировали данные из массива

        
        console.log((copyData[0])[field])

        const sortData = copyData.sort(
            (a, b) => { return a[field] > b[field] ? 1 : -1 }
        )
        props.setContactData(sortData)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => { sortData('id') }}>ID</th>
                    <th onClick={() => { sortData('firstName') }}>Имя</th>
                    <th onClick={() => { sortData('email') }}>Email</th>
                    <th onClick={() => { sortData('phone') }}>Телефон</th>
                </tr>
            </thead>
            <tbody>

                {props.contactData.map(
                    (item) => (
                        <tr key={item.id + item.email}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}

            </tbody>

        </table>
    )
}

export default Table;