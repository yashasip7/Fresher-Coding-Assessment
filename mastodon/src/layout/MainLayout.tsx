import { Outlet } from "react-router-dom"
import { RootLayout } from "./RootLayout"

export const MainLayout = (): React.ReactElement => {
    return <RootLayout>
        <Outlet />
    </RootLayout>
}
