import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchPage from './pages/SearchPage'

function App() {

  return (
    <div>
    <BrowserRouter>
				<Routes>
					<Route exact path="/search" element={<SearchPage />}/>
					<Route exact path="/search/:search" element={<SearchPage />}/>
					<Route path="*" element={<Navigate to="/search"/>} />
				</Routes>
		</BrowserRouter>
    </div>
  )
}

export default App
