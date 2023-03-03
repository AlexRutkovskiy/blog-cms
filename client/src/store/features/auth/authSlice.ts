import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import {IAuth, IUser, IUserDataLogin, IUserDataRegister} from "../../../types";
import {loginService, registerService} from "../../services";

const initialState: IAuth = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    user: null
}

export const register = createAsyncThunk<IUser, IUserDataRegister, {rejectValue: string}>(
    'auth/register',
    async (registerData, thunkAPI) => {
        try {
            return await registerService(registerData);
        } catch (e) {
            const message = (e instanceof Error) ? e.message : 'Register Error';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const login = createAsyncThunk<IUser, IUserDataLogin, {rejectValue: string}>(
    'auth/login',
    async (loginData, thunkAPI) => {
        try {
            return await loginService(loginData);
        } catch (e) {
            const message = (e instanceof Error) ? e.message : 'Register Error';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state: IAuth) => {
            state.user = null;
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        },
        success: (state: IAuth) => {
            state.isLoading = false;
            state.isError = false;
            state.message = '';
            state.isSuccess = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state: IAuth, ) => {
                authSlice.actions.reset();
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<IUser>) => {
                authSlice.actions.success();
                state.user = action.payload;
            })
            .addCase(register.rejected, (state:IAuth, action: PayloadAction<string | undefined>) => {
                authSlice.actions.reset();
                state.isError = true;
                state.message = (typeof action.payload === 'string') ? action.payload : 'Register Error';
            })

        builder
            .addCase(login.pending, (state, action) => {
                authSlice.actions.reset();
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                authSlice.actions.success();
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                authSlice.actions.reset();
                state.isError = true;
                state.message = (typeof action.payload === 'string') ? action.payload : 'Register Error';
            })
    }
});

export default authSlice.reducer;