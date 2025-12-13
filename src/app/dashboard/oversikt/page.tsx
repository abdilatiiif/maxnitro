function pageOversikt() {
  return (
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
                    <dd className="text-lg font-medium text-gray-900">3</dd>
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
                    <dd className="text-lg font-medium text-gray-900">12</dd>
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
              <p className="text-sm text-gray-500">Book private jetfly</p>
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
              <p className="text-sm text-gray-500">Administrer reservasjoner</p>
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
                <div className="text-sm text-gray-500">2 timer siden</div>
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
                    <p className="text-sm text-gray-500">Fullført reise</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">1 dag siden</div>
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
                <div className="text-sm text-gray-500">3 dager siden</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
export default pageOversikt;
