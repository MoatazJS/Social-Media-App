import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import DividerComponent from "./DividerComponent";
import { authContext } from "../contexts/AuthContext";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(authContext);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">Zekachu</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          {isLoggedIn ? (
            <NavbarItem>
              <Button onPress={logOut} color="danger" variant="flat">
                Logout
              </Button>
            </NavbarItem>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
                <Button color="primary" variant="flat">
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button color="primary" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <DividerComponent />
    </>
  );
}
