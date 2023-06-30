import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { getRoomBooking } from '../../services/room.service'
import { RoomBooking } from '../../app-types/room-booking.type'
import { AxiosError } from '../../services/http.service'

export interface RoomBookingState {
  roomBooking: RoomBooking | null
}

const initialState: RoomBookingState = {
    roomBooking: null
}

export const getRoomBookingThunk = createAsyncThunk<RoomBooking, void>('room/getRoomBookingThunk Status', async () => {
    try {
        const response = await getRoomBooking()
        return response.data; 
    } catch (error: any) {
        let err: AxiosError<any> = error;
        if (!err.response) {
          throw error;
        }
        return err.response.data;
    }
});

export const roomBookingSlice = createSlice({
  name: 'roomBooking',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoomBookingThunk.fulfilled, (state, action: PayloadAction<RoomBooking | null>) => {
        state.roomBooking = action.payload; //กรณีต้องการใช้ global state ถ้าใช้ unwrap เอาออกได้
    })
  }
})

// Action creators are generated for each case reducer function
// export const { updateProfileAction} = authSlice.actions

export const selectRoomBookingState = (state: RootState) => state.roomBookingState

export default roomBookingSlice.reducer