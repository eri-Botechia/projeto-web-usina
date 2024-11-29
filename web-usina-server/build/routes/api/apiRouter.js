"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = require("../../controllers/api/apiController");
const router = (0, express_1.Router)();
router.post('/endpoints', apiController_1.createPost);
router.get('/', apiController_1.getIndex);
router.put('/:endpoint', apiController_1.getParamsById);
router.delete('/:endpoint', apiController_1.getAndDeleteById);
exports.default = router;
//# sourceMappingURL=apiRouter.js.map