export type MenuItem = {
  title: string;
  href: string;
};

export type Menu = MenuItem[];

export enum HamburgerVariant {
  Open = 'open',
  Close = 'close',
}

export type HamburgerProps = {
  variant: HamburgerVariant;
  onClick: () => void;
};
