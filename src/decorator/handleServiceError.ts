import AbstractService from 'services/AbstractService';

export default function handleServiceError<T extends typeof AbstractService>(
    target: T,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    _: string,
    descriptor: PropertyDescriptor,
) {
    const method = descriptor.value;

    descriptor.value = async function (...args: unknown[]) {
        try {
            const result = await method.apply(target, args);

            return result;
        } catch (error) {
            if (!(error instanceof Error)) {
                return;
            }

            throw new Error(`Error in ${target.name}:${method.name} - ${error.message}`);
        }
    };
}
