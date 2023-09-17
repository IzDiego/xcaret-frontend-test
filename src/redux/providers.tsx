import { type FunctionComponent } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface IProviderProps {
  children: React.ReactNode;
}

const Providers: FunctionComponent<IProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
