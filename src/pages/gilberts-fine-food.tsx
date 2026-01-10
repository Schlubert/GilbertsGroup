import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ShoppingBag, CheckCircle, } from 'lucide-react';


const GilbertsFineFood: React.FC = () => {
 {/* const featuredProducts = [
    {
      name: 'Premium Olive Oil',
      description: 'Extra virgin olive oil from Italy, cold-pressed for superior flavor',
      origin: 'Tuscany, Italy',
      image: 'images/products/olive-oil.jpg',
    },
    {
      name: 'Himalayan Pink Salt',
      description: 'Hand-mined from ancient sea beds, rich in minerals',
      origin: 'Pakistan',
      image: 'images/products/pink-salt.jpg',
    },
    {
      name: 'Aged Balsamic Vinegar',
      description: 'Traditionally aged for rich, complex flavor profiles',
      origin: 'Modena, Italy',
      image: 'images/products/balsamic.jpg',
    },
    {
      name: 'Premium Vanilla Extract',
      description: 'Pure Madagascar bourbon vanilla, perfect for baking',
      origin: 'Madagascar',
      image: 'images/products/vanilla.jpg',
    },
    {
      name: 'Saffron Threads',
      description: 'Hand-harvested premium saffron for exceptional dishes',
      origin: 'Spain',
      image: 'images/products/saffron.jpg',
    },
    {
      name: 'Truffle Oil',
      description: 'White truffle infused oil for gourmet finishing',
      origin: 'France',
      image: 'images/products/truffle-oil.jpg',
    },
    {
      name: 'Japanese Matcha',
      description: 'Ceremonial grade matcha powder from Uji region',
      origin: 'Kyoto, Japan',
      image: 'images/products/matcha.jpg',
    },
    {
      name: 'Smoked Paprika',
      description: 'Authentically smoked Spanish paprika for depth of flavor',
      origin: 'La Vera, Spain',
      image: 'images/products/paprika.jpg',
    },
  ];
  */}

  const productCategories = [
    'Oils & Vinegars',
    'Spices & Seasonings',
    'Specialty Ingredients',
    'International Products',
    'Baking Essentials',
    'Finishing Salts',
  ];

  const processSteps = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Browse Our Selection',
      description: 'Explore our curated featured products or request our complete catalog',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Get In Touch',
      description: 'Contact us with your requirements and we\'ll provide availability and pricing',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Receive Your Order',
      description: 'We source fresh and deliver quality ingredients directly to you',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[50vh] -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-900 via-emerald-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('images/companies/fb-apprentice-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <img 
              src="/images/logos/GFF-logo.png" 
              alt="Gilbert's Fine Food logo"
              className="h-32 mx-auto mb-4 drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-5xl font-bold mb-4">Quality Ingredients for Passionate Bakers & Cooks</h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Sourcing premium ingredients from across the country and around the world for home cooks and food professionals
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Philosophy</h2>
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            At Gilbert's Fine Food, we believe that exceptional cooking starts with exceptional ingredients. 
            We source premium products from trusted suppliers worldwide, bringing restaurant-quality ingredients 
            to home cooks and professional kitchens across New Zealand.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            From rare spices to artisan oils, our curated selection represents years of culinary experience 
            and a commitment to quality that never compromises.
          </p>
        </div>
      </section>

      
      {/* Featured Products */}
     
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*<div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
            <p className="text-xl text-slate-600">
              A selection of our most popular premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Premium
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{product.description}</p>
                  <div className="flex items-center text-xs text-emerald-600 font-medium">
                    <Award className="w-4 h-4 mr-1" />
                    {product.origin}
                  </div>
                </div>
              </div>
            ))}
          </div>
          */}

          {/* CTA Cards */}
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/*<div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FileText className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Request Full Catalog</h3>
              <p className="text-slate-600 mb-6">
                Get our complete product list with hundreds of premium ingredients from around the world
              </p>
              <Link
                to="/contact"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Request Catalog
              </Link>
            </div>*/}
          

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Mail className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom Orders</h3>
              <p className="text-slate-600 mb-6">
                Need something specific? We can source specialty ingredients for your unique requirements
              </p>
              <Link
                to="/contact"
                className="inline-block bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 text-center hover:bg-emerald-50 transition-colors cursor-pointer border-2 border-transparent hover:border-emerald-600"
              >
                <p className="text-lg font-semibold text-slate-900">{category}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 mt-8">
            ...and many more specialty ingredients available upon request
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Book Teaser */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Recipe Book Coming Soon</h2>
          <p className="text-xl leading-relaxed mb-8 opacity-95">
            We're compiling decades of culinary knowledge into a comprehensive recipe book. 
            Learn techniques, discover flavour combinations, and master the art of cooking with quality ingredients.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Join Our Mailing List
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Elevate Your Cooking?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Contact us today to discuss your ingredient needs.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </Link>
            <a
              href="tel:+64274859001"
              className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GilbertsFineFood;