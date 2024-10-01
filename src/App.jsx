import React, { useEffect, useState } from 'react'
import { EmployeeData } from './EmployeeData'

export default function App() {
    const [data, setData] = useState([]);

    const [firstName, SetFirstName] = useState('');

    const [lastName, SetLastName] = useState('');

    const [age, SetAge] = useState();

    const [gender, SetGender] = useState();

    const [id, SetId] = useState(0);

    const [isUpdate, SetIsUpdate] = useState(false);


    useEffect(() => {
        setData(EmployeeData)
    }, []);
    
    const handleSave = (event) => {
        event.preventDefault();
        let error = '';
        if (firstName === '')
            error += 'First name is required, ';

        if (lastName === '')
            error += 'Last name is required, ';

        if (age <= 0)
            error += 'Age is required.';

        if (gender === '')
            error += 'Gender is required, ';

        if (error === '') {
            const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;

            const newObject = {
                id: newId,
                firstName: firstName,
                lastName: lastName,
                age: age,
                gender : gender
            }
            setData([...data, newObject]);
            handleClear();
        }
        else {
            alert(error)
        }
    }

    const handleEdit = (id) => {
        const dt = data.find(item => item.id === id);
        if (dt) {
            SetIsUpdate(true);
            SetId(id);
            SetFirstName(dt.firstName);
            SetLastName(dt.lastName);
            SetAge(dt.age);
            SetGender(dt.gender);
        }
    }

    const handleUpdate = () => {
        const index = data.findIndex((index) => index.id === id);
        console.log(index)
        if (index > -1) {
            const updatedData = [...data];
            updatedData[index] = { id, firstName, lastName, age, gender };
            setData(updatedData);
            handleClear();
        }
    }

    const handleDelete = (id) => {
        if (id > 0) {
            if (window.confirm("Are you sure to delete this item?")) {
                const updateData = data.filter(item => item.id !== id);
                setData(updateData);
            }
        }
    }

    const handleClear = () => {
        SetId(0);
        SetFirstName('');
        SetLastName('');
        SetAge('');
        SetGender('');
        SetIsUpdate(false);

    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "10px", marginBottom: "10px" }}>
                <div>
                    <label className='ms-4'>First Name:
                        <input type="text" className='rounded-1 ms-1' placeholder='Enter First Name' onChange={(event) => SetFirstName(event.target.value)} value={firstName} />
                    </label>
                </div>
                <div>
                    <label className='ms-4'>Last Name:
                        <input type="text" className='rounded-1 ms-1' placeholder='Enter Last Name' onChange={(event) => SetLastName(event.target.value)} value={lastName} />
                    </label>
                </div>
                <div>
                    <label className='ms-4'>Age:
                        <input type="text" className='rounded-1 ms-1' placeholder='Enter Age' onChange={(event) => SetAge(Number(event.target.value))} value={age} />
                    </label>
                </div><div>
                    <label className='ms-4'>Gender:
                        <input type="text" className='rounded-1 ms-1' placeholder='Enter Gender' onChange={(event) => SetGender((event.target.value))} value={gender} />
                    </label>
                </div>
                <div>
                    {
                        !isUpdate ?
                            <button className='btn btn-primary ms-5 rounded-pill' onClick={handleSave}>Save</button>
                            :
                            <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
                    }
                    <button className='btn btn-danger ms-1 rounded-pill' onClick={handleClear}>Clear</button>
                </div>
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <td>Sr.No</td>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                        <td>Gender</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;
                                        <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
