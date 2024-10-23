import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, AlertCircle } from 'lucide-react';

const EXAM_TYPES = [
  "JEE Main",
  "JEE Advanced",
  "NEET",
  "GATE",
  "CAT",
  "UPSC Prelims",
  "SSC CGL",
  "Bank PO",
  "CLAT",
];

function TestCreator({ onBack }) {
  const [formData, setFormData] = useState({
    testName: "",
    examType: "",
    duration: 180,
    totalQuestions: 100,
    negativeMarking: true,
    negativeMarkingValue: 0.25,
    sections: [
      { name: "Physics", questions: 30 },
      { name: "Chemistry", questions: 30 },
      { name: "Mathematics", questions: 40 },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle test creation logic here
    console.log("Test Created:", formData);
  };

  const addSection = () => {
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, { name: "", questions: 0 }]
    }));
  };

  const removeSection = (index) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <h2 className="text-2xl font-bold text-gray-800 ml-4">Create New Test</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test Name
            </label>
            <input
              type="text"
              value={formData.testName}
              onChange={(e) => setFormData(prev => ({ ...prev, testName: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter test name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exam Type
            </label>
            <select
              value={formData.examType}
              onChange={(e) => setFormData(prev => ({ ...prev, examType: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select exam type</option>
              {EXAM_TYPES.map(exam => (
                <option key={exam} value={exam}>{exam}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration (minutes)
            </label>
            <input
              type="number"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              min="1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Questions
            </label>
            <input
              type="number"
              value={formData.totalQuestions}
              onChange={(e) => setFormData(prev => ({ ...prev, totalQuestions: parseInt(e.target.value) }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              min="1"
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              id="negativeMarking"
              checked={formData.negativeMarking}
              onChange={(e) => setFormData(prev => ({ ...prev, negativeMarking: e.target.checked }))}
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="negativeMarking" className="text-sm font-medium text-gray-700">
              Enable Negative Marking
            </label>
          </div>

          {formData.negativeMarking && (
            <div className="ml-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Negative Marking Value
              </label>
              <input
                type="number"
                value={formData.negativeMarkingValue}
                onChange={(e) => setFormData(prev => ({ ...prev, negativeMarkingValue: parseFloat(e.target.value) }))}
                className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                step="0.25"
                min="0"
                required
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">Test Sections</h3>
            <button
              type="button"
              onClick={addSection}
              className="flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Section
            </button>
          </div>

          {formData.sections.map((section, index) => (
            <div key={index} className="flex items-center space-x-4">
              <input
                type="text"
                value={section.name}
                onChange={(e) => {
                  const newSections = [...formData.sections];
                  newSections[index].name = e.target.value;
                  setFormData(prev => ({ ...prev, sections: newSections }));
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Section name"
                required
              />
              <input
                type="number"
                value={section.questions}
                onChange={(e) => {
                  const newSections = [...formData.sections];
                  newSections[index].questions = parseInt(e.target.value);
                  setFormData(prev => ({ ...prev, sections: newSections }));
                }}
                className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Questions"
                min="1"
                required
              />
              {formData.sections.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSection(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Minus className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t">
          <div className="flex items-center text-yellow-600">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="text-sm">All fields are required</span>
          </div>
          <div className="space-x-4">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Create Test
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TestCreator;