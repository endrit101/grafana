import React, { FC } from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

// No need for LoginLogo
const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  // return <img className={className} src="public/img/finvezt-logo.png" alt="Grafana" />;
  return <img src="public/img/finvezt-logo-300.png" alt="Finvezt" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  // we have only one theme
  // const theme = useTheme();
  // background: url(public/img/login_background_${theme.isDark ? 'dark' : 'light'}.svg);
  const background = css`
    background: url(public/img/black_background.jpg);
    background-size: cover;
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/finvezt_icon.png" alt="Grafana" />;
};

const LoginBoxBackground = () => {
  const theme = useTheme();
  return css`
    background: ${theme.isLight ? 'rgba(6, 30, 200, 0.1 )' : 'rgba(18, 28, 41, 0.65)'};
    background-size: cover;
  `;
};

export class Branding {
  // Remove LoginLogo
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = 'Finvezt';
  // static LoginTitle = 'Welcome to Finvezt';
}
