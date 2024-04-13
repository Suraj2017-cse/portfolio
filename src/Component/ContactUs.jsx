import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormSubmitMsg from "./FormSubmitMsg";

const ContactUs = () => {
const [messageInfo, setMessageInfo] = useState({ show: false, type: '', msg: '' });
const [formData, setFormData] = useState({
name: "",
company: "",
companyUrl: "",
phone: "",
city: "",
email: "",
message: "",
});

// Use effect to handle the timing logic for message visibility
useEffect(() => {
if (messageInfo.show) {
const timer = setTimeout(() => {
setMessageInfo(prev => ({ ...prev, show: false }));
}, 3000); // dismiss message after 5 seconds
return () => clearTimeout(timer); // Cleanup timeout
}
}, [messageInfo.show]); // Depend on messageInfo.show to re-trigger the timer

const onSubmit = async (event) => {
event.preventDefault();
const formDataInput = new FormData(event.target);

formDataInput.append("access_key", "9db3549d-9e83-43f9-a10a-40fccee96393");

try {
const response = await fetch("https://api.web3forms.com/submit", {
method: "POST",
body: formDataInput
});
const data = await response.json();

if (data.success) {
setMessageInfo({ show: true, type: 'success', msg: "Form Submitted Successfully" });
setFormData({
name: "",
company: "",
companyUrl: "",
phone: "",
city: "",
email: "",
message: "",
});
} else {
throw new Error(data.message || "Unknown error occurred");
}
} catch (error) {
console.error("Submission error:", error);
setMessageInfo({ show: true, type: 'error', msg: error.toString() });
}

};

const handleChange = (event) => {
const { name, value } = event.target;
setFormData((prevData) => ({ ...prevData, [name]: value }));
};

return (
<section className="mt-4">
  <h2 className='md:text-7xl mb-4 text-rose-800 uppercase'>Contact Us</h2>

  <Form onSubmit={onSubmit}>

    <Row className='mb-3 md:gap-0 sm:gap-2 max-[639px]:gap-2'>
      {/* Full Name */}
      <Form.Group as={Col} md='6'>
        <Form.Label>Full Name</Form.Label>
        <Form.Control required type='text' placeholder='Full Name' name='name' onChange={handleChange}
          value={formData.name} />
        <Form.Control.Feedback type='invalid'>
          Please Provid a Name!
        </Form.Control.Feedback>
      </Form.Group>

      {/* Company Name */}
      <Form.Group as={Col} md='6'>
        <Form.Label>Company Name</Form.Label>
        <Form.Control required type='text' placeholder='Company Name' name='company' onChange={handleChange}
          value={formData.company} />
        <Form.Control.Feedback type='invalid'>
          Please Provid a Company Name!
        </Form.Control.Feedback>
      </Form.Group>
    </Row>

    <Row className='mb-3 md:gap-0 sm:gap-2 max-[639px]:gap-2'>

      {/* Company URL */}
      <Form.Group as={Col} md='6'>
        <Form.Label>Company URL</Form.Label>
        <Form.Control required type='url' placeholder='https://www.company.com/' name='companyUrl'
          onChange={handleChange} value={formData.companyUrl} />
        <Form.Control.Feedback type='invalid'>
          Please Provid a URL!
        </Form.Control.Feedback>
      </Form.Group>

      {/* Mobile No. */}
      <Form.Group as={Col} md='6'>
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control required type='tel' placeholder='Mobile Number' name='phone' onChange={handleChange}
          value={formData.phone} />
        <Form.Control.Feedback type='invalid'>
          Please Provid a Company Name!
        </Form.Control.Feedback>
      </Form.Group>
    </Row>

    <Row className='mb-3 md:gap-0 sm:gap-2 max-[639px]:gap-2'>
      {/* City */}
      <Form.Group as={Col} md='6'>
        <Form.Label>City</Form.Label>
        <Form.Control type='text' placeholder='City' required name="city" onChange={handleChange}
          value={formData.city} />
        <Form.Control.Feedback type='invalid'>
          Please provide a city.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Email ID */}
      <Form.Group as={Col} md='6' className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='name@email.com' required name="email" onChange={handleChange}
          value={formData.email} />
        <Form.Control.Feedback type='invalid'>
          Please provide a valid Email.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Message */}
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' placeholder='message........' rows={4} required name="message"
          onChange={handleChange} value={formData.message} />
        <Form.Control.Feedback type='invalid'>
          Please provide message.
        </Form.Control.Feedback>
      </Form.Group>
    </Row>

    <Button type='submit' variant="success">Submit</Button>
  </Form>

  {messageInfo.show && (
  <FormSubmitMsg message={messageInfo.msg} show={messageInfo.show} type={messageInfo.type} />
  )}


</section>
);
};

export default ContactUs;