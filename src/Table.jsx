import React, { useState } from 'react'

export default function Table() {

    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [id, setId] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "10px", marginBottom: "10px" }}>
                <div>
                    <label className='ms-4'>First Name:
                        <input type="text" className='rounded-1 ms-1' placeholder='Enter First Name' onChange={(event) => setFirstName(event.target.value)} value={firstName} />
                    </label>
                </div>
                <div>
                    <label className='ms-4'>Last Name:
                        <input type="text" className='rounded-1 ms-1' placeholder='Enter Last Name' onChange={(event) => setLastName(event.target.value)} value={lastName} />
                    </label>
                </div>
                <div>
                    <label className='ms-4'>Age:
                        <input type="number" className='rounded-1 ms-1' placeholder='Enter Age' onChange={(event) => setAge(Number(event.target.value))} value={age} />
                    </label>
                </div>
                <div>
                    <label className='ms-4'>Gender:
                        <input type="text" className='rounded-1 ms-1' placeholder='Enter Gender' onChange={(event) => setGender(event.target.value)} value={gender} />
                    </label>
                </div>
                <div>
                    {!isUpdate ?
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
                    {data.map((item, index) => (
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
                    ))}
                </tbody>
            </table>
        </>
    )
}
