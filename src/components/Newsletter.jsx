export default function Newsletter() {
  return (
    // <!-- Newsletter Section -->
    <section id="newsletter" className="py-16 scroll-mt-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bergabunglah dengan MindWealth Circle</h2>
        <p className="max-w-2xl mx-auto mb-8 text-primary-100">Dapatkan wawasan, refleksi, dan inspirasi mingguan untuk membantu Anda berpikir lebih mendalam dan hidup lebih bijaksana.</p>
        {/* Receive weekly insights, reflections, and inspiration to help you think deeper and live wiser. */}

        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-lg focus:outline-none dark:bg-gray-900 text-gray-800 dark:text-gray-100" required />
            <button type="submit" className="px-6 py-3 bg-white dark:bg-gray-900 text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition shadow-md">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-primary-200 mt-3">We value your privacy and never spam.</p>
        </div>
      </div>
    </section>
  );
}
