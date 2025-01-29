import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const marketGrowthData = [
  { name: "Current", potential: 100 },
  { name: "Year 1", potential: 150 },
  { name: "Year 2", potential: 225 },
  { name: "Year 3", potential: 338 },
  { name: "Year 4", potential: 507 },
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

const VisionPage: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="w-screen min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24"
    >
      <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
        {/* Our Vision Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Our Vision
        </motion.h1>

        {/* First Section: Paragraph on the Left, Image on the Right */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="text-white">
            <p className="text-justify">
              Our vision is rooted in a deep understanding of the challenges
              businesses face today and a relentless drive to provide solutions
              that matter. We strive to build long-term partnerships with our
              clients, fostering trust, collaboration, and mutual growth.
              Through our innovative approach and customer-first mindset, we aim
              to create a world where every business can thrive in the digital
              economy.
            </p>
            <br></br>
            <p className="text-justify">
              At GrowwInfinity, we don’t just aim to lead—we aim to inspire. By
              delivering exceptional value, fostering a culture of continuous
              improvement, and prioritizing the success of our clients, we are
              committed to shaping a future where technology and human potential
              converge to create limitless opportunities. we aim to redefine
              what’s possible for our clients, helping them achieve
              unprecedented growth and sustainable success.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <img
              src="public/vision_1.png"
              alt="Vision Image"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Second Section: Image on the Left, Paragraph on the Right */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <img
              src="public/vision_2.png"
              alt="Growth Image"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="text-white">
            <p className="text-justify">
              At GrowwInfinity, our vision is to become the leading provider of
              online business solutions, setting the standard for excellence in
              the digital landscape. We aspire to be recognized globally for our
              unparalleled expertise, groundbreaking innovation, and unwavering
              commitment to exceptional customer service.
            </p>
            <br></br>
            <p className="text-justify">
              We envision a future where businesses of all sizes can confidently
              navigate the complexities of the digital world, empowered by our
              cutting-edge tools, strategic insights, and tailored solutions. By
              staying at the forefront of technological advancements and
              industry trends,
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
              Market Potential Growth Projection
            </h2>
            <p className="text-lg mb-4">
              The graph on the right illustrates the projected growth of market
              potential over the next four years. It demonstrates the
              exponential growth businesses can achieve by leveraging our
              innovative solutions.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Current: Baseline market potential at 100%.</li>
              <li>Year 1: Growth to 150% market potential.</li>
              <li>Year 2: Further expansion to 225%.</li>
              <li>Year 3: Significant increase to 338%.</li>
              <li>Year 4: Achieving 507% market potential.</li>
            </ul>
          </motion.div>

          {/* Right Column: Graph */}
          <motion.div variants={itemVariants}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketGrowthData}>
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
                <Bar dataKey="potential" fill="#00ff9f" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VisionPage;
