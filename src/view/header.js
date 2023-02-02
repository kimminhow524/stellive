import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";

const { Header } = Layout;

export const AppHeader = () => {
  return (
    <Header className="app-header">
      <div className="app-header__logo-search-section">
        <div className="app-header__logo">
          <Link to="/">aaa</Link>
        </div>
      </div>
    </Header>
  );
};
