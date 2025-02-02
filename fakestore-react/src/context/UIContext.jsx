import { useState } from 'react';
import PropTypes from 'prop-types';

export const UIProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <UIContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </UIContext.Provider>
  );
};

UIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
