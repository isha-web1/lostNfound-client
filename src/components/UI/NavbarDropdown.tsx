"use client";

import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
 
  DropdownItem,
 
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";

import { useRouter } from "next/navigation";

export default function NavbarDropdown() {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="Joe" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile" onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem key="settings" onClick={() => handleNavigation("/profile/settings")}>
          Settings
        </DropdownItem>
        <DropdownItem key="create-post" onClick={() => handleNavigation("/profile/create-post")}>
          Create Post
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}