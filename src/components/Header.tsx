import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsFillCaretRightFill, BsSearch } from 'react-icons/bs';
type HeaderProps = {};
const Header = ({}: HeaderProps) => {
  console.log('Header rendering...');
  const [text, setText] = useState<string>('');
  const preKeywrod = useParams().keyword;
  useEffect(() => {
    // when page moved
    if (text !== preKeywrod) {
      console.log('effect called');
      setText(preKeywrod ?? '');
    }
  }, [preKeywrod]);
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    navigate(`/videos/${text}`);
  };
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleYoutubeClick = () => {
    // setText('');
    navigate('/');
  };
  return (
    <>
      <div className="h-16 p-3 flex justify-between items-center ">
        <div className="flex items-center" onClick={handleYoutubeClick}>
          <div className="w-7 h-5  bg-strong-red rounded-md flex justify-center items-center">
            <BsFillCaretRightFill />
          </div>
          <p className="text-white text-2xl font-bold ml-1">Youtube</p>
        </div>
        <form
          className="text-white flex basis-2/3 w-full"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-black placeholder:p-1 w-2/3 h-9 focus:outline-none border-none"
            placeholder="Search..."
            type="text"
            value={text}
            onChange={handleTextChange}
          />
          <button
            className="w-10 bg-zinc-500 flex justify-center items-center"
            type="submit"
          >
            <BsSearch />
          </button>
        </form>
      </div>
      <div className="w-full h-px  bg-zinc-500 mb-3 box"></div>
    </>
  );
};

export default Header;
