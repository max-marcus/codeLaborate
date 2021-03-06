import React from 'react';
import Header from './header.jsx';

const Dashboard = (props) => {
  const { changeView } = props;

  return (
    <div>
      <Header changeView={changeView} />
      <section id="main">
        <div className="container">
          <div className="content">
            <h2>Projects</h2>
            <p className="no-projects">
              You currently have no projects.
              <a
                href="#"
                onClick={() => { changeView('addProj'); }}
              >Create a project</a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

Dashboard.propTypes = {
  changeView: React.PropTypes.func.isRequired,
};

export default Dashboard;
