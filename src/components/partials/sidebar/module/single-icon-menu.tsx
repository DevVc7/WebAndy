import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/stores/auth.store";
import { MenuItemProps } from "@/interfaces/menu-Interface";




const SingleIconMenu = ({ index, activeIndex, item, locationName }: {
  index: number;
  activeIndex: number | null;
  item: MenuItemProps;
  locationName: string;
}) => {

  const { user } = useAuthStore()
  
  const type_usuario:string  = user?.rol?.name ?? 'Administrador'



  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {
              (item.rol == type_usuario || item.rol == 'Todos') && (
                
                item.href ? (
                  <Link
                    to={item.href}
                    className={cn(
                      "h-12 w-12 mx-auto rounded-md  transition-all duration-300 flex flex-col items-center justify-center cursor-pointer relative",
                      {
                        "bg-green-600/20  text-green-500": locationName === item.href,
                        "text-gray-500  hover:bg-green-600/10  hover:text-green-500 ":
                          locationName !== item.href,
                      }
                    )}
                  >
                    <item.icon className="w-6 h-6" />
                  </Link>
                ) : (
                  <button
                    className={cn(
                      "h-12 w-12 mx-auto rounded-md transition-all duration-300 flex flex-col items-center justify-center cursor-pointer relative  ",
                      {
                        "bg-green-500/10  text-green-500 data-[state=delayed-open]:bg-green-500/10":
                          activeIndex === index,
                        " text-gray-500  data-[state=delayed-open]:bg-green-600/10  data-[state=delayed-open]:text-green-500":
                          activeIndex !== index,
                      }
                    )}
                  >
                    <item.icon className="w-6 h-6" />
                  </button>
                )
              )
            }
            
            
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-green-600 fill-green-600 text-white z-50 relative">
            {item.title}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default SingleIconMenu;
