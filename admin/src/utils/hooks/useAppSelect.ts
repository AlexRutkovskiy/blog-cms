import { useSelector } from "react-redux";
import type { AppRootState } from "@store/index";

export const useAppSelect = useSelector.withTypes<AppRootState>();
