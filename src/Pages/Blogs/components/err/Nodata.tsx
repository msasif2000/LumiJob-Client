import { useNavigate } from 'react-router-dom';

const Nodata = () => {
  const navigate = useNavigate();

  

  const goBack = () => {
    navigate('/insights');
    
  };

  return (
    <div className="hero h-[700px] ">
      <div className="hero-content text-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Article Not Found</h1>
          <p>We're really sorry for this. Instead, be sure that our team is working on it.</p>

          <button onClick={goBack} className="btn btn-primary">
            lets go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nodata;
