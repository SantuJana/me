import { useState } from 'react';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import ResumePdf from "../../assets/resume/SantuJanaResume.pdf";

const resumeData = {
  experience: [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Bluehorse Software Solutions Private Limited',
      period: '2023 - Present',
      description: 'Bluehorse software solutions is a technology company specializing in custom scalable applications and end-to-end e-commerce solutions for clients across various industries. As a full stack developer, I play a key role in designing, developing, and deploying web applications that align with client goals and performance standards.',
      points: [
        "Developed and maintained end-to-end web applications using React.js, Node.js, Express.js and Full stack application using Next.js.",
        "Designed and implemented RESTful APIs and integrated third-party services to streamline business workflows.",
        "Created responsive and accessible UI components using modern front-end practices and component-based architecture.",
        "Implemented robust authentication and Authorization using JWT, OAuth, and session-based strategies to ensure secure user access and role-based permissions.",
        "Built and optimized MySQL and MongoDB databases, including schema design, indexing, and data migration.",
        "Collaborated with cross-functional teams (UI/UX, QA, DevOps) in agile sprints to deliver features on schedule.",
        "Troubleshot and debugged performance issues, reducing page load times and improving user engagement."
      ]
    },
    {
      id: 2,
      title: 'Junior Software Developer',
      company: 'Aiinhome Technologies Pvt. Ltd.',
      period: '2021 - 2023',
      description: 'Aiinhome Technologies is a company that specializes in big data along with mobile and web technologies.',
      points: [
        "Developed scalable and secure RESTful APIs using Node.js / Flask to support data-driven web and mobile applications.",
        "Designed and optimized complex stored procedures and database logic on Microsoft SQL Server (MSSQL) to ensure high performance and data integrity.",
        "I Worked extensively with large datasets using python and libraries like pandas for data transformation, aggregation, and analysis.",
        "Built and managed ETL pipelines on Microsoft Azure, enabling seamless data integration from multiple sources into structured formats.",
        "Utilized advanced SQL techniques including CTEs, window functions, indexing strategies, and performance tuning for querying and reporting on massive datasets."
      ]
    },
  ],
  education: [
    {
      id: 1,
      degree: 'Masters in Computer Science',
      institution: 'Vidyasagar University',
      period: '2019 - 2021',
      description: 'CGPA - 9.15 (10.00)',
    },
    {
      id: 2,
      degree: 'Bachelor in Computer Science',
      institution: 'Vidyasagar University',
      period: '2016 - 2019',
      description: 'Percentage - 61.5%',
    },
  ],
  certifications: [
    {
      id: 1,
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2021',
    },
    {
      id: 2,
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2020',
    },
    {
      id: 3,
      title: 'React Advanced Concepts',
      issuer: 'React Training',
      year: '2020',
    },
  ],
};

type TabType = 'experience' | 'education' | 'certifications';

const Resume = () => {
  const [activeTab, setActiveTab] = useState<TabType>('experience');
  const [showResumeView, setShowResumeView] = useState(false);

  const handleDownload = () => {
    setShowResumeView(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseResumeView = () => {
    setShowResumeView(false);
    document.body.style.overflow = 'auto';
  };

  const downloadPDF = () => {
    // In a real application, you would generate or serve a PDF file
    alert('Downloading resume...');
  };

  return (
    <>
      <section id="resume" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              My Resume
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl text-center">
              A summary of my professional journey, education, and achievements.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-slate-200 dark:bg-slate-700 p-1">
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'experience'
                      ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Briefcase size={18} className="mr-2" />
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'education'
                      ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <GraduationCap size={18} className="mr-2" />
                  Education
                </button>
                {/* <button
                  onClick={() => setActiveTab('certifications')}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'certifications'
                      ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Award size={18} className="mr-2" />
                  Certifications
                </button> */}
              </div>
            </div>

            <div className="space-y-8">
              {activeTab === 'experience' && (
                <div className="animate-fade-in">
                  <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                    {resumeData.experience.map((item, index) => (
                      <div 
                        key={item.id} 
                        className={`mb-12 last:mb-0 animate-slide-up`}
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="absolute -left-[9px] w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                              {item.period}
                            </span>
                          </div>
                          <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{item.company}</p>
                          <p className="text-slate-800 dark:text-slate-300">{item.description}</p>
                          <ul className='list-disc list-inside text-slate-500 dark:text-slate-100'>
                            {
                              item?.points?.map((point, index) =>
                                <li key={index}>{point}</li>
                              )
                            }
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="animate-fade-in">
                  <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                    {resumeData.education.map((item, index) => (
                      <div 
                        key={item.id} 
                        className={`mb-12 last:mb-0 animate-slide-up`}
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="absolute -left-[9px] w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                        <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.degree}</h3>
                            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                              {item.period}
                            </span>
                          </div>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{item.institution}</p>
                          <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* {activeTab === 'certifications' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
                  {resumeData.certifications.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center animate-slide-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                        <Award size={30} className="text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{item.issuer}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{item.year}</p>
                    </div>
                  ))}
                </div>
              )} */}
            </div>

            <div className="flex justify-center mt-12">
              <button
                // onClick={downloadPDF}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                {/* <span className="mr-2">Download Resume</span> */}
                <a href={ResumePdf} className="mr-2" download>Download Resume</a>
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume View Modal */}
      {showResumeView && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 w-full max-w-4xl h-[80vh] rounded-lg shadow-xl flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Resume</h2>
              <div className="flex gap-4">
                <button
                  onClick={downloadPDF}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center"
                >
                  <Download size={18} className="mr-2" />
                  Download PDF
                </button>
                <button
                  onClick={handleCloseResumeView}
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-3xl mx-auto space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Experience</h3>
                  {resumeData.experience.map((item) => (
                    <div key={item.id} className="mb-6">
                      <h4 className="text-xl font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                      <p className="text-purple-600 dark:text-purple-400">{item.company}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{item.period}</p>
                      <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Education</h3>
                  {resumeData.education.map((item) => (
                    <div key={item.id} className="mb-6">
                      <h4 className="text-xl font-semibold text-slate-800 dark:text-white">{item.degree}</h4>
                      <p className="text-blue-600 dark:text-blue-400">{item.institution}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{item.period}</p>
                      <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resumeData.certifications.map((item) => (
                      <div key={item.id} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                        <p className="text-purple-600 dark:text-purple-400">{item.issuer}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{item.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;