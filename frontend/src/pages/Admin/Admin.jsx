import React, {useState} from 'react';
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import './Admin.css'

const Admin = () => {

    const [title, setTitle] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        const createProduct = async () => {
            const response = await fetch('http://localhost:3001/api/product', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJheml6YUBhei5mciIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY2NjA4NTkyMiwiZXhwIjoxNjY2MTcyMzIyfQ.jmwK9NmjUSLAYCH4FXhXhxfR2hhPUQJmksOAbZNiVpk'
                },
                body: JSON.stringify({title, imageUrl, description, price})
            })

            if(response.ok){
                const data = await response.json()
                console.table(data)
            }
        }

        if(file){
            
            uploadTask.on("state_changed",
            (snapshot) => {
                console.log("saving the file to firabase")
                console.table(snapshot)
            },
            (error) => {
              alert(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImageUrl(downloadURL)
              })
            })

            createProduct()
        }
    }
    
    return (
        <>
            <div>
                <h3 className="admin">Admin Page</h3>
            </div>
            <h3 className='create'>Create a product</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Image
                    <input type="file" name=""/>
                </label>
                <label htmlFor="">
                    Name
                    <input type="text" name="title"  onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label htmlFor="">
                    price
                    <input type="number" name="price" onChange={(e)=>setPrice(e.target.value)} />
                </label>
                <label htmlFor="">
                    description
                    <textarea name="description" cols="30" rows="10" onChange={(e)=>setDescription(e.target.value)}></textarea>
                </label>
                <input type="submit" value="Send" />
            </form>
        </>
    );
};

export default Admin;