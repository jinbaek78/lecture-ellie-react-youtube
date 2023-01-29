import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import { BsFillCaretRightFill, BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {};
const Header = ({}: HeaderProps) => {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.trim();
    if (text.length === 0) {
      return;
    }

    setQuery(text);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim().length === 0) {
      return;
    }

    navigate(`/videos/${query}`);
  };
  const handleYoutubeClick = () => {
    navigate('/');
  };
  return (
    <>
      <div className="p-2 px-5  flex justify-start items-center border-b-2 border-gray-500">
        <div
          className="flex justify-center items-center "
          onClick={handleYoutubeClick}
        >
          <div className="w-6 h-4 bg-red-500 flex justify-center items-center rounded-md">
            <BsFillCaretRightFill size={13} />
          </div>
          <p className="text-white font-bold ml-1 ">Youtube</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex ml-60 w-full max-w-2xl text-slate-50 "
        >
          <input
            onChange={handleChange}
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
    </>
  );
};

export default Header;
