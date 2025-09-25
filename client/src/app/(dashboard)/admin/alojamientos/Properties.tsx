"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useGetAdminPendingPropertiesQuery, useGetAdminApprovedPropertiesQuery } from "@/state/api";
import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SortAsc, SortDesc } from "lucide-react";

const Properties = () => {
  const [activeTab, setActiveTab] = useState<'pendientes' | 'aprobados'>('pendientes');
  
  // Filters for approved properties
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'postedDate' | 'nombre' | 'precio'>('postedDate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [propietarioFilter, setPropietarioFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);


  // Debounced search parameters
  const approvedQueryParams = useMemo(() => ({
    search: searchTerm,
    sortBy,
    sortOrder,
    propietario: propietarioFilter,
    page: currentPage,
    limit: 20
  }), [searchTerm, sortBy, sortOrder, propietarioFilter, currentPage]);

  
  const {
    data: pendingProperties,
    isLoading: pendingLoading,
    error: pendingError,
  } = useGetAdminPendingPropertiesQuery();

  const {
    data: approvedData,
    isLoading: approvedLoading,
    error: approvedError,
  } = useGetAdminApprovedPropertiesQuery(approvedQueryParams);


  const isLoading = activeTab === 'pendientes' ? pendingLoading : approvedLoading;
  const error = activeTab === 'pendientes' ? pendingError : approvedError;
  const properties = activeTab === 'pendientes' ? pendingProperties : approvedData?.properties;
  const pagination = activeTab === 'aprobados' ? approvedData?.pagination : null;

  const handleTabChange = (tab: 'pendientes' | 'aprobados') => {
    setActiveTab(tab);
    if (tab === 'aprobados') {
      // Reset filters when switching to approved tab
      setCurrentPage(1);
    }
  };

  const handleSortOrderToggle = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1);
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error cargando los alojamientos</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Gestión de Alojamientos"
        subtitle="Gestiona los alojamientos pendientes de revisión y los ya aprobados."
      />
      
      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        <Button
          variant={activeTab === 'pendientes' ? 'default' : 'ghost'}
          className="relative"
          onClick={() => handleTabChange('pendientes')}
        >
          Pendientes de revisión
          {pendingProperties && pendingProperties.length > 0 && (
            <Badge variant="secondary" className="ml-2">
              {pendingProperties.length}
            </Badge>
          )}
        </Button>
        <Button
          variant={activeTab === 'aprobados' ? 'default' : 'ghost'}
          onClick={() => handleTabChange('aprobados')}
        >
          Aprobados
          {activeTab === 'aprobados' && pagination && (
            <Badge variant="secondary" className="ml-2">
              {pagination.totalCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filters - Only show for approved properties */}
      {activeTab === 'aprobados' && (
        <div className="mb-6 p-4 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar por nombre, descripción o ubicación..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10"
              />
            </div>

            {/* Owner Filter */}
            <Input
              placeholder="Filtrar por propietario..."
              value={propietarioFilter}
              onChange={(e) => {
                setPropietarioFilter(e.target.value);
                setCurrentPage(1);
              }}
            />

            {/* Sort By */}
            <Select
              value={sortBy}
              onValueChange={(value) => {
                setSortBy(value as 'postedDate' | 'nombre' | 'precio');
                setCurrentPage(1);
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="postedDate">Fecha de publicación</SelectItem>
                <SelectItem value="nombre">Nombre</SelectItem>
                <SelectItem value="precio">Precio</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort Order */}
            <Button
              variant="outline"
              onClick={handleSortOrderToggle}
              className="flex items-center gap-2"
            >
              {sortOrder === 'asc' ? 
                <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
              {sortOrder === 'asc' ? 
                'Ascendente' : 'Descendente'}
            </Button>
          </div>

          {/* Results count */}
          {pagination && (
            <div className="mt-4 text-sm text-gray-600">
              Mostrando {((pagination.currentPage - 1) * pagination.limit) + 1} - {Math.min(pagination.currentPage * pagination.limit, pagination.totalCount)} de {pagination.totalCount} alojamientos
            </div>
          )}
        </div>
      )}

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties?.map((alojamiento) => (
          <Card
            key={alojamiento.id}
            alojamiento={alojamiento}
            alojamientoLink={`/admin/alojamientos/${alojamiento.id}`}
            context="admin"
          />
        ))}
      </div>
      
      {/* Pagination - For approved properties */}
      {activeTab === 'aprobados' && pagination && pagination.totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
              const pageNum = Math.max(1, Math.min(pagination.totalPages - 4, currentPage - 2)) + i;
              return (
                <Button
                  key={pageNum}
                  variant={pageNum === currentPage ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.min(pagination.totalPages, currentPage + 1))}
            disabled={currentPage === pagination.totalPages}
          >
            Siguiente
          </Button>
        </div>
      )}
      
      {/* Empty State */}
      {(!properties || properties.length === 0) && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            {activeTab === 'pendientes' 
              ? 'No hay alojamientos pendientes de revisión' 
              : searchTerm || propietarioFilter
                ? 'No se encontraron alojamientos que coincidan con los filtros'
                : 'No hay alojamientos aprobados'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Properties;
