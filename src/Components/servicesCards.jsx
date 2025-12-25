// react functional component for services cards with hover effect
import React from 'react';
import web_dev from './Logos/web_dev.png';
import ecommerce from './Logos/E-com.png';
import ui from './Logos/ui.png';
import webapp from './Logos/webapp.png';
import seo from './Logos/seo.png';
import custom from './Logos/custom.png';
const CardsWithHover = () => {
  return (  
   <div>
    {/* our services */}
    <div class="min-h-screen bg-gray-800 mt-1">
        <h2 className="text-4xl font-bold  text-center mb-8 p-5" style={{color:"white"}}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 p-5">
            {/* Service Card 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                <img src={web_dev} alt="Web Development" className="w-25 h-25 mb-4 mx-auto"/>
                <h3 className="text-2xl font-bold text-[#F45DA2] mb-3 text-center">Web Development</h3>
                <p className="text-gray-300 text-center">Custom static and dynamic websites built with modern technologies for optimal performance and user experience.

Responsive Design
Fast Loading
SEO Optimized</p>
{/* center the button */}
<button className="mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto">Learn More</button>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                <img src={ecommerce} alt="E-commerce Solutions" className="w-25 h-25 mb-4 mx-auto"/>
                <h3 className="text-2xl font-bold text-[#FBDB57] mb-3 text-center">E-commerce Solutions</h3>
                <p className="text-gray-300 text-center">Complete online store solutions with secure payment gateways, inventory management, and seamless user journey.

Payment Integration
Inventory Management
Mobile Friendly</p>
<button className="mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto">Learn More</button>
            </div>
             <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                <img src={ui} alt="UI/UX Design" className="w-25 h-25 mb-4 mx-auto"/>
                <h3 className="text-2xl font-bold text-[#FBDB57] mb-3 text-center">UI / UX Design</h3>
                <p className="text-gray-300 text-center">User-centered designs that create intuitive, engaging experiences and drive conversions for your business.

User Research
Wireframing
</p>
<button className="mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto">Learn More</button>
            </div>
             <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
 <img src={webapp} alt="Web App Development" className="w-25 h-25 mb-4 mx-auto"/>
                <h3 className="text-2xl font-bold text-[#FBDB57] mb-3 text-center">Web App Development</h3>
                <p className="text-gray-300 text-center">Scalable web applications with robust backend systems, real-time features, and cross-platform compatibility.

Real-time Features
API Integration
Progressive Web Apps</p>
<button className="mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto">Learn More</button>
            </div>
             <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                <img src={seo} alt="SEO & Website Maintenance" className="w-25 h-25 mb-4 mx-auto"/>
                <h3 className="text-2xl font-bold text-[#FBDB57] mb-3 text-center">SEO & Website Maintenance</h3>
                <p className="text-gray-300 text-center">Continuous optimization, security updates, and performance monitoring to keep your website at peak performance.

SEO Optimization
Security Updates
Performance Monitoring</p>
<button className="mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto">Learn More</button>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                <img src={custom} alt="Custom Solutions" className="w-25 h-25 mb-4 mx-auto"/>
                <h3 className="text-2xl font-bold text-[#45CFFF] mb-3 text-center">Custom Solutions</h3>
                <p className="text-gray-300 text-center">Tailored software solutions designed to meet your unique business requirements and workflow needs.

Custom Software
API Development
System Integration</p>
<button className="mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 block mx-auto">Learn More</button>
            </div>
        </div>
    </div>
   </div>
  );
};

export default CardsWithHover;  