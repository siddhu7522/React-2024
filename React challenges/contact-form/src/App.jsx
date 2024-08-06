import { useState } from "react"


function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] =useState("")
  const [queryType, setQueryType] =useState("")
  const [isValidated, setIsValidated] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity()==false) {
      setIsValidated(false)
    }
    setIsValidated(true)
  }
  return (
    <form className={`needs-validation ${isValidated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <label htmlFor={firstName} className="form-label">First Name</label>
          <input id={firstName} required value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" />
          <div className="invalid-feedback">
            Please provide a valid first name.
          </div>
        </div>
        <div className="col">
        <label htmlFor={lastName} className="form-label">Last Name</label>
          <input id={lastName} required value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" />
          <div className="invalid-feedback">
            Please provide a valid last name.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <label htmlFor={email} className="form-label">Email</label>
        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
        <div className="invalid-feedback">
            Please provide a valid email.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={queryType === "General Enquiry"}
              onChange={(e) => setQueryType(e.target.value)}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={queryType === "Support Request"}
              onChange={(e) => queryType(e.target.value)}
              required
            />
            Female
          </label>
       </div>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  )
}

export default App
