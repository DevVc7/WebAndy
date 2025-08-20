import { MenuItemProps } from "@/interfaces/menu-Interface";
import {
  BarChart,
  BarChart3,
  Briefcase,
  ClipboardCheck,
  CreditCard,
  FileArchiveIcon,
  FileSpreadsheet,
  FileText,
  LayoutDashboardIcon,
  LayoutGrid,
  Navigation,
  Package,
  PieChart,
  ShoppingCart,
  Truck,
  User,
  Wallet,
} from "lucide-react";


export interface MenuConfigProps {
  mainNav: MenuItemProps[];
  sidebarNav: {
    modern: MenuItemProps[];
  };
}

export const menusConfig = (): MenuConfigProps =>  {

  const menus: MenuConfigProps = {
    mainNav: [
      {
        title: "Dashboard",
        icon: LayoutDashboardIcon,
        href: "/",
      },
    ],
    sidebarNav: {
      modern:
       [
        {
          title: "Inicio",
          icon: LayoutGrid,
          href: "/",
          rol: "Todos",
        },
        {
          title: "Gestión comercial",
          icon: Briefcase,
          rol: "Todos",
          child:[
              {
                title: "Clientes",
                icon: User,
                href: "/cliente",
                rol: "Todos",
              },
              {
                title: "Proveedores",
                icon: Truck,
                href: "/proveedores",
                rol: "Todos",
              },
              {
                title: "Cotizaciones",
                icon: FileText,
                href: "/cotizaciones",
                rol: "Todos",
              },
              {
                title: "Orden de compra",
                icon: ShoppingCart,
                href: "/orden-compra",
                rol: "Todos",
              },
              {
                title: "Nota de ingreso",
                icon: ClipboardCheck,
                href: "/nota-ingreso",
                rol: "Todos",
              }
          ]
        },
        {
          title: "Facturas",
          icon: FileArchiveIcon,
          rol: "Todos",
          child:[

            {
              title: "Facturas/boletas",
              icon: FileSpreadsheet,
              href: "/factura-bolera",
              rol: "Todos",
            },
            {
              title: "Opción despacho de facturación",
              icon: Package,
              href: "/opcion-despacho",
              rol: "Todos",
            },
            {
              title: "Guiado",
              icon: Navigation,
              href: "/guiado",
              rol: "Todos",
            },
            {
              title: "Estado de cuenta",
              icon: CreditCard,
              href: "/estado-cuenta",
              rol: "Todos",
            },
            {
              title: "Caja contado/crédito",
              icon: Wallet,
              href: "/estado-cuenta",
              rol: "Todos",
            },
          ]
        },
        {
          title: "Reportes",
          icon: BarChart,
          rol: "Todos",
          child:[
            {
              title: "Reporte valorizado",
              icon: BarChart3,
              href: "/reporte-valorizado",
              rol: "Todos",
            },
            
            {
              title: "Reportes",
              icon: PieChart,
              href: "/reportes",
              rol: "Todos",
            },
          ]
        },
        
       ]
    }
  }

  return menus
};

