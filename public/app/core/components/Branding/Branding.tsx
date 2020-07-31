import React, { FC } from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  // return <img className={className}/>;
  return <img className={className} src="public/img/finvezt-logo.png" alt="Finevzt" />;
};

// background: url(public/img/login_background_${theme.isDark ? 'dark' : 'light'}.svg);
const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  const background = css`
    background: url(public/img/finevzt.png);
    background-size: cover;
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  // return <img className={className}/>;
  return <img className={className} src="public/img/finvezt-logo.png" alt="Finevzt" />;
};

const LoginBoxBackground = () => {
  const theme = useTheme();
  return css`
    background: ${theme.isLight ? 'rgba(6, 30, 200, 0.1 )' : 'rgba(18, 28, 41, 0.65)'};
    background-size: cover;
  `;
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = 'Finevzt';
  // static LoginTitle = 'Welcome to Finevzt';
  // static GetLoginSubTitle = () => {
  //   const slogans = [
  //     "Don't get in the way of the data",
  //     'Your single pane of glass',
  //     'Built better together',
  //     'Democratising data',
  //   ];
  //   const count = slogans.length;
  //   return slogans[Math.floor(Math.random() * count)];
  // };
}
