import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionStep } from './StepFlowMotion';
import './stepFlow.css';

const StepFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    field: '',
    address: '',
    summary: '',
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="stepflow-container">
      <div className="step-indicator">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className={`step ${currentStep === step ? 'active' : ''}`}>{step}</div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <MotionStep key="step1">
            <h2>Step 1</h2>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <button onClick={nextStep}>Next step</button>
          </MotionStep>
        )}

        {currentStep === 2 && (
          <MotionStep key="step2">
            <h2>Step 2</h2>
            <div className="form-group">
              <label>Course of study</label>
              <input type="text" name="course" value={formData.course} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Select your field</label>
              <div className="field-options">
                {['Java', 'Python', 'C/C++', 'HTML/CSS', 'Other'].map(field => (
                  <button
                    type="button"
                    key={field}
                    className={formData.field === field ? 'selected' : ''}
                    onClick={() => setFormData({ ...formData, field })}
                  >
                    {field}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={prevStep}>Previous step</button>
            <button onClick={nextStep}>Next step</button>
          </MotionStep>
        )}

        {currentStep === 3 && (
          <MotionStep key="step3">
            <h2>Step 3</h2>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </div>
            <button onClick={prevStep}>Previous step</button>
            <button onClick={nextStep}>Next step</button>
          </MotionStep>
        )}

        {currentStep === 4 && (
          <MotionStep key="step4">
            <h2>Step 4</h2>
            <div className="form-group">
              <label>Summary</label>
              <textarea name="summary" value={formData.summary} onChange={handleChange} />
            </div>
            <button onClick={prevStep}>Previous step</button>
            <button onClick={() => alert('Form submitted!')}>Submit</button>
          </MotionStep>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StepFlow;
