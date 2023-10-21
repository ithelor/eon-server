import { Request, Response } from 'express';

export default function handleControllerError<T>(
    target: T,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    _: string,
    descriptor: PropertyDescriptor,
) {
    const method = descriptor.value;

    descriptor.value = async function (req: Request, res: Response, ...args: unknown[]) {
        try {
            const result = await method.apply(target, [req, res, ...args]);

            return result;
        } catch (error) {
            if (!(error instanceof Error)) {
                return;
            }

            res.status(400).json({ error: error.message });
        }
    };
}
