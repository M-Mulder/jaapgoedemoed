export const metadata = {
  title: 'Contact | Jaap Goedemoed',
  description: 'Get in touch with artist Jaap Goedemoed.',
};

export default function ContactPage() {
  return (
    <div className="container-narrow py-12 md:py-20">
      <h1 className="page-title">Contact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Contact Information */}
        <section>
          <h2 className="section-title">Contact Information</h2>
          
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-lg font-serif text-text mb-2">Email</h3>
              <p className="text-text flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:jaapgoedemoed@gmail.com" className="hover:text-accent">jaapgoedemoed@gmail.com</a>
              </p>
            </div>
            
            <div className="prose prose-invert">
              <p>
                You can contact me directly via email for inquiries about artworks, commissions, or any other questions. 
                I'll try to respond to your message as soon as possible.
              </p>
              <p>
                If you prefer to use the contact form, please fill out the fields on the right, and I'll get back to you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section>
          <h2 className="section-title">Send a Message</h2>
          
          <div className="bg-background-light border border-border p-8 rounded-lg">
            <div className="space-y-6">
              {/* Form fields */}
              <div>
                <label className="block text-text mb-2 font-serif">Name</label>
                <input 
                  type="text"
                  className="w-full h-12 bg-background border border-border rounded-md px-4 text-text"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-text mb-2 font-serif">Email</label>
                <input 
                  type="email"
                  className="w-full h-12 bg-background border border-border rounded-md px-4 text-text"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label className="block text-text mb-2 font-serif">Subject</label>
                <input 
                  type="text"
                  className="w-full h-12 bg-background border border-border rounded-md px-4 text-text"
                  placeholder="Message subject"
                />
              </div>
              
              <div>
                <label className="block text-text mb-2 font-serif">Message</label>
                <textarea
                  className="w-full h-32 bg-background border border-border rounded-md p-4 text-text"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <button className="btn w-full">
                  Send Message
                </button>
                <p className="text-sm text-text-muted mt-2 text-center">
                  {/* Note about the form */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
