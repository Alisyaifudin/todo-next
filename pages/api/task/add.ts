import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../db";
import { tasks } from "../../../db/schema";
import { Result } from "../../../types";
import { desc } from "drizzle-orm";

export type Res = Result<boolean>;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Res>) {
	const body = req.body as string;
	try {
		const ids = await db.select({ id: tasks.id }).from(tasks).orderBy(desc(tasks.id));
		if (ids.length < 12) {
			const id = ids.length > 0 ? ids[0].id + 1 : 0;
			await db.insert(tasks).values({ task: body, id }).execute();
		}
		res.status(200).json({
			data: true,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			data: false,
			error,
		});
	}
}
