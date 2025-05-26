'use client';

import * as React from 'react';
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from '@syncfusion/ej2-react-schedule';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-schedule/styles/material.css';

export default function RealTimeCalendar() {
  const [events, setEvents] = React.useState([
    {
      Id: 1,
      Subject: 'Mathematics Class',
      StartTime: new Date(2025, 4, 24, 9, 0),
      EndTime: new Date(2025, 4, 24, 10, 0),
    },
    {
      Id: 2,
      Subject: 'Science Lab',
      StartTime: new Date(2025, 4, 25, 11, 0),
      EndTime: new Date(2025, 4, 25, 12, 30),
    },
  ]);

  // Simulate real-time updates every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setEvents((prev) => [
        ...prev,
        {
          Id: prev.length + 1,
          Subject: `New Event ${prev.length + 1}`,
          StartTime: new Date(),
          EndTime: new Date(new Date().getTime() + 60 * 60 * 1000),
        },
      ]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full overflow-hidden">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Academic Calendar</h2>
      <div className="overflow-x-auto">
        <ScheduleComponent
          height="600px"
          width="100%"
          selectedDate={new Date()}
          eventSettings={{ dataSource: events }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </div>
  );
}
