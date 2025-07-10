"use client";

import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem} from "@heroui/dropdown";

import { useRouter } from "next/navigation";
import { Avatar } from "@heroui/avatar";
import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";

export default function NavbarDropdown() {
  const router = useRouter();
  const { user, setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key='profile' onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem key='profile/settings' onClick={() => handleNavigation("/profile/settings")}>
          Settings
        </DropdownItem>
        <DropdownItem key='profile/create-post' onClick={() => handleNavigation("/profile/create-post")}>
          Create Post
        </DropdownItem>
        <DropdownItem
          onClick={() => handleLogout()}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}