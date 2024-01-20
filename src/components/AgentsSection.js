import React from 'react';
import '../App.css'; 

const AgentsSection = ({ agents }) => {
  return (
    <section className="section-agents section-t8">
      <div className="container">
        {/* Your existing AgentsSection JSX */}
        {agents.map(agent => (
          <div key={agent.id} className="col-md-4">
            <div className="card-box-d">
              {/* Agent details */}
              <h3>{agent.name}</h3>
              <p>{agent.bio}</p>
            </div>
          </div>
        ))}
        {/* End of Agent items */}
      </div>
    </section>
  );
};

export default AgentsSection;
