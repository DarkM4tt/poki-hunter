import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchPage from './pages/SearchPage'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/search/:search" element={<SearchPage />} />
            <Route path="*" element={<Navigate to="/search" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  )
}

export default App