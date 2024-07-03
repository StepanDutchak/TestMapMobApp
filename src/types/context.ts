import {IUserRoute} from './store';

export type IAppStateContext = {
  selectedRoute: IUserRoute;
  setSelectedRoute: (a: IUserRoute) => void;
};
