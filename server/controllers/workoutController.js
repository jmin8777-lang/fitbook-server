import pool from "../config/db.js";

// 🔥 GET (DB 조회)
export const getWorkouts = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM workouts");

        res.json(rows);

    } catch (error) {
        res.status(500).json({
            message: "서버 오류",
            error: error.message
        });
    }
};


// 🔥 POST (DB 저장)
export const createWorkout = async (req, res) => {
    try {
        const { type, duration } = req.body;

        // 유효성 검사
        if (!type || !duration) {
            return res.status(400).json({
                message: "type과 duration은 필수입니다."
            });
        }

        if (typeof duration !== "number") {
            return res.status(400).json({
                message: "duration은 숫자여야 합니다."
            });
        }

        if (duration <= 0) {
            return res.status(400).json({
                message: "duration은 0보다 커야 합니다."
            });
        }

        // 🔥 DB 저장
        const [result] = await pool.query(
            "INSERT INTO workouts (type, duration) VALUES (?, ?)",
            [type.trim(), duration]
        );

        res.status(201).json({
            message: "운동 기록 추가 성공",
            id: result.insertId
        });

    } catch (error) {
        res.status(500).json({
            message: "서버 오류",
            error: error.message
        });
    }
};