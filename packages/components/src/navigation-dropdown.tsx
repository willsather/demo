"use client";

import { Home, ShoppingBag } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@demo/ui/select";
import Link from "next/link";

const navigationOptions = [
  {
    value: "/",
    label: "Home",
    icon: Home,
  },
  {
    value: "/shop",
    label: "Shop",
    icon: ShoppingBag,
  },
];

function getDemoByPath(pathname: string) {
  if (pathname.includes("/shop")) {
    return "/shop";
  }

  return "/";
}

export function NavigationDropdown() {
  const router = useRouter();

  const demo = getDemoByPath(usePathname());

  const handleNavigation = (value: string) => {
    router.replace(value);
  };

  const currentOption = navigationOptions.find(
    (option) => option.value === demo,
  );

  return (
    <div className="mx-auto w-full max-w-sm">
      <Select value={demo} onValueChange={handleNavigation}>
        <SelectTrigger className="h-7 w-full border-muted-foreground text-muted-foreground">
          <SelectValue>
            <div className="flex items-center gap-2 text-muted-foreground">
              {currentOption?.icon && (
                <currentOption.icon className="size-4 text-muted-foreground" />
              )}
              {currentOption?.label || "Select a demo"}
            </div>
          </SelectValue>
        </SelectTrigger>

        <SelectContent>
          {navigationOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <Link href={option.value} className="flex items-center gap-2">
                <option.icon className="size-4" />
                {option.label}
              </Link>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
