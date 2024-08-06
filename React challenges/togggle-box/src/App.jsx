import ToggleBox from "./ToggleBox"

function App() {
  return (
    <div>
      <ToggleBox
        content="This is the content of the first box."
        buttonText="Toggle Box 1"
        defaultOpen={true}
      />
      <ToggleBox
        content="This is the content of the second box."
        buttonText="Toggle Box 2"
        defaultOpen={false}
      />
    </div>
  )
}

export default App