import React, { useState } from "react";
import ArrowDown from "../svg/arrowDown";
import ArrowUp from "../svg/arrowUp";


const Table = (props) => {

    const directionSort = props.directionSort

    const sortData = (field) => {
        

        const copyData = props.contactData.concat() //копировали данные из массива

        let sortData;
        if (directionSort) {
            sortData = copyData.sort(
                (a, b) => { return a[field] > b[field] ? 1 : -1 }
            )
        } sortData = copyData.reverse(
            (a, b) => { return a[field] > b[field] ? 1 : -1 }
        )

        props.setContactData(sortData)
        props.setDirectionSort(!directionSort)
        //console.log(directionSort)
    }

    const [fieldData, setFieldData] = useState('')

    const Arrow = () => {
        return (
            directionSort ? <ArrowDown /> : <ArrowUp />
        )
    }

    const FieldSortData = (field) => {
        sortData(field)
        setFieldData(field)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => { FieldSortData('id') }}>
                        ID {fieldData === 'id' ? <Arrow /> : null}
                    </th>
                    <th onClick={() => { FieldSortData('firstName') }}>
                        Имя {fieldData === 'firstName' ? <Arrow /> : null}
                    </th>
                    <th onClick={() => { FieldSortData('email') }}>
                        Email {fieldData === 'email' ? <Arrow /> : null}
                    </th>
                    <th onClick={() => { FieldSortData('phone') }}>
                        Телефон {fieldData === 'phone' ? <Arrow /> : null}
                    </th>
                </tr>
            </thead>
            <tbody>

                {props.contactData.map(
                    (item) => (
                        <tr key={item.id + item.email} onClick={() => { props.detailRow(item) }}>
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