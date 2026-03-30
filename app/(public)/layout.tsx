import { cn } from "@/lib/utils";
import { fredoka } from "@/fonts";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={cn("public-theme", fredoka.variable)}>{children}</main>
  );
}
