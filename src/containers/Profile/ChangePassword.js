import React, { useState } from 'react';
import './ChangePassword.css';
import ProfileMenu from './Components/ProfileMenu';
import Header from '../Index/Header/Header';
import customerService from '../../services/customerService';

function ChangePassword() {
    const localStorageData = JSON.parse(localStorage.getItem('customerData'));
    const emailDefaultValue = localStorageData ? localStorageData.email : '';

    // State cho các trường
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');

    // State cho các lỗi
    const [currentPasswordError, setCurrentPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);

    // State cho xác nhận mật khẩu hiện tại và hiển thị mã xác nhận
    const [confirmCurrentPassword, setConfirmCurrentPassword] = useState(false);
    const [showConfirmationCode, setShowConfirmationCode] = useState(false);
    const [confirmationCodeError, setConfirmationCodeError] = useState(null);
    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
        setCurrentPasswordError(null);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setConfirmPasswordError(null);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(null);
    };

    const handleConfirmationCodeChange = (e) => {
        setConfirmationCode(e.target.value);
        setConfirmationCodeError(null); 
    };

    // Hàm xử lý xác nhận mật khẩu hiện tại
    const handleConfirmCurrentPassword = async () => {
        try {
            // Gọi API kiểm tra mật khẩu hiện tại
            const response = await customerService.changePasswordByEmail(emailDefaultValue, currentPassword);

            if (!response.success) {
                // Nếu kiểm tra không thành công, đặt giá trị lỗi và hiển thị nó
                setCurrentPasswordError(response.error);
                return;
            }

            // Nếu kiểm tra thành công, set các trạng thái cần thiết
            setConfirmCurrentPassword(true);
            setShowConfirmationCode(true);
        } catch (error) {
            console.log(error);
            // Xử lý lỗi nếu cần thiết (hiển thị thông báo lỗi, v.v.)
        }
    };

    // Hàm xử lý khi nhấn nút Save
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!confirmationCode) {
            setConfirmationCodeError('Confirmation code is required.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            return;
        }
        if (confirmCurrentPassword) {
            try {
                // Gọi API để thay đổi mật khẩu
                const response = await customerService.handleChangePasswordByEmail(emailDefaultValue, newPassword,confirmationCode);

                // Kiểm tra kết quả từ API
                if (response.success) {
                    console.log('Password changed successfully:', response.message);
                    localStorage.removeItem('customerData');
                    window.location.href = '/login';
                } else {
                    console.log('Failed to change password:', response);
                    if(response.code ===1){
                        setConfirmationCodeError(response.error);
                    }else{
                        setConfirmPasswordError(response.error);
                    }
                    
                }
            } catch (error) {
                console.log('Error:', error);
            }
        } else {
            alert('Please confirm your current password first.');
        }
    };

    return (
        <>
            <Header />
            <div className="container-xl px-4 mt-4">
                <ProfileMenu />
                <div className="card mb-4">
                    <div className="card-header">Change Password</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    id="inputFirstName"
                                    type="text"
                                    value={emailDefaultValue}
                                    readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <label className={`small mb-1 ${currentPasswordError ? 'text-danger' : ''}`} htmlFor="currentPassword">
                                    {currentPasswordError ? currentPasswordError : 'Enter your password'}
                                </label>
                                <input
                                    className={`form-control ${currentPasswordError ? 'is-invalid' : ''}`}
                                    id="currentPassword"
                                    type="password"
                                    placeholder="Enter your password!"
                                    value={currentPassword}
                                    onChange={handleCurrentPasswordChange}
                                />
                                <button
                                    className="btn btn-primary mt-2"
                                    type="button"
                                    onClick={handleConfirmCurrentPassword}
                                >
                                    Confirm Current Password
                                </button>
                            </div>

                            {showConfirmationCode && (
    <div className="mb-3">
        <label className={`small mb-1 ${confirmationCodeError ? 'text-danger' : ''}`} htmlFor="confirmationCode">
            {confirmationCodeError ? confirmationCodeError : 'Confirmation Code'}
        </label>
        <input
            className={`form-control ${confirmationCodeError ? 'is-invalid' : ''}`}
            id="confirmationCode"
            type="text"
            placeholder="Enter confirmation code"
            value={confirmationCode}
            onChange={handleConfirmationCodeChange}
        />
    </div>
)}

                            {showConfirmationCode && (
                                <div className="mb-3">
                                    <label className={`small mb-1 ${confirmPasswordError ? 'text-danger' : ''}`} htmlFor="newPassword">
                                        {confirmPasswordError ? confirmPasswordError : 'New password'}
                                    </label>
                                    <input
                                        className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                                        id="newPassword"
                                        type="password"
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={handleNewPasswordChange}
                                    />
                                </div>
                            )}

                            {showConfirmationCode && (
                                <div className="mb-3">
                                    <label className={`small mb-1 ${confirmPasswordError ? 'text-danger' : ''}`} htmlFor="confirmPassword">
                                        {confirmPasswordError ? confirmPasswordError : 'Confirm New Password'}
                                    </label>
                                    <input
                                        className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm New Password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                </div>
                            )}

                            <button className="btn btn-primary" type="submit">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
