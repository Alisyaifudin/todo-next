import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../db";
import { Task, tasks } from "../../../db/schema";
import { Result } from "../../../types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Result<Task[]>>) {
	try {
		const result = await db.select().from(tasks);
		res.status(200).json({
			data: result,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error });
	}
}
