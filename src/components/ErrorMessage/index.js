import './styles.css';

function ErrorMessage({ message }) {
  return (
    <div>
      <span className="error-message">{message}</span>
    </div>
  );
}

export default ErrorMessage;
