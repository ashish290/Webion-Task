import React, { useState } from "react";
import "./Form.css";
import {  DetailsProps } from "../..";


const initialForm : DetailsProps = {
  name: "",
  role: "",
  email: "",
  phone: "",
  course: "",
  status: "Unplaced",
};


function Form({studentDetails ,setstudentDetails} : {studentDetails : DetailsProps[], setstudentDetails : any}) {
  const [form, setForm] = useState<DetailsProps>(initialForm);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setstudentDetails((prev : DetailsProps[])   => [...prev, form])
    setForm(initialForm);
  };

  const handleDelete = (index: number) => {
    const updatedDetails = studentDetails.filter((_, i) => i !== index);
    setstudentDetails(updatedDetails);
  };

  return (
    <>
      <div className="form-details">
        <div className="form-container">
          <div className="form-heading">
            <h1>Fill This Form</h1>
          </div>
          <div className="formInputs">
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-input">
                <label htmlFor="role">Role:</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Enter your role"
                  value={form.role}
                  onChange={handleChange}
                />
              </div>

              <div className="form-input">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-input">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-input">
                <label htmlFor="course">Course:</label>
                <select
                  id="course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                >
                  <option value="">Select a course</option>
                  <option value="React">React Basic</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="JavaScript Fundamentals">
                    JavaScript Fundamentals
                  </option>
                  <option value="Advance CSS">Advance CSS</option>
                  <option value="Backend Development">
                    Backend Development
                  </option>
                </select>
              </div>

              <div className="form-input">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="Unplaced">Unplaced</option>
                  <option value="Placed">Placed</option>
                </select>
              </div>

              <div className="button-container">
                <button type="submit" className="Submit-Btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="display">
          <ul>
            {studentDetails.map((detail : DetailsProps, index : number) => (
              <li key={index} data-initial={detail.name.charAt(0)}>
                  <div className="name">
                    <div className="img-icon">
                      
                    </div>
                    {detail.name}
                    </div>
                <p>
                  <strong>Role:</strong> {detail.role}
                </p>
                <p>
                  <strong>Email:</strong> {detail.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {detail.phone}
                </p>
                <p>
                  <strong>Course:</strong> {detail.course}
                </p>
                <p>
                  <strong>Status:</strong> {detail.status}
                </p>
                <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}

export default Form;
