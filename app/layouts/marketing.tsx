import { Outlet } from "@remix-run/react";

export default function MarketingLayout() {
  return (
    <div className="flex">
      <nav className="w-64 bg-gray-100 h-screen p-4">
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="block py-2 px-4 text-blue-600 hover:bg-blue-100 rounded"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block py-2 px-4 text-blue-600 hover:bg-blue-100 rounded"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/app"
              className="block py-2 px-4 text-blue-600 hover:bg-blue-100 rounded"
            >
              App
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
