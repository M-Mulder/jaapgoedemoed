export const metadata = {
  title: 'Contact | Jaap Goedemoed',
  description: 'Get in touch with artist Jaap Goedemoed.',
};

export default function ContactPage() {
  return (
    <div className="container-narrow py-12 md:py-20 bg-[#0f0f0f]">
      <h1 className="page-title">Contact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Contact Information */}
        <section>
          <h2 className="section-title">Contact Information</h2>
          
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-lg text-[#f0f0f0] mb-2" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Email</h3>
              <p className="text-[#e6e6e6] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@goedemoed.com" className="hover:text-[#d4af37]">info@goedemoed.com</a>
              </p>
            </div>
            
            {/* Phone */}
            <div>
              <h3 className="text-lg text-[#f0f0f0] mb-2" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Phone</h3>
              <p className="text-[#e6e6e6] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+31 (0) 20 123 4567</span>
              </p>
            </div>
            
            {/* Studio Address */}
            <div>
              <h3 className="text-lg text-[#f0f0f0] mb-2" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Studio Address</h3>
              <p className="text-[#e6e6e6] flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#d4af37] mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>
                  Studio Complex Noord<br />
                  Asterweg 20<br />
                  1031 HP Amsterdam<br />
                  The Netherlands
                </span>
              </p>
            </div>
            
            {/* Studio Hours */}
            <div>
              <h3 className="text-lg text-[#f0f0f0] mb-2" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Studio Hours</h3>
              <p className="text-[#e6e6e6] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>
                  Monday - Friday, 10:00 - 18:00<br />
                  Visits by appointment only
                </span>
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Placeholder */}
        <section>
          <h2 className="section-title">Send a Message</h2>
          
          <div className="bg-[#1a1a1a] border border-[#333333] p-8 rounded-lg">
            <div className="space-y-6">
              {/* Form fields placeholder */}
              <div>
                <label className="block text-[#f0f0f0] mb-2" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Name</label>
                <div className="h-12 bg-[#252525] border border-[#333333] rounded-md"></div>
              </div>
              
              <div>
                <label className="block text-[#f0f0f0] mb-2" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Email</label>
                <div className="h-12 bg-[#252525] border border-[#333333] rounded-md"></div>
              </div>
              
              <div>
                <label className="block text-[#f0f0f0] mb-2" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Subject</label>
                <div className="h-12 bg-[#252525] border border-[#333333] rounded-md"></div>
              </div>
              
              <div>
                <label className="block text-[#f0f0f0] mb-2" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Message</label>
                <div className="h-32 bg-[#252525] border border-[#333333] rounded-md"></div>
              </div>
              
              <div>
                <button className="btn w-full" disabled>
                  Send Message
                </button>
                <p className="text-sm text-[#a3a3a3] mt-2 text-center">
                  {/* Note about the form being a placeholder */}
                  This is a visual placeholder for a future contact form implementation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Map Placeholder */}
      <section className="mt-20">
        <h2 className="section-title">Location</h2>
        <div className="aspect-[16/9] bg-[#252525] rounded-lg flex items-center justify-center">
          <span className="text-4xl text-[#a3a3a3] opacity-30">Map View</span>
        </div>
        <p className="text-sm text-[#a3a3a3] mt-2 text-center">
          Placeholder for an interactive map showing the studio location.
        </p>
      </section>
    </div>
  );
}
