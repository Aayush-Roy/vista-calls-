import { Router } from "express";
const router = Router();
router.route("/login");
router.route("/register");
router.route("/add_to_activity");
router.route("/get_all_activity");

export default router;