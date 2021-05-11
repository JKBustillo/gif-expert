import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Tests in useFetchGifs hook', () => {
    test('should return initial state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon ball'));
        const { images, loading } = result.current;

        await waitForNextUpdate();

        expect(images).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return a image array and loading false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon ball'));
        await waitForNextUpdate();

        const { images, loading } = result.current;

        expect(images.length).toBe(10);
        expect(loading).toBe(false);
    });
});