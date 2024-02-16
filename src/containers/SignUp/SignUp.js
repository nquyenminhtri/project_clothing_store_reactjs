import React from "react";
import { useDispatch, useSelector } from "react-redux";
import customerService from "../../services/customerService";
import {
  setName,
  setGender,
  setPhone,
  setEmail,
  setAddress,
  setPassword,
} from "../../redux/features/userSlice";
import InputAddress from "./Components/InputAddress";
import InputEmail from "./Components/InputEmail";
import InputGender from "./Components/InputGender";
import InputName from "./Components/InputName";
import InputPhone from "./Components/InputPhone";
import Button from "./Components/Button";
import InputPassword from "./Components/InputPassword";

function SignUp() {
   
  const dispatch = useDispatch();
  const { name, gender, phone, email, address, password } = useSelector((state) => state.user);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleButtonClick = async () => {
    if (!name || !phone || !email || !address) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      setIsSubmitting(true);
      const response = await customerService.signupCustomerFromAPI(name,
        gender,
        phone,
        email,
        address,
        password,);
        console.log('check res:',response.message);
        alert(`${response.message}`);
        if (response.code === 0) {
            window.location.href = '/login';
        }
        
    } catch (error) {
      console.error("Error during registration:", error);
      alert(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="col-12 col-md-6" style={{ display: 'grid', placeItems: 'center' }}>
        <div className="checkout_details_area mt-50 clearfix">
          <div className="cart-page-heading">
            <h5>Sign Up</h5>
          </div>
          <form action="#" method="post">
            <div className="row">
              <InputName value={name} onChange={(e) => dispatch(setName(e.target.value))} />
              <InputGender value={gender} onChange={(e) => dispatch(setGender(e.target.value))} />
              <InputPhone value={phone} onChange={(e) => dispatch(setPhone(e.target.value))} />
              <InputEmail value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
              <InputAddress value={address} onChange={(e) => dispatch(setAddress(e.target.value))} />
              <InputPassword value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
              <Button label={isSubmitting ? "Signing Up..." : "Sign Up"} onClick={handleButtonClick} disabled={isSubmitting} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;