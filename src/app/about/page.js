"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1><br />
      <Link href="/">Goto Home Page</Link> <br />
      <button onClick={()=>router.push("/about/aboutStudent")}>About Student </button>
    </div>
  )
}
