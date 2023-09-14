import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

const Nav = () => {
  return (
      <div className="flex w-full py-2 lg:px-36 md:px-24 px-8 mt-6 font-mono">
        <div className="flex w-full justify-between">
          <div>
            <h4 className="text-xl font-bold">
              <span className="text-code">Ankit</span> Khurana
            </h4>
          </div>
          <svg className='lg:hidden' width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="text-primary"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
          <div className="lg:block hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                  <NavigationMenuLink>
                    <span className="text-code">{'// '}</span>Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                  <NavigationMenuLink>
                    <span className="text-code">{'// '}</span>About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                  <NavigationMenuLink>
                    <span className="text-code">{'// '}</span>Project
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                  <NavigationMenuLink>
                    <span className="text-code">{'// '}</span>Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
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
