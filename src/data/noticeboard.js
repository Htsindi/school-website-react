export const noticeboardData = {
  currentDate: new Date(),
  
  latestMessage: {
    title: "Welcome to 2026 Academic Year",
    content: "School reopens on January 12th, 2026. Please ensure all students arrive by 7:30 AM for the opening assembly.",
    date: "2026-01-03",
    priority: "high"
  },
  
  academicQuarters: [
    {
      id: 1,
      name: 'Term 1 (Jan - Mar 2026)',
      status: '', // Will be calculated dynamically
      image: '/assets/summer.png',
      activities: [
        { name: 'School Opening & Orientation', status: '', date: '2026-01-12' },
        { name: 'First Term Assessments', status: '', date: '2026-02-15' },
        { name: 'Sports Day', status: '', date: '2026-03-05' },
        { name: 'Parent-Teacher Meeting', status: '', date: '2026-03-20' }
      ],
      startDate: '2026-01-12',
      endDate: '2026-03-27',
      googleFolder: 'https://drive.google.com/drive/folders/YOUR_TERM1_FOLDER_ID'
    },
    {
      id: 2,
      name: 'Term 2 (Apr - Jun 2026)',
      status: '',
      image: '/assets/autumn.png',
      activities: [
        { name: 'Second Term Begins', status: '', date: '2026-04-08' },
        { name: 'Mid-Year Exams', status: '', date: '2026-05-10' },
        { name: 'Cultural Day', status: '', date: '2026-05-22' },
        { name: 'Science Fair', status: '', date: '2026-06-15' }
      ],
      startDate: '2026-04-08',
      endDate: '2026-06-26',
      googleFolder: 'https://drive.google.com/drive/folders/YOUR_TERM2_FOLDER_ID'
    },
    {
      id: 3,
      name: 'Term 3 (Jul - Sep 2026)',
      status: '',
      image: '/assets/winter.png',
      activities: [
        { name: 'Third Term Begins', status: '', date: '2026-07-21' },
        { name: 'Art Exhibition', status: '', date: '2026-08-05' },
        { name: 'Career Guidance Week', status: '', date: '2026-08-25' },
        { name: 'Inter-school Competition', status: '', date: '2026-09-15' }
      ],
      startDate: '2026-07-21',
      endDate: '2026-09-23',
      googleFolder: 'https://drive.google.com/drive/folders/YOUR_TERM3_FOLDER_ID'
    },
    {
      id: 4,
      name: 'Term 4 (Oct - Dec 2026)',
      status: '',
      image: '/assets/spring.png',
      activities: [
        { name: 'Final Term Begins', status: '', date: '2026-10-06' },
        { name: 'Graduation Preparations', status: '', date: '2026-11-10' },
        { name: 'Final Exams', status: '', date: '2026-11-25' },
        { name: 'Prize Giving Day', status: '', date: '2026-12-05' }
      ],
      startDate: '2026-10-06',
      endDate: '2026-12-11',
      googleFolder: 'https://drive.google.com/drive/folders/YOUR_TERM4_FOLDER_ID'
    }
  ],
  
  additionalAnnouncements: [
    {
      id: 1,
      title: "2026 School Calendar",
      content: "The complete 2026 academic calendar is now available. Download it from the school portal.",
      date: "December 15, 2025",
      borderColor: "border-warning",
      icon: "📅"
    },
    {
      id: 2,
      title: "Grade 7 Applications",
      content: "Applications for Grade 7 (2026 intake) open on February 1st, 2026. Early applications encouraged.",
      date: "December 20, 2025",
      borderColor: "border-info",
      icon: "🎓"
    },
    {
      id: 3,
      title: "New Learning Resources",
      content: "Digital learning platform updated with new resources for all grades. Parents can access via parent portal.",
      date: "December 28, 2025",
      borderColor: "border-success",
      icon: "💻"
    }
  ],
  
  statusLegend: [
    { status: 'completed', label: 'Completed', color: 'bg-secondary' },
    { status: 'current', label: 'Current', color: 'bg-primary' },
    { status: 'upcoming', label: 'Upcoming', color: 'bg-success' }
  ]
};

// Function to calculate activity statuses based on current date
export function calculateActivityStatuses(data) {
  const currentDate = data.currentDate;
  const currentTime = currentDate.getTime();
  const fourteenDaysMs = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
  
  // Process each academic quarter
  data.academicQuarters.forEach(quarter => {
    // Calculate quarter status based on start and end dates
    const quarterStartDate = new Date(quarter.startDate);
    const quarterEndDate = new Date(quarter.endDate);
    
    if (currentDate > quarterEndDate) {
      quarter.status = 'completed';
    } else if (currentDate >= quarterStartDate && currentDate <= quarterEndDate) {
      quarter.status = 'current';
    } else {
      quarter.status = 'upcoming';
    }
    
    // Calculate activity statuses
    quarter.activities.forEach(activity => {
      const activityDate = new Date(activity.date);
      const activityTime = activityDate.getTime();
      const timeDifference = activityTime - currentTime;
      
      if (activityDate < currentDate) {
        activity.status = 'completed';
      } else if (timeDifference <= fourteenDaysMs && timeDifference > 0) {
        activity.status = 'current';
      } else if (timeDifference > fourteenDaysMs) {
        activity.status = 'upcoming';
      } else {
        activity.status = 'current'; // For same day events
      }
    });
  });
  
  return data;
}

// Initialize the data with calculated statuses
export const initializedNoticeboardData = calculateActivityStatuses(noticeboardData);