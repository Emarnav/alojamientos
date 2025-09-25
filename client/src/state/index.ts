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
  coordinates: [number, number];
  provincia?: string;
}

interface InitialStateTypes {
  filters: FiltersState;
  isFiltersFullOpen: boolean;
  viewMode: "grid" | "list";
  mapCenterProperty: { id: number; coordinates: [number, number] } | null;
  selectedPropertyFromMap: number | null;
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
    coordinates: [-0.4280276, 39.547361],
    provincia: "any",
  },
  isFiltersFullOpen: false,
  viewMode: "grid",
  mapCenterProperty: null,
  selectedPropertyFromMap: null,
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
    centerMapOnProperty: (state, action: PayloadAction<{ id: number; coordinates: [number, number] }>) => {
      state.mapCenterProperty = action.payload;
    },
    selectPropertyFromMap: (state, action: PayloadAction<number | null>) => {
      state.selectedPropertyFromMap = action.payload;
    },
  },
});

export const { setFilters, toggleFiltersFullOpen, setViewMode, centerMapOnProperty, selectPropertyFromMap } =
  globalSlice.actions;

export default globalSlice.reducer;
