import React, { useState } from 'react'

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      <div className='tabs'>
        <Tab num={0} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab num={1} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab num={2} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
        <TabContent item={content[activeTab]} />
    </div>
  )
}

function Tab({ num, activeTab, setActiveTab }) {
  return (
    <button className={activeTab === num ? "tab active" : "tab"} onClick={()=>setActiveTab(num)}>
      Tab {num + 1}
    </button>
  )
}

function TabContent({item}) {
  const [showDetails, setShowDetails] = useState(true);
  console.log(item)
  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>
      </div>

      <div className="tab-undo">
        <button>Undo</button>
        <button>Undo in 2s</button>
      </div>
    </div>
  )
}