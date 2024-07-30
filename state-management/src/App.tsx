import { useUserState } from './manageState/user';
import UserCard from './components/UserCard';


export default function App() {
  const { setData, resetData } = useUserState();

  return (
    <div className='flex flex-col justify-center items-center h-[90vh]'>
      <div className='flex flex-col gap-y-2'>
      <UserCard />
        <input className='border-2 border-black' onChange={(e) => setData({ name: e.target.value })} />
        <button onClick={resetData}>Reset</button>
      </div>
    </div>
  );
}