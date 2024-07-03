export interface ISideSeat {
  id: number;
  seatNumber: string;
  isAvailable: boolean;
}

export interface ISeat {
  leftSide: ISideSeat[];
  rightSide: ISideSeat[];
}

export interface IUserRoute {
  id: number;
  title: string;
  subtitle: string;
  distance: string;
  seat: ISeat;
}
