"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  }

  return (
    <div>
      <h1>Basic Routing</h1> <br />

      {/* Linking Way Routing */}
      <Link href="/login">Go to Login Page</Link> <br />
      <Link href="/about">Go to About Page</Link> <br />

      {/* Navigation Way Routing */}
      <button onClick={()=>router.push("/login")}>Goto Login Page</button><br />
      <button onClick={()=>navigate("/about")}>Goto About Page</button>

    </div>
  );
}
