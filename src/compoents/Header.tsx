import { ReactNode } from 'react';
import { BsFillCaretRightFill, BsSearch } from 'react-icons/bs';

type HeaderProps = {};
const Header = ({}: HeaderProps) => {
  return (
    <>
      <div className="p-2 px-5  flex justify-start items-center border-b-2 border-gray-500">
        <div className="flex justify-center items-center ">
          <div className="w-6 h-4 bg-red-500 flex justify-center items-center rounded-md">
            <BsFillCaretRightFill size={13} />
          </div>
          <p className="text-white font-bold ml-1 ">Youtube</p>
        </div>
        <form className="flex ml-60 w-full max-w-2xl text-slate-50 ">
          <input
            className="w-full  bg-black placeholder: p-1 focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <button type="submit">
            <div className="w-8 h-8 bg-gray-600 flex justify-center items-center">
              <BsSearch />
            </div>
          </button>
        </form>
      </div>
      {/* <hr className="bg-slate-500" /> */}
    </>
  );
};

export default Header;
