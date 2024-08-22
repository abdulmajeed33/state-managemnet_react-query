import { useUserState } from "../manageState/user";

export default function UserName() {
    const { data } = useUserState();
    return (
      <>
        <h1 className="text-xl font-bol">{data?.name}</h1>
      </>
    );
  }