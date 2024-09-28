"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  const baseClasses =
    "cursor-pointer flex items-center gap-3 transition-colors";
  const activeClasses = isActive ? "bg-blue-200 text-white" : "text-gray-700";
  const hoverClasses = "hover:text-blue-500 hover:bg-blue-100";
  const paddingClasses = isCollapsed
    ? "py-4 justify-center"
    : "px-8 py-4 justify-start";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href}>
            <div
              className={`${baseClasses} ${paddingClasses} ${activeClasses} ${hoverClasses}`}
            >
              <Icon className="w-6 h-6" />
              {!isCollapsed && <span className="font-medium">{label}</span>}
            </div>
          </Link>
        </TooltipTrigger>
        {isCollapsed && (
          <TooltipContent side="right" align="center">
            <p>{label}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarLink;
