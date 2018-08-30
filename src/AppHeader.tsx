import * as React from 'react';

interface Props extends Injection {
  title: string;
}

interface State {}

class AppHeader extends React.Component<Props, State> {
  render() {
    const {} = this.props;
    const {} = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>{this.props.title}</h1>
        </div>
        <div className="col-md-6 header-right">
          <button type="button" className="btn btn-primary">
            创建笔记
          </button>
        </div>
      </div>
    );
  }
}

interface Injection {
  // router
}

export default AppHeader;
