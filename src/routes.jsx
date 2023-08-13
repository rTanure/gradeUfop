import { BrowserRouter, Route, Routes } from "react-router-dom"

import StandartCurriculum from "./pages/StandartCurriculum"

export default function RoutedPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={ <StandartCurriculum /> }/>
            </Routes>
        </BrowserRouter>
    )
}