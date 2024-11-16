import path from 'path';

export const mainController = {
    getSlash: (req, res, next) => {
        try {
        
        res.sendFile(path.resolve('public', 'index.html'));
        } catch (error) {
            next(createHttpError(500, 'Internal Server Error'));
        }
    }
};