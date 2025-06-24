import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Check, AlertCircle } from 'lucide-react';

// Define validation types
type ValidationErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // Validate form data
  const validateForm = useCallback(() => {
    const newErrors: ValidationErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle input blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate single field on blur
    validateField(name as keyof typeof formData);
  };

  // Validate a single field
  const validateField = (field: keyof typeof formData) => {
    const newErrors = { ...errors };
    
    switch (field) {
      case 'name':
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'message':
        if (!formData.message.trim()) {
          newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters';
        } else {
          delete newErrors.message;
        }
        break;
    }
    
    setErrors(newErrors);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });
    
    // Validate all fields
    const isValid = validateForm();
    
    if (!isValid) {
      return;
    }
    
    setIsSending(true);
    setSendStatus(null);
    
    try {
      // In a real application, you would send the data to your backend
      // For example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setSendStatus({
        type: 'success',
        message: `Message sent successfully to ${formData.email}!`
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset touched state
      setTouched({
        name: false,
        email: false,
        message: false,
      });
    } catch (error) {
      // Handle error
      setSendStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSending(false);
    }
  };

  // Copy email to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`Copied ${text} to clipboard!`);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 px-4 sm:px-6">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 w-full"
      >
        Get in Touch
      </motion.h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
        Let's Chat! Whether you have a question, a project idea, or just want to connect, I'm always happy to hear from you. Drop me a message, and I'll be in touch soon!
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-12"
        >
          <motion.div 
            className="flex items-center space-x-4 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-md group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => copyToClipboard('rjrajput5462@gmail.com')}
            title="Click to copy email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors group-hover:animate-bounce" />
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">rjrajput5462@gmail.com</p>
          </motion.div>
          
          <motion.a
            href="tel:+919511669138"
            className="flex items-center space-x-4 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:shadow-md group cursor-pointer"
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">91+ 9511669138</p>
          </motion.a>
          
          <motion.a
            href="https://maps.google.com/?q=Pune,Maharashtra,India"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:shadow-md group cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 8px rgba(139, 92, 246, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors group-hover:animate-pulse" />
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Pune, Maharashtra</p>
          </motion.a>
        </motion.div>

        {sendStatus && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-2xl mx-auto w-full p-4 rounded-lg flex items-center space-x-3 ${
              sendStatus.type === 'success' 
                ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400' 
                : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
            }`}
          >
            {sendStatus.type === 'success' ? (
              <Check className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <p>{sendStatus.message}</p>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto w-full space-y-4 sm:space-y-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 sm:px-4 py-2 rounded-lg border ${
                touched.name && errors.name 
                  ? 'border-red-500 dark:border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500' 
                  : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
              } dark:bg-gray-800 dark:text-white`}
              required
              aria-invalid={touched.name && !!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {touched.name && errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 sm:px-4 py-2 rounded-lg border ${
                touched.email && errors.email 
                  ? 'border-red-500 dark:border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500' 
                  : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
              } dark:bg-gray-800 dark:text-white`}
              required
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {touched.email && errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              className={`w-full px-3 sm:px-4 py-2 rounded-lg border ${
                touched.message && errors.message 
                  ? 'border-red-500 dark:border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500' 
                  : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
              } dark:bg-gray-800 dark:text-white`}
              required
              aria-invalid={touched.message && !!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {touched.message && errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
            )}
          </div>
          
          <motion.button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-500 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={!isSending ? { scale: 1.02 } : undefined}
            whileTap={!isSending ? { scale: 0.98 } : undefined}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;