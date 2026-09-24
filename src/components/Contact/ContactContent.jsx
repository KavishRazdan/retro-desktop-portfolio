import React, { useState } from 'react';
import { Send, AlertTriangle, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useWindowManager } from '../../context/WindowContext';

export const ContactContent = () => {
  const { showToast } = useWindowManager();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Project Collaboration',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Sender name is required';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) nextErrors.message = 'Message payload cannot be empty';
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      showToast('Validation Failed: Please fill in all required fields.');
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate server dispatch delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Transmission Successful: Mail dispatched to Kavish!');
      
      // Fire celebratory confetti!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF8A00', '#F4D54E', '#717A50', '#222222', '#FFFFFF']
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: 'Job Opportunity / Project Collaboration',
        message: ''
      });
    }, 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      {/* Side-by-side Layout on Desktop */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Contact details metadata */}
        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="retro-card" style={{ backgroundColor: '#FFFFFF', padding: '16px', margin: 0 }}>
            <h4 style={{ textTransform: 'uppercase', fontSize: '13px', borderBottom: '2.5px solid var(--border-color)', paddingBottom: '6px', marginBottom: '12px', fontWeight: 'bold' }}>
              System Address
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} />
                <span>New Delhi, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} />
                <span>razdankavish67@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} />
                <span>+91 8983791881</span>
              </div>
            </div>
          </div>

          <div className="retro-card" style={{ backgroundColor: '#FFEED2', padding: '12px', margin: 0, fontSize: '12px', lineHeight: '1.4' }}>
            <strong>💡 Quick Note:</strong> Submitting this mail composer simulates dispatching a message payload. Recruiter options are fully validated and compile immediately.
          </div>
        </div>

        {/* Form Composer */}
        <div style={{ flex: '2 1 300px' }}>
          {submitted ? (
            <div 
              className="retro-card" 
              style={{ 
                backgroundColor: '#F4FFF4', 
                textAlign: 'center', 
                padding: '30px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: '12px',
                margin: 0
              }}
            >
              <CheckCircle size={40} style={{ color: '#10AC84' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mail Transmitted!</h3>
              <p style={{ fontSize: '14px', maxWidth: '300px' }}>
                Thank you. Your message has been successfully transmitted via hyper-protocol. Kavish will respond shortly.
              </p>
              <button onClick={() => setSubmitted(false)} style={{ marginTop: '8px' }}>
                Compose Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              {/* Retro Email Form header styles */}
              <div className="retro-card" style={{ backgroundColor: '#EAE6DB', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', margin: 0 }}>
                {/* To Field */}
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #CCC', paddingBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ width: '80px', fontWeight: 'bold', fontSize: '13px', flexShrink: 0 }}>TO:</span>
                  <span style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: '600', wordBreak: 'break-all' }}>
                    Md Kavish &lt;razdankavish67@gmail.com&gt;
                  </span>
                </div>

                {/* From Name */}
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #CCC', paddingBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                  <label htmlFor="name-input" style={{ width: '80px', fontWeight: 'bold', fontSize: '13px', flexShrink: 0 }}>FROM NAME:</label>
                  <input 
                    id="name-input"
                    type="text" 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ flex: '1 1 160px', border: 'none', background: 'transparent', fontSize: '13px', minWidth: '140px' }}
                  />
                  {errors.name && <AlertTriangle size={14} style={{ color: '#FF5E57' }} title={errors.name} />}
                </div>

                {/* From Email */}
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #CCC', paddingBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                  <label htmlFor="email-input" style={{ width: '80px', fontWeight: 'bold', fontSize: '13px', flexShrink: 0 }}>FROM EMAIL:</label>
                  <input 
                    id="email-input"
                    type="text" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ flex: '1 1 160px', border: 'none', background: 'transparent', fontSize: '13px', minWidth: '140px' }}
                  />
                  {errors.email && <AlertTriangle size={14} style={{ color: '#FF5E57' }} title={errors.email} />}
                </div>

                {/* Subject */}
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
                  <label htmlFor="subject-input" style={{ width: '80px', fontWeight: 'bold', fontSize: '13px', flexShrink: 0 }}>SUBJECT:</label>
                  <input 
                    id="subject-input"
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    style={{ flex: '1 1 160px', border: 'none', background: 'transparent', fontSize: '13px', minWidth: '140px' }}
                  />
                </div>
              </div>

              {/* Message Body */}
              <div style={{ position: 'relative' }}>
                <textarea 
                  aria-label="Email message content"
                  rows="6"
                  placeholder="Type your message details here..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid var(--border-color)',
                    boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)',
                    backgroundColor: '#FFFFFF',
                    resize: 'none',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}
                />
                {errors.message && (
                  <div style={{ position: 'absolute', right: '10px', bottom: '15px' }}>
                    <AlertTriangle size={16} style={{ color: '#FF5E57' }} title={errors.message} />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'var(--accent-orange)',
                    color: '#FFF',
                    boxShadow: '3px 3px 0px var(--border-color)'
                  }}
                >
                  <Send size={14} style={{ color: '#FFF' }} />
                  <span style={{ color: '#FFF' }}>{isSubmitting ? 'Transmitting...' : 'Dispatch Mail'}</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
