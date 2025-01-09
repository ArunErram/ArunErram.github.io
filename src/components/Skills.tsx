const skills = {
  'Frontend': ['React','Angular', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  'Backend': ['System Design','Java', 'Python','Node.js','PostgreSQL', 'MySQL',' MongoDB', 'Redis','Kafka/MQ'],
  'DevOps': ['Docker', 'Kubernetes','AWS', 'CI/CD','Linux'],
  'Tools': ['Git', 'VS Code', 'Microsoft SQL Server', 'Postman', 'Oracle SQL Developer']
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;