import React, { useState } from 'react';
import styled from 'styled-components';
import { FiScissors, FiMic, FiVideo, FiMessageSquare, FiSettings, FiPlus } from 'react-icons/fi';

const SurgeryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SurgeryHeader = styled.div`
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    color: #2563eb;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: #64748b;
    font-size: 16px;
    max-width: 800px;
    line-height: 1.6;
  }
`;

const SurgeryMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
  height: calc(100vh - 200px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const VideoFeed = styled.div`
  background: #1e293b;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  .placeholder {
    text-align: center;
    padding: 20px;
    
    svg {
      font-size: 60px;
      margin-bottom: 20px;
      color: #64748b;
    }
    
    p {
      color: #94a3b8;
    }
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const ControlButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &.active {
    background: #3b82f6;
  }
`;

const ToolsPanel = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const ToolsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    color: #1e293b;
  }
`;

const ToolsList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ToolItem = styled.div`
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 10px;
  background: #f8fafc;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;

  &:hover {
    background: #f1f5f9;
    transform: translateX(5px);
  }

  &.active {
    background: #e0f2fe;
    border-left: 4px solid #3b82f6;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 5px;
    color: #1e293b;
  }

  p {
    font-size: 14px;
    color: #64748b;
  }
`;

const ChatSection = styled.div`
  margin-top: 20px;
  border-top: 1px solid #e2e8f0;
  padding-top: 20px;

  h3 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #1e293b;
  }
`;

const ChatInput = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;

  input {
    flex: 1;
    padding: 12px 15px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    outline: none;
    font-size: 14px;
  }

  button {
    background: #3b82f6;
    color: white;
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const SurgeryAssistant = () => {
  const [activeTool, setActiveTool] = useState(null);
  const [micActive, setMicActive] = useState(false);
  const [videoActive, setVideoActive] = useState(true);

  const tools = [
    {
      id: 1,
      name: 'Procedure Checklist',
      description: 'Step-by-step guide for current surgical procedure'
    },
    {
      id: 2,
      name: 'Patient Vitals',
      description: 'Real-time monitoring of patient vitals'
    },
    {
      id: 3,
      name: 'Medication Guide',
      description: 'Dosages and administration instructions'
    },
    {
      id: 4,
      name: 'Anatomy Reference',
      description: '3D anatomical models for reference'
    },
    {
      id: 5,
      name: 'Instrument Tracker',
      description: 'Track surgical instruments count'
    }
  ];

  return (
    <SurgeryContainer>
      <SurgeryHeader>
        <h1><FiScissors /> Surgery Assistant</h1>
        <p>Real-time support and tools to assist during surgical procedures. Access critical information, communicate with your team, and document the procedure seamlessly.</p>
      </SurgeryHeader>

      <SurgeryMain>
        <VideoFeed>
          <div className="placeholder">
            <FiVideo />
            <p>Live surgical feed will appear here</p>
          </div>
          <Controls>
            <ControlButton 
              className={micActive ? 'active' : ''}
              onClick={() => setMicActive(!micActive)}
            >
              <FiMic />
            </ControlButton>
            <ControlButton 
              className={videoActive ? 'active' : ''}
              onClick={() => setVideoActive(!videoActive)}
            >
              <FiVideo />
            </ControlButton>
            <ControlButton>
              <FiSettings />
            </ControlButton>
          </Controls>
        </VideoFeed>

        <ToolsPanel className="glass">
          <ToolsHeader>
            <h2>Surgical Tools</h2>
            <button className="btn-primary" style={{ padding: '8px 12px' }}>
              <FiPlus /> New
            </button>
          </ToolsHeader>

          <ToolsList>
            {tools.map(tool => (
              <ToolItem 
                key={tool.id}
                className={activeTool === tool.id ? 'active' : ''}
                onClick={() => setActiveTool(tool.id)}
              >
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </ToolItem>
            ))}
          </ToolsList>

          <ChatSection>
            <h3>Team Communication</h3>
            <ChatInput>
              <input type="text" placeholder="Type a message..." />
              <button>
                <FiMessageSquare />
              </button>
            </ChatInput>
          </ChatSection>
        </ToolsPanel>
      </SurgeryMain>
    </SurgeryContainer>
  );
};

export default SurgeryAssistant;