// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-5xl font-bold text-gray-800">Task Management App</h1>

//       <p className="mt-4 text-gray-600">
//         Organize, manage, and track your daily tasks efficiently.
//       </p>

//       <div className="mt-8 flex gap-4">
//         <Link
//           to="/login"
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Login
//         </Link>

//         <Link
//           to="/register"
//           className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
//         >
//           Register
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {
  FaTasks,
  FaSyncAlt,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
    FaClock,
} from "react-icons/fa";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: <FaTasks />,
    title: "Task Planning",
    desc: "Create and organize tasks effortlessly with a clean interface.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Real-Time Updates",
    desc: "Stay synchronized across all your devices instantly.",
  },
  {
    icon: <FaChartLine />,
    title: "Progress Tracking",
    desc: "Monitor completed and pending tasks with ease.",
  },
];

const stats = [
  {
    icon: <FaTasks />,
    number: "10K+",
    title: "Tasks Completed",
  },
  {
    icon: <FaUsers />,
    number: "2K+",
    title: "Active Users",
  },
  {
    icon: <FaChartLine />,
    number: "99%",
    title: "Success Rate",
  },
];
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white mb-0 pb-0">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 bg-cyan-100"></div>

          <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-blue-300 blur-3xl opacity-30"></div>
          <div className="absolute left-10 bottom-20 h-60 w-60 rounded-full bg-cyan-300 blur-3xl opacity-30"></div>

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <p className="text-blue-600 font-semibold mb-4">
                Productivity Made Simple
              </p>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                Manage Your
                <span className="text-blue-600"> Tasks </span>
                Smarter
              </h1>

              <p className="mt-6 text-gray-600 text-lg leading-8">
                A modern task management platform that helps teams stay
                organized, collaborate efficiently, and achieve more every day.
              </p>

              <div className="flex gap-4 mt-10">
                <Link
                  to="/register"
                  className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-8 py-4 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                >
                  Login
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="w-96 h-96 rounded-[40px] bg-gradient-to-br from-blue-600 to-cyan-400 shadow-2xl flex items-center justify-center"
              >
                <div className="bg-white rounded-3xl p-8 w-72 shadow-xl">
                  <div className="space-y-4">
                    <div className="h-4 rounded bg-blue-200"></div>
                    <div className="h-4 rounded bg-gray-200"></div>
                    <div className="h-4 rounded bg-cyan-200"></div>
                    <div className="h-4 rounded bg-gray-200"></div>
                    <div className="h-4 rounded bg-blue-200"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <svg
            className="absolute -bottom-1 left-0 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,90C240,20,480,60,720,75C960,90,900,90,1440,50L1440,120L0,120Z"
            />
          </svg>
        </section>

        {/* FEATURES */}

        <section
          id="features"
          className="relative overflow-hidden py-5 bg-white"
        >
          {/* Background Blur */}
          <div className="absolute top-24 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
                Why Choose Us
              </span>

              <h2 className="mt-6 text-5xl font-black text-slate-900">
                Everything You Need
                <br />
                To Stay Productive
              </h2>

              <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-500 leading-8">
                Powerful tools designed to simplify task management, improve
                collaboration, and help your team accomplish more with less
                effort.
              </p>
            </motion.div>

            <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:border-blue-200 hover:shadow-blue-100 hover:shadow-2xl"
                >
                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl transition-all duration-500 group-hover:bg-blue-400/20"></div>

                  {/* Icon */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-4xl shadow-lg">
                    {item.icon}
                  </div>

                  {/* Number */}
                  <span className="absolute right-8 top-8 text-6xl font-black text-slate-100">
                    0{index + 1}
                  </span>

                  <h3 className="relative mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="relative mt-5 leading-8 text-slate-500">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn More →
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section id="about" className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Glow */}
                <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl"></div>

                {/* Dashboard */}
                <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl">
                  {/* Window Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400"></span>
                      <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                      <span className="h-3 w-3 rounded-full bg-green-400"></span>
                    </div>

                    <span className="text-sm font-medium text-slate-400">
                      Dashboard
                    </span>
                  </div>

                  {/* Top Cards */}
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-blue-50 p-2">
                      <FaTasks className="text-2xl text-blue-600" />

                      <h3 className="mt-2 text-2xl font-bold">124</h3>

                      <p className="text-sm text-slate-500">Total Tasks</p>
                    </div>

                    <div className="rounded-2xl bg-green-50 p-2">
                      <FaCheckCircle className="text-2xl text-green-600" />

                      <h3 className="mt-2 text-2xl font-bold">89</h3>

                      <p className="text-sm text-slate-500">Completed</p>
                    </div>

                    <div className="rounded-2xl bg-orange-50 p-2">
                      <FaClock className="text-2xl text-orange-500" />

                      <h3 className="mt-2 text-2xl font-bold">35</h3>

                      <p className="text-sm text-slate-500">Pending</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mt-3 rounded-2xl bg-slate-50 p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Weekly Progress</h4>

                      <FaChartLine className="text-blue-600" />
                    </div>

                    <div className="mt-5 h-3 rounded-full bg-slate-200">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    </div>

                    <div className="mt-3 flex justify-between text-sm text-slate-500">
                      <span>80% Completed</span>

                      <span>20 Tasks Left</span>
                    </div>
                  </div>

                  {/* Task List */}
                  <div className="mt-4 space-y-2">
                    {[
                      "Design Homepage",
                      "Fix Authentication",
                      "Deploy Backend",
                    ].map((task, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-xl border border-slate-100 p-2"
                      >
                        <div className="flex items-center gap-3">
                          <FaCheckCircle className="text-green-500" />

                          <span className="font-medium">{task}</span>
                        </div>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                          Done
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -right-6 -bottom-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-white shadow-2xl"
                >
                  <p className="text-sm opacity-80">Productivity</p>

                  <h2 className="text-3xl font-bold">+98%</h2>
                </motion.div>
              </motion.div>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                  About Platform
                </span>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  Built for Individuals & Teams
                </h2>

                <p className="mt-4 text-slate-600 leading-7">
                  Manage projects, assign tasks, monitor progress, and
                  collaborate with your team through a simple, modern, and
                  secure workspace.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <FaCheckCircle className="mt-1 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Clean Dashboard</h4>
                      <p className="text-sm text-slate-500">
                        Everything organized in one place.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <FaCheckCircle className="mt-1 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Fast Performance</h4>
                      <p className="text-sm text-slate-500">
                        Optimized for speed and efficiency.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <FaCheckCircle className="mt-1 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Secure Authentication</h4>
                      <p className="text-sm text-slate-500">
                        JWT-based secure user access.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <FaCheckCircle className="mt-1 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Responsive Design</h4>
                      <p className="text-sm text-slate-500">
                        Works perfectly on every device.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="stats" className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-10">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
                Statistics
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                Trusted by Teams Worldwide
              </h2>

              <p className="mt-2 max-w-xl mx-auto text-slate-400">
                Numbers that reflect our commitment to productivity and
                collaboration.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 text-2xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold">{item.number}</h3>

                      <p className="text-slate-400">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="py-10 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <h2 className="text-3xl font-black">
              Ready to Organize Your Work?
            </h2>

            <p className="mt-2 text-md opacity-90">
              Join thousands of users managing projects and tasks more
              efficiently.
            </p>

            <Link
              to="/register"
              className="inline-block mt-5 px-6 py-2 rounded-xl bg-white text-blue-600 font-bold hover:scale-105 transition"
            >
              Start Free
            </Link>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
