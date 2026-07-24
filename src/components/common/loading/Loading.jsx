const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-void">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 animate-ping rounded-full bg-signal" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist">
          Initializing
        </span>
      </div>
      <div className="h-px w-40 overflow-hidden bg-line">
        <span className="block h-full w-1/3 animate-[loadbar_1.1s_ease-in-out_infinite] bg-signal" />
      </div>
      <style>{`@keyframes loadbar{0%{transform:translateX(-120%)}100%{transform:translateX(320%)}}`}</style>
    </div>
  );
};

export default Loading;
