export default function AboutView() {
  return (
    // <!-- About Section -->
    <section id="about" className="py-16 bg-secondary-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <img
              src="https://images.unsplash.com/photo-1675241814067-e599afe3630c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBzeWNob2xvZ2lzdCUyMGFuZCUyMHdyaXRlciUyMHBhc3Npb25hdGV8ZW58MHwxfDB8fHww"
              alt="Profile of author standing in front of bookshelf in cozy study space with warm lighting"
              className="rounded-xl shadow-lg w-64 md:w-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col  justify-center items-center md:items-start">
            <span className="text-sm font-medium text-primary-600">ABOUT MINDFUL WRITING</span>
            <h2 className="text-3xl dark:text-gray-100 font-bold mt-2 mb-6">Hi, I'm Syahrul Annam</h2>
            <div className="text-center md:text-left">
              <p className="text-secondary-600 dark:text-gray-200 mb-4 leading-relaxed">
                I'm a psychologist and writer passionate about exploring the intersection between cognitive science, personal development, and practical life design.
              </p>
              <p className="text-secondary-600 dark:text-gray-200 mb-6 leading-relaxed">
                MindWealth was born from my belief that understanding our minds is the most valuable investment we can make - one that pays dividends in all areas of life.
              </p>
            </div>
            <div className="space-y-3 ">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-secondary-700 dark:text-gray-200">Certified Positive Psychology Practitioner</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-secondary-700 dark:text-gray-200">10+ years experience in cognitive behavioral therapy</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-secondary-700 dark:text-gray-200">Published author in psychology journals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
