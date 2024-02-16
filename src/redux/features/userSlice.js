import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  gender: "",
  phone: "",
  email: "",
  address: "",
  password:"",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPassword: (state, action) => {
        state.password = action.payload;
      },
  },
});

export const { setName, setGender, setPhone, setEmail, setAddress,setPassword } = userSlice.actions;
export default userSlice.reducer;
