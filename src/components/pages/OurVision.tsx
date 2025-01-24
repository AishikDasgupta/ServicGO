import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const marketGrowthData = [
  { name: 'Current', potential: 100 },
  { name: 'Year 1', potential: 150 },
  { name: 'Year 2', potential: 225 },
  { name: 'Year 3', potential: 338 },
  { name: 'Year 4', potential: 507 },
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
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-6 text-center text-white"
        >
          Our Vision: To Be The Leading Provider of Online Business Solutions
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="bg-black/30 rounded-lg p-8 mb-8 text-bg-offWhite"
        >
          <motion.p variants={itemVariants} className="mb-4">
            Our vision is to be the leading provider of online business solutions, recognized for our expertise,
            innovation, and exceptional customer service.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-6">
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-semibold mb-4 text-gray-300"
            >
              We strive to:
            </motion.h2>
            <motion.ul
              variants={containerVariants}
              className="list-disc list-inside space-y-2 text-gray-400"
            >
              <motion.li variants={itemVariants}>
                Continuously innovate and adapt to the evolving digital landscape
              </motion.li>
              <motion.li variants={itemVariants}>
                Build long-term partnerships with our clients
              </motion.li>
              <motion.li variants={itemVariants}>
                Foster a culture of excellence and continuous improvement
              </motion.li>
              <motion.li variants={itemVariants}>
                Become the go-to partner for businesses seeking to succeed online
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-black/30 rounded-lg p-8 mb-8 text-gray-50"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mb-6"
          >
            Market Potential Growth Projection
          </motion.h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="potential" fill="#00ff9f" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Join us on our journey to redefine online business success. Explore our services and discover how we can help you achieve your vision.
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VisionPage;
