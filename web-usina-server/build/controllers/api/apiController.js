"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAndDeleteById = exports.getParamsById = exports.getIndex = exports.createPost = void 0;
const fs_1 = __importDefault(require("fs"));
const filePath = './jsonEndpoints.json';
const readJsonFile = () => {
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};
const writeJsonFile = (data) => {
    fs_1.default.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newEndpoint = req.body;
    const data = readJsonFile();
    data[0].mainEndpoints.push(newEndpoint);
    writeJsonFile(data);
    res.status(201).send(newEndpoint);
});
exports.createPost = createPost;
const getIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = readJsonFile();
    res.send(data[0].mainEndpoints);
});
exports.getIndex = getIndex;
const getParamsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const endpoint = req.params.endpoint;
    const updatedEndpoint = req.body;
    const data = readJsonFile();
    const index = data[0].mainEndpoints.findIndex((ep) => ep.endpoint === endpoint);
    if (index !== -1) {
        data[0].mainEndpoints[index] = updatedEndpoint;
        writeJsonFile(data);
        res.send(updatedEndpoint);
    }
    else {
        res.status(404).send({ message: 'Endpoint not found' });
    }
});
exports.getParamsById = getParamsById;
const getAndDeleteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const endpoint = req.params.endpoint;
    const data = readJsonFile();
    const index = data[0].mainEndpoints.findIndex((ep) => ep.endpoint === endpoint);
    if (index !== -1) {
        const deletedEndpoint = data[0].mainEndpoints.splice(index, 1);
        writeJsonFile(data);
        res.send(deletedEndpoint);
    }
    else {
        res.status(404).send({ message: 'Endpoint not found' });
    }
});
exports.getAndDeleteById = getAndDeleteById;
//# sourceMappingURL=apiController.js.map