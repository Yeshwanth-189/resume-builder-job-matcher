import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarCollapsed: false,
  theme: 'light', // or 'dark'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebarCollapsed = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload; 
    },
  },
});

export const { toggleSidebar, toggleTheme, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
