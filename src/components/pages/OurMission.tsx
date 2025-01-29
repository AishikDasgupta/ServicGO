import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import mision_1 from "../../../public/mission_1.png";
import mision_2 from "../../../public/mission_2.png";

const growthData = [
  { name: "Jan", growth: 40 },
  { name: "Feb", growth: 55 },
  { name: "Mar", growth: 70 },
  { name: "Apr", growth: 85 },
  { name: "May", growth: 100 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MissionPage: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="w-screen min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24"
    >
      <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
        {/* Our Mission Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Our Mission
        </motion.h1>

        {/* First Section: Picture on the Right, Paragraph on the Left */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="text-white">
            <p className="justify-items-stretch">
              At GrowwInfinity, our mission is to empower businesses of all
              sizes—from startups to established enterprises—to thrive in the
              digital age.
            </p>
            <br></br>
            <p className="justify-items-center">
              We recognize that the world is rapidly evolving, and the key to
              sustained success lies in embracing cutting-edge technology and
              innovative strategies. We believe in the transformative power of
              technology to revolutionize how businesses operate, connect with
              customers, and achieve their goals.
            </p>
            <br></br>
            <p className="justify-items-center">
              By leveraging the latest advancements in digital tools, data
              analytics, and online platforms, we aim to provide tailored,
              effective, and scalable solutions that address the unique
              challenges and opportunities of each business we work with.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <img
              src={mision_1}
              alt="Mission Image"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Second Section: Picture on the Left, Paragraph on the Right */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <img
              src={mision_2}
              alt="Growth Image"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="text-white">
            <p className="justify-items-stretch">
              Our commitment goes beyond just delivering services; we strive to
              be a trusted partner in your growth journey. Whether it's
              enhancing your online visibility, streamlining operations, or
              building stronger customer relationships, we are dedicated to
              helping you unlock your full potential.
            </p>
            <br></br>
            <p className="justify-items-center">
              At GrowwInfinity, we don’t just adapt to change—we drive it. By
              combining innovation, expertise, and a customer-centric approach,
              we aim to create a future where every business, regardless of size
              or industry, can achieve sustainable growth and long-term success
              in the digital era.
            </p>
          </motion.div>
        </motion.div>

        {/* Graph Section: Two Columns */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black/30 rounded-lg p-8 mb-8"
        >
          {/* Left Column: Information About the Graph */}
          <motion.div variants={itemVariants} className="text-white">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Understanding Business Growth
            </h2>
            <p className="text-lg mb-4">
              The graph on the right illustrates the growth trajectory of
              businesses that have partnered with us. It shows a steady increase
              in key performance metrics over time, reflecting the effectiveness
              of our solutions.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Jan: Initial growth phase with a 40% increase.</li>
              <li>Feb: Continued improvement, reaching 55% growth.</li>
              <li>Mar: Significant progress with 70% growth.</li>
              <li>Apr: Near-optimal performance at 85% growth.</li>
              <li>May: Achieving full potential with 100% growth.</li>
            </ul>
          </motion.div>

          {/* Right Column: Graph */}
          <motion.div variants={itemVariants}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#333",
                    borderColor: "#555",
                  }}
                  itemStyle={{ color: "#fff" }}
                />
                <Line
                  type="monotone"
                  dataKey="growth"
                  stroke="#00ff9f"
                  strokeWidth={3}
                  dot={{ stroke: "#00ff9f", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MissionPage;
