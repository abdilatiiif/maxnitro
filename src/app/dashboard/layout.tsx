import { redirect } from "next/navigation";
import { getUser } from "@/actions/AUTH/getUser";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/auth/login");
  }

  console.log(user);

  return (
    <div className="min-h-screen">
      <nav className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-red-500">MaxNitro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                {user.user_metadata.full_name}
              </span>
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
