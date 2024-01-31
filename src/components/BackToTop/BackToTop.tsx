const BackToTop = () => {
  return (
    <a
      href="#"
      id="back-to-top"
      className="back-to-top fixed text-lg rounded-xl z-10 bottom-5 end-5 h-8 w-8 text-center bg-blue-500 hover:bg-blue-600 text-white leading-9 justify-center items-center duration-500 flex"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-[14px] w-[14px] stroke-[3]"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </a>
  );
};

export default BackToTop;
