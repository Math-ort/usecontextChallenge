import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider} from '../themes/ThemeContext'
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import Button from '../components/Button';
const RoutesApp = () => {
    return (
<ThemeProvider> 
<Router>
        <nav>
                <Link to='/' > Home </Link >
                <Link to='/myjob'>MyJob</Link>
                <Link to='/profile'>Profile</Link>
                <Button></Button>
        </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myjob" element={<MyJob />} />
        <Route path="/profile" element={<Profile />} />
     
    </Routes>
</Router>
</ThemeProvider>
    )
}

export default RoutesApp;
