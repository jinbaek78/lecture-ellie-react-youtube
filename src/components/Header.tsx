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
    <div className="flex">
      <div className="flex" onClick={handleYoutubeClick}>
        <div className="w-7 h-5  bg-strong-red rounded-md flex justify-center items-center">
          <BsFillCaretRightFill />
        </div>
        <p>Youtube</p>
      </div>
      <form className="text-white flex" onSubmit={handleSubmit}>
        <input
          className="bg-black placeholder:p-1"
          placeholder="Search..."
          type="text"
          value={text}
          onChange={handleTextChange}
        />
        <button
          className="w-5 bg-gray-500 flex justify-center items-center"
          type="submit"
        >
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default Header;
