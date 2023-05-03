import { useQuery } from "react-query";
import { api_get2fa } from "../api/users";
import TwoFactorAuth from "../components/TwoFactorComponents";
import { useMainStore } from "../store";

const TwoFactorPage = () => {
  const user = useMainStore((state) => state.user);
  const { isLoading, error, data, refetch } = useQuery(
    ["secret", user?.id],
    () => api_get2fa(user!.id)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: </div>;
  if (!data) return <div>An error has occurred: </div>;

  return <TwoFactorAuth secret={data} refetch={refetch} />;
};

export default TwoFactorPage;
