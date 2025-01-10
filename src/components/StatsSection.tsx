import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  RadarChart,
  PolarGrid,
  PolarAngleAxis as RadarPolarAngleAxis,
  Radar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { staggerContainer } from "@/lib/animations"; // Import staggerContainer for consistent animations

interface DataPoint {
  name: string;
  uv: number;
  fill?: string;
}

interface RadarDataPoint {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
}

interface LineDataPoint {
  name: string;
  before: number;
  after: number;
}

const radialBarData: DataPoint[] = [
  { name: "Web Dev", uv: 39, fill: "#8884d8" },
  { name: "App Dev", uv: 41, fill: "#83a6ed" },
  { name: "Marketing", uv: 40, fill: "#8dd1e1" },
  { name: "Other", uv: 45, fill: "#82ca9d" },
];

const radarData: RadarDataPoint[] = [
  { subject: "Innovation", A: 98, B: 130, fullMark: 150 },
  { subject: "Efficiency", A: 110, B: 130, fullMark: 150 },
  { subject: "Reliability", A: 106, B: 130, fullMark: 150 },
  { subject: "Speed", A: 99, B: 100, fullMark: 150 },
  { subject: "Support", A: 105, B: 90, fullMark: 150 },
];

const lineChartData: LineDataPoint[] = [
  { name: "Jan", before: 200, after: 140 },
  { name: "Feb", before: 300, after: 300 },
  { name: "Mar", before: 500, after: 600 },
  { name: "Apr", before: 300, after: 390 },
  { name: "May", before: 600, after: 780 },
];

const style = {
  top: "50%",
  right: -90,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures animation triggers every time the section comes into view
    threshold: 0.1, // Triggers when 10% of the section is visible
  });

  return (
    <section
      id="stats"
      ref={ref} // Attach the ref to the section
      className="py-16 bg-gradient-to-r from-bg-darkBlue to-bg-dark"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Trigger animations based on inView
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Top Row - Content */}
        <motion.div
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-primary-foreground">
            Visualizing Your Success
          </h2>
          <p className="text-lg text-text-muted mt-4">
            Dive into interactive visualizations showcasing our performance and
            key achievements. From project distribution to monthly growth, see how
            we’ve scaled over time to deliver impactful results.
          </p>
        </motion.div>

        {/* Bottom Row - Charts */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Radial Bar Chart */}
          <motion.div
            className="p-6 rounded-lg shadow-xl "
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg text-center font-semibold text-neutral-light mb-4">
              Project Distribution
            </h3>
            <RadialBarChart
              width={250}
              height={250}
              cx="50%"
              cy="50%"
              innerRadius="10%"
              outerRadius="90%"
              barSize={30}
              data={radialBarData}
            >
              <PolarAngleAxis type="number" domain={[0, 50]} angleAxisId={0} tick={false} />
              <RadialBar background dataKey="uv" />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            className="p-6 rounded-lg shadow-xl "
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg text-center font-semibold text-neutral-light mb-4">
              Core Metrics
            </h3>
            <RadarChart cx={170} cy={125} outerRadius={100} width={500} height={250} data={radarData}>
              <PolarGrid />
              <RadarPolarAngleAxis dataKey="subject" />
              <Radar
                name="Metrics A"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </motion.div>

          {/* Line Chart */}
          <motion.div
            className="p-6 rounded-lg shadow-xl "
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg text-center font-semibold text-neutral-light mb-4">
              Monthly Growth
            </h3>
            <LineChart width={300} height={250} data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="before" stroke="#8884d8" />
              <Line type="monotone" dataKey="after" stroke="#82ca9d" /> 
              <Legend />
            </LineChart>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
