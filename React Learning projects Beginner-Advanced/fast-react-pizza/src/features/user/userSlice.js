import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAddress } from "../../services/apiGeocoding"


function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}


export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
    // 1) We got the users geolocation position

    const positionObj = await getPosition()
    const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude
    }
    // 2) Then we use a reverse geocoding API to get a 
    //description of the users address, so we cn display if the order form,
    //so that the user can correct it if wrong
    const addressObj = await getAddress(position)
    const address = `${addressObj.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
    //payload of fulfilled state
    return { position, address }
})

const initialState = {
    username: "",
    status: "idle",
    position: {},
    address: "",
    error: ""

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload
        }
    },
    //when we are using ceateAsyncThunk we neeed to handle reducers for pending, resolved/fulfilled and reject
    //And below will be the syntax for that handling
    extraReducers: (builder) =>
        builder
            .addCase(fetchAddress.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.position = action.payload.position;
                state.address = action.payload.address;
                state.status ="idle"
            })
            .addCase(fetchAddress.rejected, (state, action) => {
                state.status = "error",
                state.error = action.error.message
            })
})


export const { updateName } = userSlice.actions


export default userSlice.reducer;