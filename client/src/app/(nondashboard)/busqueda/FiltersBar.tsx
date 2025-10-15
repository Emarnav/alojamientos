import {
  FiltersState,
  setFilters,
  setViewMode,
  toggleFiltersFullOpen,
} from "@/state";
import { useAppSelector } from "@/state/redux";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import { cleanParams, cn, formatPriceValue } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List, Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertyTypeIcons } from "@/lib/constants";

const FiltersBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const filters = useAppSelector((state) => state.global.filters);
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const [searchInput, setSearchInput] = useState(filters.location);

  const updateURL = debounce((newFilters: FiltersState) => {
    const cleanFilters = cleanParams(newFilters);
    const updatedSearchParams = new URLSearchParams();

    Object.entries(cleanFilters).forEach(([key, value]) => {
      updatedSearchParams.set(
        key,
        Array.isArray(value) ? value.join(",") : value.toString()
      );
    });

    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  });

  const handleFilterChange = (
    key: string,
    value: any,
    isMin: boolean | null
  ) => {
    let newValue = value;

    if (key === "rangoPrecio" || key === "superficie") {
      const currentArrayRange = [...filters[key]];
      if (isMin !== null) {
        const index = isMin ? 0 : 1;
        currentArrayRange[index] = value === "any" ? null : Number(value);
      }
      newValue = currentArrayRange;
    } else if (key === "coordinates") {
      newValue = value === "any" ? [0, 0] : value.map(Number);
    } else {
      newValue = value === "any" ? "any" : value;
    }

    const newFilters = { ...filters, [key]: newValue };
    dispatch(setFilters(newFilters));
    updateURL(newFilters);
  };

  const handleLocationSearch = () => {
    const newFilters = {
      ...filters,
      location: searchInput,
    };
    dispatch(setFilters(newFilters));
    updateURL(newFilters);
  };

  return (
    <div className="w-full py-4 bg-white border-b border-gray-200">
      <div className="max-w-full mx-auto px-4">
        {/* Mobile/Tablet responsive layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          
          {/* Main filters row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* All Filters button */}
            <Button
              variant="outline"
              className={cn(
                "gap-2 px-4 py-2 text-sm border-gray-200 hover:bg-gray-50",
                isFiltersFullOpen && "bg-primary text-white border-primary"
              )}
              onClick={() => dispatch(toggleFiltersFullOpen())}
            >
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Filtros</span>
            </Button>

            {/* Province Quick Filter - responsive */}
            <div className="flex gap-2 bg-gray-50 p-1 rounded-lg border">
              {[
                { value: "any", label: "Todas", shortLabel: "Todas" },
                { value: "Valencia", label: "Valencia", shortLabel: "VLC" },
                { value: "Alicante", label: "Alicante", shortLabel: "ALC" },
                { value: "Castellón", label: "Castellón", shortLabel: "CS" }
              ].map((province) => (
                <Button
                  key={province.value}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md transition-colors",
                    filters.provincia === province.value 
                      ? "bg-primary text-white" 
                      : "text-gray-700 hover:bg-white hover:text-primary"
                  )}
                  onClick={() => handleFilterChange("provincia", province.value, null)}
                >
                  <span className="hidden sm:inline">{province.label}</span>
                  <span className="sm:hidden">{province.shortLabel}</span>
                </Button>
              ))}
            </div>

            {/* Search Location - responsive */}
            <div className="flex items-center bg-gray-50 rounded-lg border overflow-hidden min-w-0 flex-1 lg:flex-none lg:w-auto">
              <div className="flex items-center pl-3">
                <MapPin className="w-4 h-4 text-gray-400" />
              </div>
              <Input
                placeholder="Buscar ubicación..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full sm:w-48 border-none bg-transparent focus:ring-0 text-sm h-9"
                onKeyPress={(e) => e.key === 'Enter' && handleLocationSearch()}
              />
              <Button
                onClick={handleLocationSearch}
                size="sm"
                className="m-0.5 h-8 px-3 bg-primary hover:bg-primary/90 text-white"
              >
                <Search className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* View Mode - always visible on large screens, collapsible on mobile */}
          <div className="flex bg-gray-50 p-1 rounded-lg border w-fit">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "px-3 py-1.5 text-sm rounded-md flex items-center gap-2",
                viewMode === "list" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:bg-white hover:text-primary"
              )}
              onClick={() => dispatch(setViewMode("list"))}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Lista</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "px-3 py-1.5 text-sm rounded-md flex items-center gap-2",
                viewMode === "grid" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:bg-white hover:text-primary"
              )}
              onClick={() => dispatch(setViewMode("grid"))}
            >
              <Grid className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
