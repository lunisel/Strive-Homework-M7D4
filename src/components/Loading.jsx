import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="spinner-cont">
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
};

export default Loading;
