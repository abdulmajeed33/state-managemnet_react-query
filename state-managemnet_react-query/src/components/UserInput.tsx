import { useUserState } from "../manageState/user";

export default function UserInput() {
  const { setData, resetData } = useUserState();

  return (
    <>
      <input className='border-2 border-black' onChange={(e) => setData({ name: e.target.value })} />
      <button onClick={resetData}>Reset</button>
    </>
  )
}