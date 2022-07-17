import { NavbarEnum } from "../enums/navbar.enum";

export interface NavbarItemInterface {
  type: NavbarEnum;
  link: string;
  icon: string;
  iconActivated: string;
}
