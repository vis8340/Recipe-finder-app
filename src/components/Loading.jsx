import spinner from '../assets/spinner.svg'

const Loading = () => {
    return <div> 
      <img className="spinner" src={spinner} alt="spinner" />
      </div>;
  };
  
  export default Loading;