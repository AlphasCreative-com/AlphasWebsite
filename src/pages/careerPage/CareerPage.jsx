import React, { useState } from "react";
import Hero from "../../components/Careerhero/Hero";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your application has been submitted!");
  };

  const jobOpenings = [
    {
      title: "Software Engineer",
      location: "New York, NY",
      description: "We are looking for a skilled software engineer with experience in React and Node.js.",
    },
    {
      title: "Data Analyst",
      location: "Remote",
      description: "Seeking a data analyst with expertise in SQL and Python for business intelligence projects.",
    },
    {
      title: "Product Manager",
      location: "San Francisco, CA",
      description: "We need a product manager with experience in agile methodologies and software development lifecycle.",
    },
  ];

  return (
    <div>
        <Hero />
  
    <div className="mx-auto max-w-5xl py-16 space-y-6">
     
      <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>
      <p className="text-center text-gray-600 mb-6">We are always looking for talented individuals. Submit your CV below.</p>
      
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Available Positions</h2>
        {jobOpenings.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-gray-800 mt-2">{job.description}</p>
          </div>
        ))}
      </div>
      
      <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6 text-center">Submit Your Application</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Resume (PDF/DOC)</label>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit Application</button>
      </form>
    </div>
    </div>
  );
};

export default CareerPage;
