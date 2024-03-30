import React from "react";
import Achievement from "../components/Achievement";
import { studentAchivementData } from "../assets/StudentAchivementData";


const StudentAchievements = () => {
	return (
		<div>
			<div className="flex flex-col flex-wrap justify-center items-center bg-white mx-auto">
				<div className="w-full  text-center bg-blue-950 p-4 ">
					<h1 className="text-2xl  text-white font-semibold">
						Student Achievements
					</h1>
				</div>
			</div>
			<div className="flex flex-wrap gap-6 py-10 justify-center max-w-5xl px-8 mx-auto">
				{studentAchivementData.map((achievement) => {
					return (
						<Achievement
							key={achievement.id}
							achievement={achievement}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default StudentAchievements;