import { MantineProvider, ColorSchemeProvider, NormalizeCSS } from "@mantine/core";
import Dashboard from "./pages/Dashboard";
import { useLocalStorageValue } from "@mantine/hooks";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <NormalizeCSS />
        <Dashboard />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
