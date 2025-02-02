import spinnerGif from '../assets/gifambulancia.gif';
export const LoadingSpinner = () => {
    return (
      <div className="spinner-container d-flex justify-content-center align-items-center">
        <img src={spinnerGif} alt="Loading..." className="spinner-image" />
      </div>
    );
};