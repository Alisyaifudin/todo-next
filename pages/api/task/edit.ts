import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../db";
import { tasks } from "../../../db/schema";
import { Result } from "../../../types";
import { eq } from "drizzle-orm";

export type EditBody = {
	id: number;
	completed: boolean;
	deleted: boolean;
};

type Error = { id: number; error: any };

export type Res = Result<boolean, Error[]>;
// export type Res = Result<string>;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Res>) {
	const body = JSON.parse(req.body) as EditBody[];
	const errors: Error[] = [];
	for (const item of body) {
		const { id, completed, deleted } = item;
		if (deleted) {
			try {
				await db.delete(tasks).where(eq(tasks.id, id));
			} catch (error) {
				errors.push({ id, error });
			}
			continue;
		}
		try {
			await db.update(tasks).set({ completed }).where(eq(tasks.id, id));
		} catch (error) {
			errors.push({ id, error });
		}
	}
	const success = errors.length === 0;
	res.send({ data: success, error: success ? undefined : errors });
}
