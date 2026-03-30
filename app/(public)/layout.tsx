import { cn } from "@/lib/utils";
import { fredoka } from "@/fonts";
import { Navbar } from "@/components/public/navbar";
import { Footer } from "@/components/public/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={cn("public-theme", fredoka.variable)}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
