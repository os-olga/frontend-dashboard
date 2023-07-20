export type SidenavProps = {
  links?: { id: number; text: string; url: string; icon?: string }[];
  actions?: { id: number; text: string; url: string; icon?: string }[];
  className?: string;
  style?: React.CSSProperties;
};
