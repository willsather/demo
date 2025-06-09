import { Code, Home, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function NavigationDropdown({ url }: { url: string }) {
  const navigationOptions = [
    {
      value: `${url}/`,
      label: "Home",
      icon: Home,
    },
    {
      value: `${url}/shop`,
      label: "Shop",
      icon: ShoppingBag,
    },
    {
      value: `${url}/api`,
      label: "API",
      icon: Code,
    },
  ];

  return (
    <nav className="flex items-center gap-4">
      {navigationOptions.map((option) => (
        <Link
          key={option.value}
          href={option.value}
          className="flex items-center gap-2 rounded-md px-3 py-1 text-muted-foreground text-sm transition-colors hover:bg-muted/15"
        >
          <option.icon className="size-4" />
          {option.label}
        </Link>
      ))}
    </nav>
  );
}
