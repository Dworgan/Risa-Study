import Logo from "./components/Logo";
import Navigation from "./components/navigation";

export const metadata = {
  title: "The Wild Oasis",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
