import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: null,
    role: null,
    isAuthenticated: false,

    // Fungsi untuk mencatat data user setelah login sukses
    setAuth: (userData) => set({
        user: userData,
        role: userData.role,
        isAuthenticated: true
    }),

    // Fungsi untuk membersihkan data saat logout
    clearAuth: () => set({ user: null, role: null, isAuthenticated: false }),
}));

export default useAuthStore;
