import React from "react";

interface EOTGLayoutProps {
  children: React.ReactNode;
}

class EOTGLayout extends React.Component<EOTGLayoutProps> {
  render() {
    return (
      <>
        <div id="eotg-main">
          {React.isValidElement(this.props.children)
            ? React.cloneElement(this.props.children, { ...this.props })
            : this.props.children}
        </div>
      </>
    );
  }
}

export default EOTGLayout;
