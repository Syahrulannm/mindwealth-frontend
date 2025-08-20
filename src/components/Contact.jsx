import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-16 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl dark:text-gray-100 font-bold mb-4">Hubungi Kami</h2>
            <p className="text-secondary-600 dark:text-gray-200 max-w-2xl mx-auto">Ada pertanyaan atau ingin berkolaborasi? Hubungi kami dan saya akan segera menghubungi Anda kembali.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-gray-100 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full dark:text-gray-100 dark:bg-gray-900 px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-gray-100 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full dark:text-gray-100  dark:bg-gray-900 px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-gray-100 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows="4" className="w-full dark:text-gray-100 dark:bg-gray-900 px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <div className="bg-secondary-50 dark:bg-gray-900 p-8 rounded-xl h-full">
                <h3 className="text-xl dark:text-gray-100 font-semibold mb-6">Other Ways to Connect</h3>

                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-gray-800 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-secondary-500 dark:text-gray-200">Email</h4>
                      <p className="mt-1 text-secondary-700 dark:text-gray-200">mindwealth@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-gray-800 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-secondary-500 dark:text-gray-200">Social Media</h4>
                      <div className="flex space-x-4 mt-2">
                        <Link to="#" className="text-primary-600 hover:text-primary-800">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </Link>
                        <Link to="#" className="text-primary-600 hover:text-primary-800">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                          </svg>
                        </Link>
                        <Link to="#" className="text-primary-600 hover:text-primary-800">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-gray-800 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-secondary-500 dark:text-gray-200">Discussion Forum</h4>
                      <p className="mt-1 text-secondary-700 dark:text-gray-200">Join our community discussions</p>
                      <a to="#" className="inline-block mt-2 text-sm font-medium text-primary-600 hover:text-primary-800">
                        Visit Forum →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
