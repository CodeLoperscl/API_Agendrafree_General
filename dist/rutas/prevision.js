"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prevision_1 = require("../controllers/prevision");
const route = (0, express_1.Router)();
route.get("/", prevision_1.getPrevisiones);
route.get("/:id", prevision_1.getPrevision);
route.post("/", prevision_1.postPrevision);
route.put("/:id", prevision_1.putPrevision);
route.delete("/:id", prevision_1.deletePrevision);
exports.default = route;
//# sourceMappingURL=prevision.js.map