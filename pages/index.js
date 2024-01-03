import MainContainer from "@/components/MainContainer";
import { useTheme } from "next-themes";

export default function Home() {
  const [resolvedTheme, theme, setTheme] = useTheme();
  return (
    <main className="mx-2 flex h-screen items-center justify-center">
      <button
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light");
        }}
      ></button>
      <MainContainer />
    </main>
  );
}
