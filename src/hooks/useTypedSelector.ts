import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers";

// custom hook to use Selector with types
export const useTypedSelector: TypedUseSelectorHook<RootState>  = useSelector