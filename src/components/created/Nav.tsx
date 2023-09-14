import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "../ui/button";
import { navLinks } from "@/constants";

const Nav = () => {
  return (
    <div className="flex w-full py-2 lg:px-36 md:px-24 px-8 mt-6 font-mono">
      <div className="flex w-full justify-between">
        <div className="py-2">
          <h4 className="text-xl font-bold">
            <span className="text-code">Ankit</span> Khurana
          </h4>
        </div>

        <Sheet>
          <SheetTrigger>
            <svg
              className="lg:hidden"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="text-primary"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </SheetTrigger>
          <SheetContent side="right" className="bg-secondary pt-12">
            <div>
              <ul>
                {navLinks.map((link) => {
                  return (
                    <>
                      <li className="p-2 my-2 text-large font-extrabold font-mono">
                        <span className="text-code">{"// "}</span>
                        {link.label}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <SheetFooter>
              <Button  className="border-code mt-2 w-full">
                Resume
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <div className="lg:block hidden">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => {
                return (
                  <>
                    <NavigationMenuItem
                      className={navigationMenuTriggerStyle()}
                    >
                      <NavigationMenuLink>
                        <span className="text-code">{"// "}</span>
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </>
                );
              })}
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Button
                    variant="outline"
                    className="text-code border-code ml-1"
                  >
                    Resume
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Nav;
