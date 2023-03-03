import {createSlice, createAsyncThunk, PayloadAction, AnyAction} from '@reduxjs/toolkit'
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

const isPending = (action: AnyAction) => {
    return action.type.endsWith('pending');
}

const isFulfilled = (action: AnyAction) => {
    return action.type.endsWith('fulfilled');
}

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected');
}

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
            .addMatcher(isPending, (state: IAuth, ) => {
                authSlice.actions.reset();
                state.isLoading = true;
            })
            .addMatcher(isFulfilled, (state, action: PayloadAction<IUser>) => {
                authSlice.actions.success();
                state.user = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                authSlice.actions.reset();
                state.isError = true;
                state.message = action.payload;
            })
    }
});

export default authSlice.reducer;