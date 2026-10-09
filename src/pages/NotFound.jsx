import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '../components/ui/index.jsx'

export default function NotFound() { const navigate = useNavigate(); return <div className="not-found"><div className="not-found-code">404</div><div className="eyebrow">PAGE NOT FOUND</div><h1>Well, this is awkward.</h1><p>The page you're looking for doesn't exist or may have moved.</p><div><Button variant="secondary" onClick={() => navigate(-1)}><ArrowLeft size={16}/> Go back</Button><Button onClick={() => navigate('/')}><Home size={16}/> Back to overview</Button></div></div> }
