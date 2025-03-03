import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router"
import Basic from "./basic/index.tsx"
import PageLevel from "./page-level/index.tsx"
import DynamicSize from "./dynamic-size/index.tsx"
import TanstackQuery from "./tanstack-query/index.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="basic" element={<Basic />} />
          <Route path="page-level" element={<PageLevel />} />
          <Route path="dynamic-size" element={<DynamicSize />} />
          <Route path="tanstack-query" element={<TanstackQuery />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
