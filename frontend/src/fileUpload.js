import axios from 'axios';
import React, { useState } from 'react';

export const FileUpload = () => {
    const[file, setFile]=useState();

    const fileChangeHandler=(e)=>{
        setFile(e.target.files[0]);
    }

    const fileUploadHandler=(e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('profileImg', file)
        axios.post("http://localhost:4000/api/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
    }
    return (
        <div className="container">
            <div className="row">
                <form onSubmit={fileUploadHandler}>
                    <h3>React File Upload</h3>
                    <div className="form-group">
                        <input type="file" onChange={fileChangeHandler} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
