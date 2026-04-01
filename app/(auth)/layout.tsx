import { cn } from "@/lib/utils";
import { fredoka } from "@/fonts";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={cn(
        "public-theme flex justify-center items-center min-h-screen",
        fredoka.variable,
      )}>
      {children}
    </main>
  );
}
