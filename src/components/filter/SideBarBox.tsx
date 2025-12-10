"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import FilterSearch from "./FilterSearch";

function SideBarBox({
  onFilterChange,
}: {
  onFilterChange?: (filters: unknown) => void;
}) {
  return (
    <Sidebar className="mt-20">
      <SidebarHeader className="text-sm text-center p-3"> </SidebarHeader>
      <SidebarTrigger className="absolute left-65" />
      <SidebarContent>
        <SidebarGroup />
        <FilterSearch onFilterChange={onFilterChange} />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
export default SideBarBox;
