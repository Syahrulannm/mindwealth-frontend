import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-custom rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faBrain} className="w-5 h-5" />
              </div>
              <h3 className="px-2 text-xl font-bold  bg-gradient-custom gradient-text">
                <span className="text-slate-100">Mind</span>Wealth
              </h3>
            </div>
            <p className="text-secondary-400 mb-4">Thoughtful insights for mindful living and cognitive growth.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-secondary-400 mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/articles" className="text-secondary-300 hover:text-white transition">
                  All Articles
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-secondary-300 hover:text-white transition">
                  Tags
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-secondary-300 hover:text-white transition">
                  Categories
                </Link>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition">
                  Book Notes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-secondary-400 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition">
                  Recommended Books
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition">
                  Tools I Use
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition">
                  Workshops
                </a>
              </li>
              <li>
                <Link to="/#newsletter" className="text-secondary-300 hover:text-white transition">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-secondary-400 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-secondary-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 mb-4 md:mb-0">© 2025 MindWealth. All rights reserved.</p>
          <div className="text-secondary-400 text-sm">Made with ♥ for thinkers</div>
        </div>
      </div>
    </footer>

    //       <p>© {new Date().getFullYear()} MindWealth. All rights reserved.</p>
    //       <p className="mt-2">Designed with passion for knowledge sharing</p>
  );
}
