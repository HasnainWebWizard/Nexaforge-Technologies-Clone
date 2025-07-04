function BtnTwo({ name, className, href }) {
  return (
    <a
      className={`text-[#2B297E] border-2 border-[#E4E4E4] hover:text-white hover:bg-[#2B297E]
        font-bold text-sm py-2 lg:py-2 px-4 lg:px-7 rounded flex justify-center items-center 
        cursor-pointer ${className}`}
        href={href}
    >
      {name}
      <span className="material-symbols-outlined text-2xl cursor-pointer ml-2">
        arrow_forward
      </span>
    </a>
  );
}

export default BtnTwo;
