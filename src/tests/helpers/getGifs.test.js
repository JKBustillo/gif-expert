import { getGifs } from "../../helpers/getGifs";

describe('Tests in getGifs', () => {
    test('should bring 10 elements', async () => {
        const gifs = await getGifs('Dragon ball');

        expect(gifs.length).toBe(10);
    });

    test('should have 0 elements', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
});
