import { blogs } from "./blogs";
import { motion } from "framer-motion";

const Blog = () => {
	return (
		<>
			<div className="container relative md:mt-24 mt-16" id="blogs">
				<div className="grid grid-cols-1 pb-6 text-center">
					<h3 className="mb-6 md:text-2xl text-xl font-bold">
						Articles &amp; News
					</h3>
					<p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
						Explore my latest articles and news updates, where I share
            insights, tips, and trends in the world of video editing and
					</p>
				</div>

				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
					{blogs.map((blog, idx) => (
						<motion.div
							className="group"
							key={idx}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: idx * 0.15 }}
							whileHover={{
								scale: 1.04,
								boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
							}}
						>
							<div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
								<img
									src={blog.image}
									alt=""
									className="w-[400px] h-[300px]"
								/>
								<div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
							</div>
							<div className="p-4">
								<a
									href={blog.link}
									className="title text-lg font-medium hover:text-blue-500 duration-500"
								>
									{blog.title}
								</a>
								<p className="text-slate-400 dark:text-white/60 mt-3">
									{blog.description}
								</p>
								<div className="mt-3">
									<a
										href={blog.link}
                    target="_blank"
										className="hover:text-blue-500"
									>
										Read More{" "}
										<i className="mdi mdi-arrow-right align-middle"></i>
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default Blog;
