import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const growthData = [
  { name: 'Jan', growth: 40 },
  { name: 'Feb', growth: 55 },
  { name: 'Mar', growth: 70 },
  { name: 'Apr', growth: 85 },
  { name: 'May', growth: 100 },
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
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-6 text-center text-white"
        >
          Our Mission: To Empower Businesses Through Cutting-Edge Solutions
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="bg-black/30 rounded-lg p-8 mb-8"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-bg-offWhite"
          >
            At GrowwInfinity, our mission is to empower businesses of all sizes to thrive in the digital age.
            We believe in the transformative power of technology and strive to provide innovative and
            effective online solutions that drive growth and success.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-6">
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-semibold mb-4 text-gray-300"
            >
              We are passionate about helping businesses:
            </motion.h2>
            <motion.ul
              variants={containerVariants}
              className="list-disc list-inside space-y-2 text-gray-400"
            >
              <motion.li variants={itemVariants}>Increase their online visibility</motion.li>
              <motion.li variants={itemVariants}>Build strong customer relationships</motion.li>
              <motion.li variants={itemVariants}>Streamline operations</motion.li>
              <motion.li variants={itemVariants}>Achieve their business goals</motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-black/30 rounded-lg p-8 mb-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mb-6 text-gray-300"
          >
            Digital Business Growth Trajectory
          </motion.h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                itemStyle={{ color: '#fff' }}
              />
              <Line
                type="monotone"
                dataKey="growth"
                stroke="#00ff9f"
                strokeWidth={3}
                dot={{ stroke: '#00ff9f', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Let us help you achieve your online business goals. Contact us today for a free consultation.
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MissionPage;
