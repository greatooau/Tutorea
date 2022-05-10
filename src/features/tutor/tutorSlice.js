import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tutorService from './tutorService';
import AsyncStorage from '@react-native-async-storage/async-storage';

let user
// Get user from localStorage
const getUser = async() => {
    const userNotParsed = await AsyncStorage.getItem('user')
    user =  JSON.parse(userNotParsed)
}

const initialState = {
    filteredTutors:[],
    tutors:[],
    myTutors: [],
    actualTutor:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

getUser();
export const addToMyTutors = createAsyncThunk('tutor/addToMyTutors',
    async (tutorId, thunkAPI) => {
        try {
            const token = user.token
            return await tutorService.addToMyTutors(token, tutorId)
        } catch (error) {
            const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message || 
            error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
);

export const getTutorsByCategory = createAsyncThunk('tutor/getByCategory',
    async (category, thunkAPI) => {
        
        try {
            const token = user.token
            return await tutorService.getTutorsByCategory(category, token)
        } catch (error) {
            const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
);

export const getTutors = createAsyncThunk('tutor/getAll',
    async (thunkAPI) => {
        try {
            const token = user.token
            return await tutorService.getTutors(token)
        } catch (error) {
            const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
);

export const getOneTutor = createAsyncThunk('tutor/getOnlyOneTutor',
    async (tutorId, thunkAPI) => {
        
        try {
            const token = user.token
            return await tutorService.getOneTutor(token, tutorId)
        } catch (error) {
            const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
            return thunkAPI.rejectWithValue(message)
            
        }
    }
);

export const getMyTutors = createAsyncThunk('tutor/getMyTutors', 
    async (thunkAPI) => {
        try {
            const token = user.token
            return await tutorService.getMyTutors(token)
        } catch (error) {
            const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
/* const initialState = {
    filteredTutors:[],
    tutors:[],
    myTutors: [],
    actualTutor:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
} */

const tutorSlice = createSlice({
    name: "tutor",
    initialState,
    reducers: {
        reset: (state) => ({
            filteredTutors:[],
            tutors:[],
            myTutors: [],
            actualTutor:{},
            isError: false,
            isSuccess: false,
            isLoading: false,
            message: ''
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOneTutor.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOneTutor.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.actualTutor = action.payload
            })
            .addCase(getOneTutor.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                
            })
            .addCase(addToMyTutors.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToMyTutors.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.myTutors.push(action.payload)
            })
            .addCase(addToMyTutors.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                
            })
            .addCase(getMyTutors.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMyTutors.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.myTutors = action.payload
            })
            .addCase(getMyTutors.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                
            })
            .addCase(getTutors.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTutors.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tutors = action.payload
            })
            .addCase(getTutors.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                
            })
            .addCase(getTutorsByCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTutorsByCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.filteredTutors = action.payload
            })
            .addCase(getTutorsByCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                
            })
            /* 
            .addCase(logout.pending, (state) => {
                
            }) */
    }
})
export const { reset } = tutorSlice.actions;
export default tutorSlice.reducer;