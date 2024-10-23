import React, { useState } from 'react';
import { Brain, Calculator, Clock, Award, Users } from 'lucide-react';
import TestCreator from './components/TestCreator';
import Header from './components/Header';

function App() {
  const [showCreator, setShowCreator] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!showCreator ? (
          <div className="space-y-8">
            <section className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Create Professional Mock Tests in Minutes
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Empower your students with comprehensive practice tests for competitive exams
              </p>
              <button
                onClick={() => setShowCreator(true)}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Create New Test
              </button>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <FeatureCard
                icon={<Brain className="w-8 h-8 text-indigo-600" />}
                title="Smart Question Bank"
                description="Access a vast collection of curated questions across multiple subjects and exam patterns"
              />
              <FeatureCard
                icon={<Calculator className="w-8 h-8 text-indigo-600" />}
                title="Advanced Scoring"
                description="Flexible marking schemes with support for negative marking and section-wise scoring"
              />
              <FeatureCard
                icon={<Clock className="w-8 h-8 text-indigo-600" />}
                title="Time Management"
                description="Set custom durations and time limits for different sections"
              />
              <FeatureCard
                icon={<Award className="w-8 h-8 text-indigo-600" />}
                title="Detailed Analytics"
                description="Get comprehensive reports and performance insights for each student"
              />
            </div>
          </div>
        ) : (
          <TestCreator onBack={() => setShowCreator(false)} />
        )}
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;