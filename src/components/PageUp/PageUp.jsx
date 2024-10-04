import react from "react";

function PageUp() {
  //creating function outside of return to keep code readibility
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    //using same classNames as buttons from Pagination component to maintain formatting
    <div className="flex items-center justify-center gap-12">
      <button className="focus:outline-none disabled:opacity-30" onClick={top}>
        Top
      </button>
    </div>
  );
}

export default PageUp;
