import { db } from "../db";

export const getEquips = (_, res) => {
    cosnt q = "SELECT * FROM equipamentos";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};