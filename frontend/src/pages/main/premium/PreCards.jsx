import React from 'react';
import { BookOpen, TrendingUp, Target, CheckCircle, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import displayRazorPay from './razorpay';

const FinancialLiteracyPlans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Basic Learner",
      price: "Free",
      description: "Start your financial literacy journey",
      features: [
        "Access to foundational modules",
        "Basic budgeting tools",
        "Community forum access",
        "Weekly financial tips"
      ],
      icon: BookOpen
    },
    {
      title: "Smart Saver",
      price: 3000, // Price in INR (Rupees)
      description: "Enhance your financial knowledge",
      features: [
        "All Basic Learner features",
        "Advanced saving strategies",
        "Personalized learning path",
        "Monthly webinars with experts",
        "Investment basics course"
      ],
      icon: TrendingUp
    },
    {
      title: "Financial Master",
      price: 6000, // Price in INR (Rupees)
      description: "Comprehensive financial empowerment",
      features: [
        "All Smart Saver features",
        "AI-powered financial advisor",
        "Advanced investment simulations",
        "Retirement planning tools",
        "1-on-1 coaching sessions"
      ],
      icon: Target
    }
  ];

  const selectedColors = [
    {
      bg: "#ff5722",
      text: "#000000",
      accent: "#ff7043",
    },
    {
      bg: "#e8ddd4",
      text: "#000000",
      accent: "#d7c4b0",
    },
    {
      bg: "#000000",
      text: "#ffffff",
      accent: "#333333",
    }
  ];

  const handlePayment = (plan) => {
    if (plan.price === "Free") {
      navigate('/main');
    } else {
      displayRazorPay(plan.price);
    }
  };

  return (
    <div className="bg-[#f6f6f6] py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0'
          }}
        />
      </div>
      
      {/* Background Lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div key={`v-${i}`} className="absolute h-full border-l border-dotted border-black" style={{ left: `${i * 10}%` }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={`h-${i}`} className="absolute w-full border-t border-dotted border-black" style={{ top: `${i * 12.5}%` }} />
        ))}
      </div>

      <div className="max-w-full mx-auto relative z-10">
        <div className="mb-10 text-left px-8">
          <h1 className="text-7xl font-black tracking-tight text-[#000000] leading-tight mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span className="block">Empower Your</span>
            <span className="block text-[#ff5722] italic">Financial Future</span>
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Choose the plan that fits your journey to financial literacy
          </p>
        </div>

        {/* Changed from grid-cols-1 to grid-cols-3 and adjusted gap */}
        <div className="grid grid-cols-3 gap-6 px-8">
          {plans.map((plan, index) => {
            const colorScheme = selectedColors[index % selectedColors.length];
            const isOrange = colorScheme.bg === "#ff5722";
            const isBeige = colorScheme.bg === "#e8ddd4";
            const isBlack = colorScheme.bg === "#000000";

            return (
              <div 
                key={index}
                className="rounded-[20px] overflow-hidden shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl w-full"
                style={{
                  backgroundColor: colorScheme.bg,
                  color: colorScheme.text,
                  border: `2px solid ${colorScheme.accent}`,
                  fontFamily: 'Arial, sans-serif'
                }}
              >
                <div className="p-6 min-h-[500px] flex flex-col justify-between relative">
                  <div className="z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-black tracking-wide uppercase">{plan.title}</h2>
                      <plan.icon className={`h-8 w-8 ${isBlack ? 'text-white' : 'text-black'}`} />
                    </div>
                    <p className={`text-3xl font-bold mb-4 ${isBlack ? 'text-white' : 'text-black'}`}>
                      {plan.price === "Free" ? plan.price : `₹${plan.price}`}
                    </p>
                    <p className={`mb-6 ${isBlack ? 'text-white/80' : 'text-black/80'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="z-10 flex-1">
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className={`h-5 w-5 mr-2 ${isBlack ? 'text-white' : 'text-black'}`} />
                          <span className={`${isBlack ? 'text-white/80' : 'text-black/80'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="z-10 mt-6">
                    <button 
                      onClick={() => handlePayment(plan)}
                      className={`w-full ${
                        isBlack ? 'bg-white text-black' : 'bg-black text-white'
                      } py-3 rounded-xl font-bold hover:opacity-90 transition-opacity`}
                    >
                      Start Learning
                    </button>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%)',
                        backgroundSize: '10px 10px',
                        backgroundPosition: '0 0, 0 5px'
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2">
            <Users className="h-5 w-5 text-gray-700" />
            <span className="font-semibold text-gray-700">10,000+ active learners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialLiteracyPlans;
