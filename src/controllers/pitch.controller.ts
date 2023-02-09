import { Request, Response } from 'express';
import { PitchService } from 'services';

export const getPitches = async (req: Request, res: Response) => {
    try {
        const pitch = await PitchService.getPitch({});

        res.json(pitch);
    } catch (error) {
        res.status(400).send();
    }
};
