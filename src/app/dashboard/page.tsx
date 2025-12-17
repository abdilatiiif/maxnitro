"use client";

import { getUser } from "@/actions/AUTH/getUser";
import Favoritter from "@/components/dashboardComponents/Favoritter";
import Kjøretøy from "@/components/dashboardComponents/Kjøretøy";
import Oversikt from "@/components/dashboardComponents/Oversikt";
import Profil from "@/components/dashboardComponents/Profil";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

const tabs = [
  {
    href: "/dashboard",
    name: "Oversikt",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: "/vehicles",
    name: "Kjøretøy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: "/favorites",
    name: "Mine Favoritter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
    ),
  },
  {
    href: "/user",
    name: "Profil",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  const [username, setUsername] = useState("Ola Nordmann");

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();

      setUsername(user?.user_metadata.full_name || null);
    }
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen">
      <nav className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-red-500">MaxNitro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{username}</span>
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-5">
        <Tabs
          className="flex flex-row md:flex-col w-full"
          defaultValue="/dashboard"
        >
          {/* Mobile: Left sidebar, Desktop: Top navigation */}
          <TabsList className="flex gap-6 flex-col md:flex-row md:w-full w-fit h-fit">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.name}
                value={tab.href}
                className="justify-start md:justify-center w-full md:w-auto"
              >
                <span className="mr-2">{tab.icon}</span>
                <span className="hidden sm:inline md:inline">{tab.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content area */}
          <div className="flex-1 ml-4 md:ml-0 md:mt-4">
            <TabsContent
              value="/dashboard"
              className="border-2 bg-amber-400 p-4 rounded"
            >
              <Oversikt />
            </TabsContent>

            <TabsContent
              value="/vehicles"
              className="border-2 bg-blue-400 p-4 rounded"
            >
              <Kjøretøy />
            </TabsContent>

            <TabsContent
              value="/favorites"
              className="border-2 bg-green-400 p-4 rounded"
            >
              <Favoritter />
            </TabsContent>

            <TabsContent
              value="/user"
              className="border-2 bg-purple-400 p-4 rounded"
            >
              <Profil />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
