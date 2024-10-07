import { Link } from "@remix-run/react";

export default function App() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1>Look who&apos;s in the app</h1>
      <Link className="text-blue-500 hover:underline" to="/">
        Time to dip ↩
      </Link>
    </div>
  );
}
