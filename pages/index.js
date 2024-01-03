import MainContainer from "@/components/MainContainer";
import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  console.log(resolvedTheme, theme, setTheme);
  return (
    <main className="mx-2 flex h-screen items-center justify-center">
      <button
      className="absolute top-10"
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
      <MainContainer />
    </main>
  );
}
