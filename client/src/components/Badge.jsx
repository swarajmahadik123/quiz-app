// Define a functional component called Badge that takes a score prop
const Badge = ({ score }) => {
  // Define an array of badge objects with score, badge, and icon properties
  const badges = [
    { score: 0, badge: "Novice", icon: "🌱" },
    { score: 5, badge: "Intermediate", icon: "🌟" },
    { score: 8, badge: "Expert", icon: "🏆" },
  ];

  // Define a function that returns the badge object that matches the score prop
  const getBadge = () => {
    // Reverse the badges array and find the first badge object that has a score less than or equal to the score prop
    const badge = badges.reverse().find((b) => score >= b.score);
    // If a badge object is found, return it, otherwise return the last badge object in the array
    return badge ? badge : badges[badges.length - 1];
  };

  // Call the getBadge function and store the result in a variable
  const currentBadge = getBadge();

  // Return a div element with a class of badge, containing an icon, badge name, and a description
  return (
    <div className="badge flex flex-col items-center">
      <div className="text-6xl mb-2">{currentBadge.icon}</div>
      <h3 className="text-2xl font-bold text-primary">{currentBadge.badge}</h3>
      <p className="text-sm text-gray-600">Your current rank</p>
    </div>
  );
};

// Export the Badge component as the default export of the module
export default Badge;
