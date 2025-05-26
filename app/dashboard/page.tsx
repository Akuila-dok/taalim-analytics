import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Calendar } from '@/components/ui/calendar';
import { UserCheck,BookOpen, BarChart2, Percent, Users, LayoutGrid, School, MapPin, Quote } from 'lucide-react'; // ✅ All icons imported here

export default function DashboardPage() {
  return (
    <div className="flex font-ubuntu flex-col md:flex-row bg-teal-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 md:ml-64">
        <Navbar />
        <main className="pt-20 px-4 md:px-6 pb-10">

          {/* ✅ School Info */}
          <section className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-teal-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold text-teal-700 flex items-center gap-2">
                  <School className="w-8 h-8 text-teal-600" />
                  Green Valley High School
                </h1>
                <p className="text-gray-600 mt-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-500" />
                  Nairobi, Kenya
                </p>
                <p className="text-sm italic text-gray-500 mt-1 flex items-center gap-2">
                    <Quote className="w-4 h-4 text-teal-400" />
                    &quot;Knowledge is Light&quot;
                </p>

              </div>

              {/* Optional decorative badge */}
              <div className="bg-teal-100 text-teal-800 text-sm px-4 py-2 rounded-full font-semibold shadow-inner">
                Excellence in Education
              </div>
            </div>
          </section>

          {/* Calendar + Metrics Side-by-Side */}
          <section className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Calendar */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-sm">
              <h2 className="text-xl font-semibold text-teal-800 mb-4">Academic Calendar</h2>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <Calendar />
              </div>
            </div>

            {/* School Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 flex-1">
              {[
                { title: 'Teachers', value: '25', icon: <UserCheck className="w-6 h-6 text-teal-600" /> },
                { title: 'Students', value: '500', icon: <Users className="w-6 h-6 text-teal-600" /> },
                { title: 'Streams', value: '4', icon: <LayoutGrid className="w-6 h-6 text-teal-600" /> },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600 hover:shadow-lg transition flex items-center gap-4"
                >
                  <div>{item.icon}</div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 mb-1">{item.title}</h2>
                    <p className="text-3xl font-bold text-teal-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {['Form 1', 'Form 2', 'Form 3', 'Form 4'].map((form, index) => (
    <div
      key={index}
      className="group relative overflow-hidden cursor-pointer bg-gradient-to-br from-teal-300 to-teal-200 p-[2px] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-white opacity-0 group-hover:opacity-100 transition duration-300 blur-md rounded-2xl z-0"></div>

      {/* Inner container stays teal (transparent) */}
      <div className="relative rounded-2xl p-6 z-10 h-full w-full transition group-hover:bg-teal-300">
        {/* Header with white bg */}
        <div className="flex items-center justify-between mb-4 bg-white p-2 rounded-md shadow-sm">
          <h3 className="text-xl font-bold text-teal-900 group-hover:text-teal-950 transition">
            {form}
          </h3>
          <BookOpen className="text-teal-700 group-hover:text-teal-900 transition" size={24} />
        </div>

        <ul className="space-y-3 text-sm font-medium text-teal-900">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart2 className="text-teal-800" size={18} />
              <span className="px-3 py-1 bg-white text-teal-900 border border-teal-400 rounded-md shadow-sm">
                Term: 1
              </span>
            </div>
          </li>

          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart2 className="text-teal-800" size={18} />
              <span className="px-3 py-1 bg-white text-yellow-800 border border-yellow-400 rounded-md shadow-sm">
                Mean Points: 8.5
              </span>
            </div>
          </li>

          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Percent className="text-teal-800" size={18} />
              <span className="px-3 py-1 bg-white text-purple-800 border border-purple-400 rounded-md shadow-sm">
                Mean Marks: 75%
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  ))}
</section>


        </main>
      </div>
    </div>
  );
}
