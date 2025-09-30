import React from 'react';

/**
 * Midsection component displaying key contact information in a clean
 * black and white, three-column layout.
 */
const Midsection: React.FC = () => {
  // Define the contact data structure
  const contactItems = [
    {
      title: 'Phone', // Changed from Telefon to Phone
      content: '+47 22 83 70 10',
      type: 'phone',
    },
    {
      title: 'E-mail', // Changed from E-post to E-mail
      content: 'SocialDemo@gmail.com',
      type: 'email',
    },
    {
      title: 'Address', // Changed from Adresse to Address
      content: 'Digital Park 42, Social City, London', // New demo address
      type: 'address',
    },
  ];

  return (
    <div className="bg-black py-10 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Responsive Grid Layout for Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center md:text-left">
          {contactItems.map((item, index) => (
            <div key={index} className="space-y-2">
              {/* Title style matches the bold, large text from the image */}
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider border-b border-gray-700 pb-2 mb-2">
                {item.title}
              </h3>
              
              {/* Content style: slightly smaller, legible white text */}
              {item.type === 'address' ? (
                // Use pre-wrap to handle the newline for the address formatting
                <p className="text-lg whitespace-pre-wrap font-light text-gray-200">
                  {item.content}
                </p>
              ) : (
                // Use a tag for clickability on phone/email
                <a 
                  href={item.type === 'phone' ? `tel:${item.content.replace(/\s/g, '')}` : `mailto:${item.content}`}
                  className="text-lg font-light text-gray-200 hover:text-purple-400 transition"
                >
                  {item.content}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Midsection;
