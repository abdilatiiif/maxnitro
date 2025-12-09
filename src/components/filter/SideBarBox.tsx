import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import FilterSearch from "./FilterSearch";

function SideBarBox() {
  return (
    <Sidebar className="mt-20">
      <SidebarHeader className="text-sm text-center p-3"> </SidebarHeader>
      <SidebarTrigger className="absolute left-65" />
      <SidebarContent>
        <SidebarGroup />
        <FilterSearch />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
export default SideBarBox;
