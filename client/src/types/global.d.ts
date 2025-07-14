import { LucideIcon } from "lucide-react";
import { AuthUser } from "aws-amplify/auth";
import { Alojamiento as PrismaAlojamiento, Usuario, Solicitud } from "@prisma/client";
import { MotionProps as OriginalMotionProps } from "framer-motion";

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}

declare global {
  type Alojamiento = PrismaAlojamiento;

  enum AmenityEnum {
    WasherDryer = "WasherDryer",
    AirConditioning = "AirConditioning",
    Dishwasher = "Dishwasher",
    HighSpeedInternet = "HighSpeedInternet",
    HardwoodFloors = "HardwoodFloors",
    WalkInClosets = "WalkInClosets",
    Microwave = "Microwave",
    Refrigerator = "Refrigerator",
    Pool = "Pool",
    Gym = "Gym",
    Parking = "Parking",
    PetsAllowed = "PetsAllowed",
    WiFi = "WiFi",
  }

  enum HighlightEnum {
    HighSpeedInternetAccess = "HighSpeedInternetAccess",
    WasherDryer = "WasherDryer",
    AirConditioning = "AirConditioning",
    Heating = "Heating",
    SmokeFree = "SmokeFree",
    CableReady = "CableReady",
    SatelliteTV = "SatelliteTV",
    DoubleVanities = "DoubleVanities",
    TubShower = "TubShower",
    Intercom = "Intercom",
    SprinklerSystem = "SprinklerSystem",
    RecentlyRenovated = "RecentlyRenovated",
    CloseToTransit = "CloseToTransit",
    GreatView = "GreatView",
    QuietNeighborhood = "QuietNeighborhood",
  }

  enum PropertyTypeEnum {
    Rooms = "Rooms",
    Tinyhouse = "Tinyhouse",
    Apartment = "Apartment",
    Villa = "Villa",
    Townhouse = "Townhouse",
    Cottage = "Cottage",
  }

  interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
  }

  interface PropertyOverviewProps {
    alojamiento: Alojamiento;
  }
  
  interface AuthProps {
    children?: React.ReactNode;
  }

  interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    alojamiento: Alojamiento;
  }

  interface ImageCarouselProps {
    images: string[];
  }

  interface ContactWidgetProps {
    alojamiento: Alojamiento;
    onOpenModal: () => void;
    onStartChat: () => void;
  }

  interface ImagePreviewsProps {
    images: string[];
  }

  interface ListingsProps {
    alojamientos?: Alojamiento[];
    isLoading: boolean;
    isError: boolean;
  }
  
  interface PropertyDetailsProps {
    alojamiento: Alojamiento;
  }

  interface PropertyLocationProps {
    alojamiento: Alojamiento;
  }

  interface ApplicationCardProps {
    solicitud: Solicitud;
    userType: "propietario" | "estudiante";
    children: React.ReactNode;
  }

  interface CardProps {
    alojamiento: Alojamiento;
    isFavorite?: boolean;
    onFavoriteToggle?: () => void;
    showFavoriteButton?: boolean;
    alojamientoLink?: string;
    context?: "public" | "admin"; 
  }

  interface CardCompactProps {
    alojamiento: Alojamiento;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton?: boolean;
    alojamientoLink?: string;
  }

  interface HeaderProps {
    title: string;
    subtitle: string;
  }

  interface NavbarProps {
    isDashboard: boolean;
  }

  interface AppSidebarProps {
    userType: "propietario" | "estudiante" | "admin";
  }

  interface SettingsFormProps {
    initialData: SettingsFormData;
    onSubmit: (data: SettingsFormData) => Promise<void>;
    userType: "propietario" | "estudiante" | "admin";
  }

  interface User {
    cognitoInfo: AuthUser;
    userInfo: Usuario;
    userRole: "estudiante" | "propietario" | "admin";
  }
}

