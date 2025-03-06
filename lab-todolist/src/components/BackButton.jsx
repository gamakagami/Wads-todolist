import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };
    
    return ( 

        <button 
        onClick={handleGoBack}
        className="mb-4 text-blue-500 hover:text-blue-700 transition-colors"
      >
        Back
      </button>
     );
}
 
export default BackButton;