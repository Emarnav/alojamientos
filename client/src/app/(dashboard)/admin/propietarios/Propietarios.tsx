"use client";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { 
  useGetAdminPropietariosQuery,
  useSuspendPropietarioMutation,
  useReactivarPropietarioMutation,
  useEliminarPropietarioMutation,
  useEnviarMensajePropietarioMutation
} from "@/state/api";
import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  SortAsc, 
  SortDesc, 
  User, 
  Mail, 
  Calendar, 
  Home, 
  MessageCircle,
  UserX,
  UserCheck,
  Trash2,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Propietarios = () => {
  // Filters for propietarios
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'createdAt' | 'nombre' | 'email'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);

  // Dialog states
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);
  const [suspendDialogOpen, setSuspendDialogOpen] = useState(false);
  const [selectedPropietario, setSelectedPropietario] = useState<any>(null);
  const [messageText, setMessageText] = useState('');
  const [suspensionReason, setSuspensionReason] = useState('');

  // Query parameters
  const queryParams = useMemo(() => ({
    search: searchTerm,
    sortBy,
    sortOrder,
    page: currentPage,
    limit: 20
  }), [searchTerm, sortBy, sortOrder, currentPage]);

  const {
    data: propietariosData,
    isLoading,
    error,
  } = useGetAdminPropietariosQuery(queryParams);

  // Mutations
  const [suspendPropietario] = useSuspendPropietarioMutation();
  const [reactivarPropietario] = useReactivarPropietarioMutation();
  const [eliminarPropietario] = useEliminarPropietarioMutation();
  const [enviarMensaje] = useEnviarMensajePropietarioMutation();

  const handleSortOrderToggle = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1);
  };

  const handleOpenSuspendDialog = (propietario: any) => {
    setSelectedPropietario(propietario);
    setSuspensionReason('');
    setSuspendDialogOpen(true);
  };

  const handleSuspendPropietario = async () => {
    if (!selectedPropietario || !suspensionReason.trim()) return;
    
    try {
      await suspendPropietario({
        propietarioId: selectedPropietario.id,
        motivo: suspensionReason.trim()
      });
      setSuspendDialogOpen(false);
      setSuspensionReason('');
      setSelectedPropietario(null);
    } catch (error) {
      console.error('Error suspending user:', error);
    }
  };

  const handleReactivarPropietario = async (propietarioId: number) => {
    if (window.confirm('¿Estás seguro de que quieres reactivar a este propietario?')) {
      await reactivarPropietario(propietarioId);
    }
  };

  const handleEliminarPropietario = async (propietarioId: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar a este propietario? Esta acción no se puede deshacer y eliminará todos sus alojamientos.')) {
      await eliminarPropietario(propietarioId);
    }
  };

  const handleOpenMessageDialog = (propietario: any) => {
    setSelectedPropietario(propietario);
    setMessageText('');
    setMessageDialogOpen(true);
  };

  const handleSendMessage = async () => {
    if (!selectedPropietario || !messageText.trim()) return;
    
    try {
      await enviarMensaje({
        propietarioId: selectedPropietario.id,
        mensaje: messageText.trim()
      });
      setMessageDialogOpen(false);
      setMessageText('');
      setSelectedPropietario(null);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error cargando los propietarios</div>;

  const pagination = propietariosData?.pagination;

  return (
    <div className="dashboard-container">
      <Header
        title="Gestión de Propietarios"
        subtitle="Consulta y gestiona todos los propietarios registrados en la plataforma."
      />

      {/* Filters */}
      <div className="mb-6 p-4 border rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar por nombre o email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10"
            />
          </div>

          {/* Spacer */}
          <div></div>

          {/* Sort By */}
          <Select
            value={sortBy}
            onValueChange={(value: 'createdAt' | 'nombre' | 'email') => {
              setSortBy(value);
              setCurrentPage(1);
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt">Fecha de registro</SelectItem>
              <SelectItem value="nombre">Nombre</SelectItem>
              <SelectItem value="email">Email</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort Order */}
          <Button
            variant="outline"
            onClick={handleSortOrderToggle}
            className="flex items-center gap-2"
          >
            {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
            {sortOrder === 'asc' ? 'Ascendente' : 'Descendente'}
          </Button>
        </div>

        {/* Results count */}
        {pagination && (
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {((pagination.currentPage - 1) * pagination.limit) + 1} - {Math.min(pagination.currentPage * pagination.limit, pagination.totalCount)} de {pagination.totalCount} propietarios
          </div>
        )}
      </div>

      {/* Propietarios List */}
      <div className="space-y-4">
        {propietariosData?.propietarios?.map((propietario) => (
          <div key={propietario.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <User className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{propietario.nombre}</h3>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <Mail className="h-4 w-4 mr-1" />
                    {propietario.email}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    Registro: {new Date(propietario.createdAt).toLocaleDateString('es-ES')}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      {propietario._count.alojamientos} propiedades
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {propietario._count.conversacionesComoPropietario} conversaciones
                    </div>
                  </div>
                  {propietario.telefono && (
                    <div className="text-sm text-gray-600 mb-2">
                      Teléfono: {propietario.telefono}
                    </div>
                  )}
                  <div className="flex items-center justify-end space-x-2">
                    {propietario.isSuspended && (
                      <Badge variant="destructive" className="text-xs">
                        Suspendido
                      </Badge>
                    )}
                    {!propietario.isEmailVerified && (
                      <Badge variant="outline" className="text-xs text-yellow-600">
                        Email no verificado
                      </Badge>
                    )}
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem 
                      onClick={() => handleOpenMessageDialog(propietario)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Enviar mensaje
                    </DropdownMenuItem>
                    
                    {propietario.isSuspended ? (
                      <DropdownMenuItem 
                        onClick={() => handleReactivarPropietario(propietario.id)}
                      >
                        <UserCheck className="h-4 w-4 mr-2" />
                        Reactivar cuenta
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem 
                        onClick={() => handleOpenSuspendDialog(propietario)}
                      >
                        <UserX className="h-4 w-4 mr-2" />
                        Suspender cuenta
                      </DropdownMenuItem>
                    )}
                    
                    <DropdownMenuItem 
                      onClick={() => handleEliminarPropietario(propietario.id)}
                      className="text-red-600"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Eliminar propietario
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
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
      {(!propietariosData?.propietarios || propietariosData.propietarios.length === 0) && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            {searchTerm
              ? 'No se encontraron propietarios que coincidan con los filtros'
              : 'No hay propietarios registrados'
            }
          </p>
        </div>
      )}

      {/* Message Dialog */}
      <Dialog open={messageDialogOpen} onOpenChange={setMessageDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              Enviar mensaje a {selectedPropietario?.nombre}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Mensaje
              </label>
              <Textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
                className="w-full"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setMessageDialogOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
              >
                Enviar mensaje
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Suspension Dialog */}
      <Dialog open={suspendDialogOpen} onOpenChange={setSuspendDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              Suspender cuenta de {selectedPropietario?.nombre}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Motivo de la suspensión <span className="text-red-500">*</span>
              </label>
              <Textarea
                value={suspensionReason}
                onChange={(e) => setSuspensionReason(e.target.value)}
                placeholder="Indica el motivo por el cual se suspende esta cuenta..."
                rows={4}
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                Este motivo será visible para el propietario suspendido.
              </p>
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setSuspendDialogOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSuspendPropietario}
                disabled={!suspensionReason.trim()}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Suspender cuenta
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Propietarios;