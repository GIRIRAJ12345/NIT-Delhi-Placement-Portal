import React from "react";

const Achievement = ({ achievement }) => {
	return (
		<div className="w-60 border-2 border-blue-300 p-2 rounded-lg">
			<div className="flex justify-center py-1">
				<img src={achievement.image} className="w-20" />
			</div>
			<div>
				<h1 className="text-center text-lg font-bold text-blue-900 py-1">
					{achievement.name}
				</h1>
				<p className="text-justify text-gray-600">
					{achievement.description}
				</p>
			</div>
		</div>
	);
};

export default Achievement;
