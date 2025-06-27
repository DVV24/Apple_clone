import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Shop and Learn</h4>
            <ul>
              {['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'].map(item => (
                <li key={item} className="py-0.5">{item}</li>
              ))}
            </ul>
            <h4 className="font-semibold mt-4">Apple Wallet</h4>
            <ul>
              <li className="py-0.5">Wallet</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Account</h4>
            <ul>
              {['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'].map(item => (
                <li key={item} className="py-0.5">{item}</li>
              ))}
            </ul>
            <h4 className="font-semibold mt-4">Entertainment</h4>
            <ul>
              {['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'App Store'].map(item => (
                <li key={item} className="py-0.5">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Apple Store</h4>
            <ul>
              {[
                'Find a Store',
                'Genius Bar',
                'Today at Apple',
                'Group Reservations',
                'Apple Camp',
                'Apple Trade In',
                'Ways to Buy',
                'Recycling Programme',
                'Order Status',
                'Shopping Help',
              ].map(item => (
                <li key={item} className="py-0.5">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">For Business</h4>
            <ul>
              <li className="py-0.5">Apple and Business</li>
              <li className="py-0.5">Shop for Business</li>
            </ul>
            <h4 className="font-semibold mt-4">For Education</h4>
            <ul>
              <li className="py-0.5">Apple and Education</li>
              <li className="py-0.5">Shop for Education</li>
              <li className="py-0.5">Shop for University</li>
            </ul>
            <h4 className="font-semibold mt-4">For Healthcare</h4>
            <ul>
              <li className="py-0.5">Apple in Healthcare</li>
              <li className="py-0.5">Mac in Healthcare</li>
              <li className="py-0.5">Health on Apple Watch</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Apple Values</h4>
            <ul>
              {['Accessibility', 'Education', 'Environment', 'Privacy', 'Supply Chain Innovation'].map(item => (
                <li key={item} className="py-0.5">{item}</li>
              ))}
            </ul>
            <h4 className="font-semibold mt-4">About Apple</h4>
            <ul>
              {['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'].map(item => (
                <li key={item} className="py-0.5">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-xs text-gray-600 mt-6 border-t border-gray-300 pt-4">
          <p>
            More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call <a href="#" className="text-blue-600 hover:underline">000800 040 1966</a>.
          </p>
          <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
            <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:underline">Sales Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Legal</a>
              <span>|</span>
              <a href="#" className="hover:underline">Site Map</a>
              <span>|</span>
              <span>India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
