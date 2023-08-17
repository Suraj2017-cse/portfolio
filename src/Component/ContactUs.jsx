import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ContactUs = ({ links }) => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    companyUrl: "",
    phone: "",
    city: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => alert("Form successfully submitted"))
    .catch((error) => alert(error));
    }
    setValidated(true);

     
};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section
      className={links === 7 ? "mt-4" : "show md:hidden sm:block sm:mt-4"}>
      <h2 className='md:text-7xl mb-4 text-rose-800 uppercase'>Contact Us</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit} name="contact" method="POST" data-netlify='true'>
        <Row className='mb-3'>
          {/* Full Name  */}
          <Form.Group as={Col} md='6'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Full Name'
              name='name'
              onChange={handleChange}
              value={formData.name}
            />
            <Form.Control.Feedback type='invalid'>
              Please Provid a Name!
            </Form.Control.Feedback>
          </Form.Group>

          {/* Company Name  */}
          <Form.Group as={Col} md='6'>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Company Name'
              name='company'
              onChange={handleChange}
              value={formData.company}
            />
            <Form.Control.Feedback type='invalid'>
              Please Provid a Company Name!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

         <Row className='mb-3'>

          {/* Company URL  */}
          <Form.Group as={Col} md='6'>
            <Form.Label>Company URL</Form.Label>
            <Form.Control
              required
              type='url'
              placeholder='https://www.company.com/'
              name='companyUrl'
              onChange={handleChange}
              value={formData.companyUrl}
            />
            <Form.Control.Feedback type='invalid'>
              Please Provid a URL!
            </Form.Control.Feedback>
          </Form.Group>

          {/* Mobile No.  */}
          <Form.Group as={Col} md='6'>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              required
              type='tel'
              placeholder='Mobile Number'
              name='phone'
              onChange={handleChange}
              value={formData.phone}
            />
            <Form.Control.Feedback type='invalid'>
              Please Provid a Company Name!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          {/* City  */}
          <Form.Group as={Col} md='6'>
            <Form.Label>City</Form.Label>
            <Form.Control type='text' placeholder='City' required name="city"
            onChange={handleChange}
            value={formData.city} />
            <Form.Control.Feedback type='invalid'>
              Please provide a city.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email ID */}
          <Form.Group
            as={Col}
            md='6'
            className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='name@email.com' required name="email"
            onChange={handleChange}
            value={formData.email} />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Message */}
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as='textarea'
              placeholder='message........'
              rows={4}
              required
              name="message"
            onChange={handleChange}
            value={formData.message}
            />
            <Form.Control.Feedback type='invalid'>
              Please provide message.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type='submit' variant="success">Submit</Button>
      </Form>

    </section>
  );
};

export default ContactUs;
