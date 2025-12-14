"use client";

import { getUser } from "@/actions/AUTH/getUser";
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
              <div className="min-h-screen bg-gray-50">
                {/* Main Content */}
                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                Aktive Reservasjoner
                              </dt>
                              <dd className="text-lg font-medium text-gray-900">
                                3
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 rounded-md"></div>
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                Fullførte Reiser
                              </dt>
                              <dd className="text-lg font-medium text-gray-900">
                                12
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-yellow-500 rounded-md"></div>
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                Total Brukt
                              </dt>
                              <dd className="text-lg font-medium text-gray-900">
                                125,000 kr
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <div className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-md mb-4">
                          <div className="w-6 h-6 bg-red-500 rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Sportsbiler
                        </h3>
                        <p className="text-sm text-gray-500">
                          Se tilgjengelige sportsbiler
                        </p>
                      </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <div className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md mb-4">
                          <div className="w-6 h-6 bg-blue-500 rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Yachter
                        </h3>
                        <p className="text-sm text-gray-500">
                          Utforsk luksuriøse yachter
                        </p>
                      </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <div className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-md mb-4">
                          <div className="w-6 h-6 bg-purple-500 rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Private Fly
                        </h3>
                        <p className="text-sm text-gray-500">
                          Book private jetfly
                        </p>
                      </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <div className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-md mb-4">
                          <div className="w-6 h-6 bg-green-500 rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Mine Bookinger
                        </h3>
                        <p className="text-sm text-gray-500">
                          Administrer reservasjoner
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Nylig Aktivitet
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Dine siste reservasjoner og aktiviteter
                      </p>
                    </div>
                    <ul className="divide-y divide-gray-200">
                      <li className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                              <div className="w-5 h-5 bg-red-500 rounded"></div>
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                Ferrari 488 Spider
                              </p>
                              <p className="text-sm text-gray-500">
                                Booket for 15. desember
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            2 timer siden
                          </div>
                        </div>
                      </li>
                      <li className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <div className="w-5 h-5 bg-blue-500 rounded"></div>
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                Sunseeker Yacht
                              </p>
                              <p className="text-sm text-gray-500">
                                Fullført reise
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            1 dag siden
                          </div>
                        </div>
                      </li>
                      <li className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <div className="w-5 h-5 bg-purple-500 rounded"></div>
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                Gulfstream G650
                              </p>
                              <p className="text-sm text-gray-500">
                                Kansellert reservasjon
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            3 dager siden
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </main>
              </div>
            </TabsContent>

            <TabsContent
              value="/vehicles"
              className="border-2 bg-blue-400 p-4 rounded"
            >
              <h2 className="text-xl font-bold">Kjøretøy</h2>
              <p>Kjøretøy innhold her...</p>
            </TabsContent>

            <TabsContent
              value="/favorites"
              className="border-2 bg-green-400 p-4 rounded"
            >
              <h2 className="text-xl font-bold">Mine Favoritter</h2>
              <p>Favoritter innhold her...</p>
            </TabsContent>

            <TabsContent
              value="/user"
              className="border-2 bg-purple-400 p-4 rounded"
            >
              <h2 className="text-xl font-bold">Profil</h2>
              <p>Bruker profil innhold her...</p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
