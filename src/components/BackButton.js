import { useHistory } from "react-router-dom";

export default function BackButton() {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="em_side_right">
      <span
          className="rounded-circle d-flex align-items-center text-decoration-none"
          onClick={goBack}
      >
        <i className="tio-chevron_left size-24 color-text"></i>
        <span className="color-text size-14">Back</span>
      </span>
        </div>
    );
}
