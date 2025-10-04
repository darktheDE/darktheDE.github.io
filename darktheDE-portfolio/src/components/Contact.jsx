import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="bg-dark-card rounded-2xl p-8 md:p-12 border border-gray-700 shadow-dark-lg">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4 
                          shadow-glow-purple animate-float hover:animate-glow-pulse">
              <FiMail className="w-8 h-8 text-white hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-gray-300 mb-6">
              Ready to start a conversation? Send me an email and I'll get back to you as soon as possible.
            </p>
            
            <a
              href="mailto:dokienhung1105@gmail.com"
              className="inline-flex items-center gap-2 bg-accent-gradient hover:shadow-glow-purple text-white 
                       px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 
                       transform hover:scale-105"
            >
              <FiMail className="w-5 h-5" />
              Send Me an Email
            </a>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-300 mb-6">
              Or connect with me on social media:
            </p>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/darktheDE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-dark-tertiary hover:bg-accent-purple-light 
                         text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 
                         border border-gray-600 hover:border-accent-purple-light hover:shadow-glow-purple"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/darkthede/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-dark-tertiary hover:bg-accent-blue-light 
                         text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 
                         border border-gray-600 hover:border-accent-blue-light hover:shadow-glow-blue"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              
              <a
                href="https://www.facebook.com/dkh1105/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-dark-tertiary hover:bg-accent-indigo-light 
                         text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 
                         border border-gray-600 hover:border-accent-indigo-light hover:shadow-glow-blue"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Response Time Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              ⚡ I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;