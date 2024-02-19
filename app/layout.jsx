import "@styles/global.css";

import Navigation from "../components/navigation.jsx";

export const metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies"
  }
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

{/* <RootLayout>
  { children }
</RootLayout> */}