import { useAppSelect } from "./useAppSelect";

export const useIsAuth = () => {
  const { user, token } = useAppSelect((state) => state.auth);
  return user && token;
};
