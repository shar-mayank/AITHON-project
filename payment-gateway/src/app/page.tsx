import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* Add the Button component here */}
      <Button asChild>
        <Link href="https://ui.shadcn.com/docs/components/button">Login</Link>
      </Button>

    </main>
  );
}
