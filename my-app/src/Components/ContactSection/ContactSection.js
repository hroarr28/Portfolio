import "./ContactSection.css";

export default function ContactSection() {
  return (
    <div className='ContactContainer'>
      <div className='ContactTitle'>
        <h1>
          <span style={{color: "#00FFFF"}}>.03&nbsp; </span>CONTACT
        </h1>
      </div>
      <div className='ContactSection'>
        <div className='ContactSectionText'>
          <p className='ContactStory'>
            Please feel free to reach out by submitting the form below. I will
            make sure to get back to you as soon as possible. Looking forward to
            connecting with you!
          </p>
          <h2 className='LetsConnect'>Let's Connect</h2>
          <div className='ContactForm'>
            <form
              name='contact'
              method='POST'
              data-netlify='true'
              data-netlify-recaptcha='true'
            >
              <input type='hidden' name='form-name' value='contact' />
              <div className='FormRow'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Your Name'
                />
              </div>
              <div className='FormRow'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Your Email'
                />
              </div>
              <div className='FormRow'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Enter Your Message'
                ></textarea>
              </div>
              <div className='FormRow'>
                <input type='submit' value='Submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
