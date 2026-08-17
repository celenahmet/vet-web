import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <SEO 
        title="404 Not Found" 
        description="The page you are looking for doesn't exist or has been moved." 
      />
      <div className="container text-center">
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p className="subtitle mx-auto">
          Oops! It looks like the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary mt-24 return-btn">
          <ArrowLeft size={18} /> Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
