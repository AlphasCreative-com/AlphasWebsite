import React from 'react'
import Contact from "../../components/Contact/Contact";
import usePageTitle from "../../hooks/usePageTitle";

function ContactPage() {
  usePageTitle("Contact");
  return (
    <div>
      <Contact/>
    </div>
  )
}

export default ContactPage