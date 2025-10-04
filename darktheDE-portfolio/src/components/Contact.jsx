import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMail className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-600 mb-6">
              Ready to start a conversation? Send me an email and I'll get back to you as soon as possible.
            </p>
            
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white 
                       px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 
                       transform hover:scale-105"
            >
              <FiMail className="w-5 h-5" />
              Send Me an Email
            </a>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600 mb-6">
              Or connect with me on social media:
            </p>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/darktheDE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-900 
                         text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              
              <a
                href="https://linkedin.com/in/darkthede"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 
                         text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              
              <a
                href="https://twitter.com/darkthede"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-sky-500 hover:bg-sky-600 
                         text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Response Time Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              ⚡ I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;