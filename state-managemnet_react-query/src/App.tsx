import UserName from './components/UserName';
import UserInput from './components/UserInput';


export default function App() {

  return (
    <div className='flex flex-col justify-center items-center h-[90vh]'>
      <div className='flex flex-col gap-y-2'>
        <UserName />
        <UserInput />
      </div>
    </div>
  );
}