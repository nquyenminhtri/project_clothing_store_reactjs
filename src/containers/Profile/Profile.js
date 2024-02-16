import React, { useState } from 'react';
import ProfileMenu from './Components/ProfileMenu';
import Header from '../Index/Header/Header';
import customerService from '../../services/customerService';
import './Profile.css';

function Profile() {
    const localStorageData = JSON.parse(localStorage.getItem('customerData'));
    const [selectedImageName, setSelectedImageName] = useState('');

    
    // Khởi tạo state để theo dõi thông tin khách hàng và trạng thái chỉnh sửa
    const [image, setImage] = useState(localStorageData ? localStorageData.image_path : '');
    const [name, setName] = useState(localStorageData ? localStorageData.name : '');
    const [gender, setGender] = useState(localStorageData ? localStorageData.gender : '');
    const [phone, setPhone] = useState(localStorageData ? localStorageData.phone : '');
    const [email, setEmail] = useState(localStorageData ? localStorageData.email : '');
    const [address, setAddress] = useState(localStorageData ? localStorageData.address : '');

    // State để theo dõi trạng thái chỉnh sửa
    const [isEditing, setIsEditing] = useState(false);

    // Hàm xử lý khi nhấn vào nút Edit hoặc Save
    const handleEditSaveClick = async () => {
        if (isEditing) {
            const shouldSave = window.confirm('Do you want to save changes?');
            if (shouldSave) {
                const fileInput = document.getElementById('yourFileInputId');
                const file = fileInput.files[0];
    
                const dataToSend = {
                    name,
                    gender,
                    phone,
                    email,
                    address,
                    image: image,
                };
                console.log('check data',dataToSend);
    
                const response = await customerService.handelUpdateAccount(dataToSend);
                console.log('checkrL::::', response);
                console.log('Save changes');
            }
        } else {
            // Xử lý khi nhấn nút Edit
            console.log('Edit');
        }
    
        // Đảo ngược trạng thái chỉnh sửa
        setIsEditing(!isEditing);
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImageName(file ? file.name : '');
    
        convertImageToBase64(file).then((imageData) => {
            setImage(imageData);
        });
    };
    
    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve(null);
            }
    
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        });
    };
    return (
        <>
            <Header />
            <div className="container-xl px-4 mt-4">
                <ProfileMenu />
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2" src={image} alt="" />
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                <input
                                 id="yourFileInputId"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card mb-4">
                            <div className="card-header">Account Details</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputUsername">
                                            Full name
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputUsername"
                                            type="text"
                                            placeholder="Enter your username"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            disabled={!isEditing} // Disable nếu không đang chỉnh sửa
                                        />
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputFirstName">
                                                Gender
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputFirstName"
                                                type="text"
                                                placeholder="Enter your first name"
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">
                                                Phone
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputLastName"
                                                type="text"
                                                placeholder="Enter your last name"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">
                                            Email address
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputEmailAddress"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputAddress">
                                            Address
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputAddress"
                                            type="text"
                                            placeholder="Enter your address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <button className="btn btn-primary" type="button" onClick={handleEditSaveClick}>
                                        {isEditing ? 'Save changes' : 'Edit'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
