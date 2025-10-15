import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  location: string;
  habitaciones: string;
  banos: string;
  tipoAlojamiento: string;
  disponibleDesde: string;
  amenities: string[];
  includedExpenses: string[];
  rangoPrecio: [number, number] | [null, null];
  superficie: [number, number] | [null, null];
  provincia?: string;
}

interface InitialStateTypes {
  filters: FiltersState;
  isFiltersFullOpen: boolean;
  viewMode: "grid" | "list";
}

export const initialState: InitialStateTypes = {
  filters: {
    location: "",
    habitaciones: "any",
    banos: "any",
    tipoAlojamiento: "any",
    disponibleDesde: "any",
    amenities: [],
    includedExpenses: [],
    rangoPrecio: [null, null],
    superficie: [null, null],
    provincia: "any",
  },
  isFiltersFullOpen: false,
  viewMode: "grid",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    toggleFiltersFullOpen: (state) => {
      state.isFiltersFullOpen = !state.isFiltersFullOpen;
    },
    setViewMode: (state, action: PayloadAction<"grid" | "list">) => {
      state.viewMode = action.payload;
    },
  },
});

export const { setFilters, toggleFiltersFullOpen, setViewMode } =
  globalSlice.actions;

export default globalSlice.reducer;
