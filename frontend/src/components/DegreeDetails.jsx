import React from "react";
import { FaCheck } from "react-icons/fa";

const DegreeDetails = ({ degreeDetails }) => {
	return (
		<div>
			<div className="flex items-center gap-2 justify-start my-2 text-blue-900">
				<FaCheck />
				<h1 className="font-bold text-lg">{degreeDetails.degree}</h1>
			</div>
			<h2 className="my-3 font-semibold text-gray-500">
				{degreeDetails.degreeDescription}
			</h2>

			<ul className="pl-6 list-disc text-gray-700 my-3">
				{degreeDetails.courses.map((courseInfo) => {
					return (
						<li key={courseInfo.id}>
							{courseInfo.course} <br />{" "}
							{courseInfo?.specialization}
						</li>
					);
				})}
			</ul>
			<div className=" text-justify border-[1px] border-blue-400 p-2 rounded-md text-blue-600 font-semibold">
				{degreeDetails.courseDescription}
			</div>
		</div>
	);
};

export default DegreeDetails;
