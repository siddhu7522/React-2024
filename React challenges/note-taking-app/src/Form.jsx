import React, { useState } from 'react'

function Form() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")
    const [details, setDetails] = useState([])
    const[isEditing, setIsEditing] =useState(false)
    const[editId, setEditId] =useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password || !address || !address2 || !city || !zip ){
            return
        }
        else if(email && password && address && address2 && city && zip && isEditing){
            setDetails(details.map((item)=>item.id === editId ? {...item, email, password, address, address2, city, zip}: item))
            setIsEditing(false)
            setEditId(null)
            setEmail("")
            setPassword("")
            setAddress("")
            setAddress2("")
            setCity("")
            setZip("")
        }
        else{
            const newDetails = {
                id: Date.now(), email, password, address, address2, city, zip
            }
            setDetails((prevDetails) => [...prevDetails, newDetails])
            setEmail("")
            setPassword("")
            setAddress("")
            setAddress2("")
            setCity("")
            setZip("")
        }
        
    }

    const handleDelete = (id) =>{
        setDetails(details.filter((item)=>item.id!==id))
    }

    const handleEdit = (id) =>{
        const specificItem = details.find((x)=>x.id===id)
        setIsEditing(true)
        setEditId(id)
        setEmail(specificItem.email)
        setPassword(specificItem.password)
        setAddress(specificItem.address)
        setAddress2(specificItem.address2)
        setCity(specificItem.city)
        setZip(specificItem.zip)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input value={address2} onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input value={zip} onChange={(e) => setZip(e.target.value)} type="text" className="form-control" id="inputZip" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    {isEditing ? "Submit Edited" : "Submit"}
                </button>
            </form>
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Address2</th>
                            <th scope="col">City</th>
                            <th scope="col">Zip</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((detail, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{detail.email}</td>
                                    <td>{detail.address}</td>
                                    <td>{detail.address2}</td>
                                    <td>{detail.city}</td>
                                    <td>{detail.zip}</td>
                                    <button onClick={()=>handleEdit(detail.id)}>Edit</button>
                                    <button onClick={()=>handleDelete(detail.id)}>Delete</button>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default Form