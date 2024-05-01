import React, { useState } from 'react';
import '../style.css';
import axios from 'axios';


const FormComponent = () => {
    const [formData, setFormData] = useState({
        teamName: '',
        city: '',
        gamesPlayed: '',
        studentScore: '',
        image: ''

    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = async (e) => {


        const file = e.target.files[0];


        setFormData({ ...formData, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("This is form data: ", formData, formData.teamName)
        const newErrors = {};

        if (!formData.teamName.trim()) {
            newErrors.teamName = "Team name is required";
        }
        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }
        if (!formData.gamesPlayed || parseInt(formData.gamesPlayed) <= 0) {
            newErrors.gamesPlayed = "Total games played must be greater than zero";
        }
        if (!formData.image) {
            newErrors.image = "Profile picture is required";
        }

        if (!formData.studentScore || parseInt(formData.studentScore) <= 0) {
            newErrors.studentScore = "studentScore must be greater than zero";
        }


        if (Object.keys(newErrors).length === 0) {
            try {


                const formDataToSend = new FormData();
                formDataToSend.append('teamName', formData.teamName);
                formDataToSend.append('city', formData.city);
                formDataToSend.append('gamesPlayed', formData.gamesPlayed);
                formDataToSend.append('studentScore', formData.studentScore);
                formDataToSend.append('image', formData.image);

                await axios.post('http://localhost:8001/add', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });



                alert("Added Successfully");

                // Clear the form after successful submission
                setFormData({
                    teamName: '',
                    city: '',
                    gamesPlayed: '',
                    studentScore: '',
                    image: null
                });
                setErrors({});
            } catch (error) {
                console.error(error);
                alert("Failed to add entry");
            }
        } else {
            setErrors(newErrors);
        }


    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="gaming-form">
            <div>
                <label>Team Name:</label>
                <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} />
                {errors.teamName && <span>{errors.teamName}</span>}
            </div>
            <div>
                <label>City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                {errors.city && <span>{errors.city}</span>}
            </div>
            <div>
                <label>Total Games Played:</label>
                <input type="number" name="gamesPlayed" value={formData.gamesPlayed} onChange={handleChange} />
                {errors.gamesPlayed && <span>{errors.gamesPlayed}</span>}
            </div>
            <div>
                <label>Total Score :</label>
                <input type="number" name="studentScore" value={formData.studentScore} onChange={handleChange} />
                {errors.studentScore && <span>{errors.studentScore}</span>}
            </div>
            <div>
                <label>Profile Picture(Max 1 MB):</label>
                <input type="file" accept=".jpeg, .png, .jpg" onChange={handleImageChange} />
                {errors.image && <span>{errors.image}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
