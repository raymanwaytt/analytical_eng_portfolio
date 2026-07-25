import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950">
      <HashLoader color="#14a394" speedMultiplier={2} size={64} />
    </div>
  );
};

export default Loading;
