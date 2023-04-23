import React, { PropsWithChildren } from 'react';

const Layout = (props: PropsWithChildren) => {
  return <main>{props.children}</main>;
};

export default Layout;
